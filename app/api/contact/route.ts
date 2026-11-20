import { NextRequest, NextResponse } from "next/server";
import { createContact } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const b = await req.json().catch(() => null);
    if (!b) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

    const name = String(b.name || "").trim();
    const email = String(b.email || "").trim();
    const message = String(b.message || "").trim();

    if (!name || !email || !message)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    if (message.length > 4000)
      return NextResponse.json({ error: "Message too long" }, { status: 400 });

    await createContact({ name, email, message });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e: any) {
    console.error("contact error:", e?.message);
    return NextResponse.json({ error: "Could not send message. Please try again." }, { status: 500 });
  }
}
