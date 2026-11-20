"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/content";

const SERVICES = [
  { v: "photography", l: "Photography" },
  { v: "audio", l: "Audio Recording" },
  { v: "music-production", l: "Music Production" },
  { v: "videography", l: "Videography / Film" },
  { v: "entertainment", l: "Entertainment Booking" },
  { v: "events", l: "Events" },
  { v: "corporate", l: "Corporate Creative Project" },
  { v: "other", l: "Other" },
];

export default function BookingForm() {
  const params = useSearchParams();
  const preset = params.get("service") || "";
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: preset, date: "", time: "", details: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [ref, setRef] = useState("");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading"); setErr("");
    try {
      const r = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Submission failed");
      setRef(j.reference); setStatus("done");
    } catch (e: any) { setErr(e.message); setStatus("error"); }
  }

  if (status === "done") {
    return (
      <div className="border border-gold/50 bg-charcoal p-10 text-center">
        <CheckCircle2 size={48} className="text-gold mx-auto" />
        <h2 className="font-display text-3xl mt-5">Request received.</h2>
        <p className="text-silver mt-3">Your booking reference is <strong className="text-gold font-mono">{ref}</strong>. Our team will review and confirm shortly.</p>
        <p className="text-silver/70 text-sm mt-2">A request is not a confirmed appointment until approved by our team.</p>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Elite Studios, my booking reference is ${ref}. I would like to follow up.`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-obsidian font-semibold text-sm px-6 py-3"><MessageCircle size={16} /> FOLLOW UP ON WHATSAPP</a>
      </div>
    );
  }

  const input = "w-full bg-obsidian border border-white/15 px-4 py-3 text-sm focus:border-gold outline-none placeholder:text-silver/40";
  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <input required placeholder="Full name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} />
      <input required placeholder="Phone (WhatsApp) *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} />
      <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} />
      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={input}>
        <option value="">Select a service *</option>
        {SERVICES.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}
      </select>
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={input} />
      <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={input} />
      <textarea required placeholder="Describe your project *" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={`${input} md:col-span-2`} />
      {err && <p className="md:col-span-2 text-red-400 text-sm">{err}</p>}
      <button disabled={status === "loading"} className="md:col-span-2 bg-gold text-obsidian font-semibold tracking-widest text-sm py-4 hover:bg-warmwhite transition disabled:opacity-60 flex items-center justify-center gap-2">
        {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> SUBMITTING…</> : "SUBMIT BOOKING REQUEST"}
      </button>
      <p className="md:col-span-2 text-silver/60 text-xs">By submitting you agree to our Terms. We reply within 24 hours, Mon–Sat.</p>
    </form>
  );
}
