import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
const DB = path.join(process.cwd(), "data", "store.json");
function read() { try { return JSON.parse(fs.readFileSync(DB, "utf8")); } catch { return { bookings: [], contacts: [], audit: [] }; } }
function write(d: any) { fs.writeFileSync(DB, JSON.stringify(d, null, 2)); }
export async function POST(req: NextRequest) {
  const b = await req.json();
  if (!b.name || !b.email || !b.message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const d = read();
  d.contacts.unshift({ id: Date.now(), ...b, createdAt: new Date().toISOString() });
  write(d);
  return NextResponse.json({ ok: true }, { status: 201 });
}
