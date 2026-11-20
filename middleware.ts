import { NextRequest, NextResponse } from "next/server";

/**
 * Edge middleware: gate the admin UI and admin APIs behind the signed session
 * cookie. The login page and login endpoint stay public.
 * Edge runtime cannot use node:crypto, so the HMAC is done with Web Crypto.
 */

async function expectedSig(exp: string): Promise<string> {
  const secret = process.env.ADMIN_PASSWORD || "elite2026";
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`admin:${exp}`));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function valid(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig) return false;
  if (Date.now() > Number(exp)) return false;
  const want = await expectedSig(exp);
  if (want.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < want.length; i++) diff |= want.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public endpoints: login page + login API
  if (pathname === "/api/admin/login" || pathname === "/admin/login") return NextResponse.next();

  const token = req.cookies.get("elite_admin")?.value;
  const authed = await valid(token);

  // Admin APIs: bookings GET/PATCH/DELETE are protected; POST (client booking) is public.
  if (pathname.startsWith("/api/bookings")) {
    if (req.method === "POST") return NextResponse.next();
    if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return NextResponse.next();
  }

  // Admin UI
  if (pathname.startsWith("/admin")) {
    if (!authed) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/bookings/:path*"],
};
