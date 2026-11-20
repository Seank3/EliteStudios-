import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
const DB = path.join(process.cwd(), "data", "store.json");
function read() { try { return JSON.parse(fs.readFileSync(DB, "utf8")); } catch { return { bookings: [], contacts: [], audit: [] }; } }
function write(d: any) { fs.writeFileSync(DB, JSON.stringify(d, null, 2)); }
export async function POST(req: NextRequest) {
  const b = await req.json();
  if (!b.name || !b.phone || !b.email || !b.service || !b.details) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  const d = read();
  const reference = "ES-" + Date.now().toString(36).toUpperCase();
  const booking = { id: Date.now(), reference, ...b, status: "pending", createdAt: new Date().toISOString() };
  d.bookings.unshift(booking);
  d.audit.unshift({ at: new Date().toISOString(), action: "booking_created", reference });
  write(d);
  return NextResponse.json({ ok: true, reference }, { status: 201 });
}
export async function GET() {
  const d = read();
  return NextResponse.json({ bookings: d.bookings });
}
