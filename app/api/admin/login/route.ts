import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

export const dynamic = "force-dynamic";

/** Signed session token: <expiry>.<hmac> — no plaintext password in the cookie. */
function sign(exp: number) {
  const secret = process.env.ADMIN_PASSWORD || "elite2026";
  return createHmac("sha256", secret).update(`admin:${exp}`).digest("hex");
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const password = String(body?.password || "");
  const expected = process.env.ADMIN_PASSWORD || "elite2026";

  if (!safeEqual(password, expected))
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });

  const exp = Date.now() + 1000 * 60 * 60 * 8; // 8 hours
  const res = NextResponse.json({ ok: true });
  res.cookies.set("elite_admin", `${exp}.${sign(exp)}`, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 8,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("elite_admin", "", { path: "/", maxAge: 0 });
  return res;
}
