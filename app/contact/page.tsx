"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/content";
export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [st, setSt] = useState<"idle"|"loading"|"done"|"error">("idle");
  const [err, setErr] = useState("");
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setSt("loading");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const j = await r.json(); if (!r.ok) throw new Error(j.error || "Failed");
      setSt("done");
    } catch (e: any) { setErr(e.message); setSt("error"); }
  }
  const input = "w-full bg-obsidian border border-white/15 px-4 py-3 text-sm focus:border-gold outline-none placeholder:text-silver/40";
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24 grid md:grid-cols-2 gap-12">
      <div>
        <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">CONTACT</p>
        <h1 className="font-display font-light text-5xl md:text-6xl">Let&apos;s <span className="italic text-gold">talk.</span></h1>
        <ul className="mt-10 space-y-4 text-silver">
          <li className="flex gap-3"><MapPin size={18} className="text-gold" />{SITE.address}</li>
          <li className="flex gap-3"><Phone size={18} className="text-gold" /><a href={`tel:${SITE.phone.replace(/\s/g,"")}`} className="hover:text-gold">{SITE.phone}</a></li>
          <li className="flex gap-3"><Mail size={18} className="text-gold" /><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
          <li className="flex gap-3"><Clock size={18} className="text-gold" />{SITE.hours}</li>
        </ul>
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 bg-[#25D366] text-obsidian font-semibold text-sm px-6 py-3"><MessageCircle size={16} /> WHATSAPP US</a>
      </div>
      <div>
        {st === "done" ? (
          <div className="border border-gold/50 bg-charcoal p-10 text-center"><CheckCircle2 size={44} className="text-gold mx-auto" /><h2 className="font-display text-3xl mt-4">Message sent.</h2><p className="text-silver mt-2">We reply within 24 hours, Mon–Sat.</p></div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <input required placeholder="Your name *" value={f.name} onChange={(e) => setF({...f, name: e.target.value})} className={input} />
            <input required type="email" placeholder="Email *" value={f.email} onChange={(e) => setF({...f, email: e.target.value})} className={input} />
            <textarea required placeholder="Your message *" rows={6} value={f.message} onChange={(e) => setF({...f, message: e.target.value})} className={input} />
            {err && <p className="text-red-400 text-sm">{err}</p>}
            <button disabled={st==="loading"} className="w-full bg-gold text-obsidian font-semibold tracking-widest text-sm py-4 hover:bg-warmwhite transition disabled:opacity-60 flex items-center justify-center gap-2">{st==="loading" ? <><Loader2 size={16} className="animate-spin" /> SENDING…</> : "SEND MESSAGE"}</button>
          </form>
        )}
      </div>
    </section>
  );
}
