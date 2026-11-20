import { createHmac, timingSafeEqual } from "crypto";

/** Verify the signed admin cookie: "<expiry>.<hmac>". */
export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  const [expStr, sig] = token.split(".");
  const exp = Number(expStr);
  if (!exp || !sig || Date.now() > exp) return false;
  const secret = process.env.ADMIN_PASSWORD || "elite2026";
  const expected = createHmac("sha256", secret).update(`admin:${exp}`).digest("hex");
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
