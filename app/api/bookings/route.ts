import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createBooking, listBookings, updateBookingStatus, deleteBooking } from "@/lib/store";
import { verifyAdminToken } from "@/lib/adminSession";

export const dynamic = "force-dynamic";

function isAdmin() {
  return verifyAdminToken(cookies().get("elite_admin")?.value);
}

export async function POST(req: NextRequest) {
  try {
    const b = await req.json().catch(() => null);
    if (!b) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

    const name = String(b.name || "").trim();
    const phone = String(b.phone || "").trim();
    const email = String(b.email || "").trim();
    const service = String(b.service || "").trim();
    const details = String(b.details || "").trim();

    if (!name || !phone || !email || !service || !details)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    if (name.length > 120 || details.length > 4000)
      return NextResponse.json({ error: "Input too long" }, { status: 400 });

    const record = await createBooking({ name, phone, email, service, details, date: b.date, time: b.time });
    return NextResponse.json({ ok: true, reference: record.reference }, { status: 201 });
  } catch (e: any) {
    console.error("booking error:", e?.message);
    return NextResponse.json(
      { error: "We could not save your request. Please try WhatsApp or email us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    return NextResponse.json({ bookings: await listBookings() });
  } catch (e: any) {
    console.error("list bookings error:", e?.message);
    return NextResponse.json({ error: "Could not load bookings" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { reference, status } = await req.json();
    if (!reference || !["pending", "confirmed", "declined", "completed"].includes(status))
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    await updateBookingStatus(reference, status);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("update booking error:", e?.message);
    return NextResponse.json({ error: "Could not update booking" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get("reference");
    if (!reference) return NextResponse.json({ error: "Reference required" }, { status: 400 });
    await deleteBooking(reference);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("delete booking error:", e?.message);
    return NextResponse.json({ error: "Could not delete booking" }, { status: 500 });
  }
}
