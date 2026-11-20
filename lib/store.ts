import fs from "fs";
import path from "path";

export type DB = { bookings: any[]; contacts: any[]; audit: any[] };

const FILE = path.join(process.cwd(), "data", "store.json");
const TMP = "/tmp/elite-store.json";

declare global {
  // eslint-disable-next-line no-var
  var __eliteStore: DB | undefined;
}

// Hosted serverless (Netlify/Vercel) filesystems are read-only.
// Order of preference: Supabase (REST) → local JSON file → /tmp → in-memory.

const SB_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, "");
const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
export const supabaseEnabled = Boolean(SB_URL && SB_KEY);

function empty(): DB {
  return { bookings: [], contacts: [], audit: [] };
}

function readFileSafe(p: string): DB | null {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

export function readDB(): DB {
  if (global.__eliteStore) return global.__eliteStore;
  const fromFile = readFileSafe(FILE) || readFileSafe(TMP);
  global.__eliteStore = fromFile || empty();
  return global.__eliteStore;
}

export function writeDB(db: DB) {
  global.__eliteStore = db;
  try {
    fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
    return;
  } catch {}
  try {
    fs.writeFileSync(TMP, JSON.stringify(db, null, 2));
  } catch {}
}

/* ---------- Supabase REST helpers (only used when configured) ---------- */

async function sbFetch(pathName: string, init: RequestInit = {}) {
  const r = await fetch(`${SB_URL}/rest/v1/${pathName}`, {
    ...init,
    headers: {
      apikey: SB_KEY,
      Authorization: `Bearer ${SB_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`Supabase ${r.status}: ${await r.text()}`);
  return r.json();
}

const svcMap: Record<string, string> = {
  photography: "Photography",
  audio: "Audio Recording",
  "music-production": "Music Production",
  videography: "Videography / Film",
  entertainment: "Entertainment Booking",
  events: "Events",
  corporate: "Corporate Creative Project",
  other: "Other",
};

export function serviceLabel(v: string) {
  return svcMap[v] || v;
}

/* ---------- Bookings ---------- */

export async function createBooking(b: any) {
  const reference = "ES-" + Date.now().toString(36).toUpperCase();
  const record = {
    reference,
    name: b.name,
    phone: b.phone,
    email: b.email,
    service: b.service,
    date: b.date || "",
    time: b.time || "",
    details: b.details,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  if (supabaseEnabled) {
    const rows = await sbFetch("bookings", {
      method: "POST",
      body: JSON.stringify({
        reference,
        customer_name: b.name,
        phone: b.phone,
        email: b.email,
        service: b.service,
        preferred_date: b.date || null,
        preferred_time: b.time || null,
        details: b.details,
        status: "pending",
      }),
    });
    if (Array.isArray(rows) && rows[0]?.id) record.reference = rows[0].reference;
    return record;
  }

  const db = readDB();
  db.bookings.unshift({ id: Date.now(), ...record });
  db.audit.unshift({ at: new Date().toISOString(), action: "booking_created", reference });
  writeDB(db);
  return record;
}

export async function listBookings() {
  if (supabaseEnabled) {
    const rows = await sbFetch(
      "bookings?select=id,reference,customer_name,phone,email,service,preferred_date,preferred_time,details,status,created_at&order=created_at.desc"
    );
    return rows.map((r: any) => ({
      id: r.id,
      reference: r.reference,
      name: r.customer_name,
      phone: r.phone,
      email: r.email,
      service: r.service,
      date: r.preferred_date || "",
      time: r.preferred_time || "",
      details: r.details,
      status: r.status,
      createdAt: r.created_at,
    }));
  }
  return readDB().bookings;
}

export async function updateBookingStatus(reference: string, status: string) {
  if (supabaseEnabled) {
    await sbFetch(`bookings?reference=eq.${encodeURIComponent(reference)}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    await sbFetch("audit_logs", {
      method: "POST",
      body: JSON.stringify({ action: "booking_status_changed", details: { reference, status } }),
    });
    return;
  }
  const db = readDB();
  db.bookings = db.bookings.map((b) =>
    b.reference === reference ? { ...b, status } : b
  );
  db.audit.unshift({ at: new Date().toISOString(), action: "booking_status_changed", reference, status });
  writeDB(db);
}

export async function deleteBooking(reference: string) {
  if (supabaseEnabled) {
    await sbFetch(`bookings?reference=eq.${encodeURIComponent(reference)}`, { method: "DELETE" });
    return;
  }
  const db = readDB();
  db.bookings = db.bookings.filter((b) => b.reference !== reference);
  writeDB(db);
}

/* ---------- Contact ---------- */

export async function createContact(c: any) {
  if (supabaseEnabled) {
    await sbFetch("contact_submissions", {
      method: "POST",
      body: JSON.stringify({ name: c.name, email: c.email, message: c.message }),
    });
    return;
  }
  const db = readDB();
  db.contacts.unshift({ id: Date.now(), ...c, createdAt: new Date().toISOString() });
  writeDB(db);
}
