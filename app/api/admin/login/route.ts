import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expected = process.env.ADMIN_PASSWORD || "elite2026";
  if (password !== expected) return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set("elite_admin", "1", { httpOnly: true, path: "/", maxAge: 60 * 60 * 8, sameSite: "lax" });
  return res;
}
