import Link from "next/link";
import { Instagram, Facebook, Youtube, Music2, MapPin, Phone, Mail } from "lucide-react";
import { SITE, NAV, DIVISIONS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl">ELITE <span className="text-gold italic">STUDIOS</span></p>
          <p className="text-silver/80 text-sm mt-3 leading-relaxed">{SITE.support}</p>
          <p className="text-gold text-xs tracking-[0.25em] mt-4 font-mono">{SITE.tagline}</p>
          <div className="flex gap-3 mt-6">
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition"><Instagram size={18} /></a>
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition"><Facebook size={18} /></a>
            <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition"><Music2 size={18} /></a>
            <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition"><Youtube size={18} /></a>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-gold font-mono mb-4">EXPLORE</p>
          <ul className="space-y-2 text-sm text-silver">
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-gold transition">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-gold font-mono mb-4">CREATIVE DIVISIONS</p>
          <ul className="space-y-2 text-sm text-silver">
            {DIVISIONS.map((d) => <li key={d.slug}><Link href={`/${d.slug}`} className="hover:text-gold transition">{d.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-gold font-mono mb-4">VISIT US</p>
          <ul className="space-y-3 text-sm text-silver">
            <li className="flex gap-2"><MapPin size={16} className="text-gold shrink-0" />{SITE.address}</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold shrink-0" /><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-gold shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
            <li className="text-silver/70">{SITE.hours}</li>
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <Link href="/book" className="text-center bg-gold text-obsidian text-xs font-semibold tracking-widest py-3 hover:bg-warmwhite transition">BOOK A SESSION</Link>
            <Link href="/quote" className="text-center border border-white/20 text-xs tracking-widest py-3 hover:border-gold hover:text-gold transition">REQUEST A QUOTE</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-silver/60">
          <p>© {new Date().getFullYear()} Elite Studios Kungu. All rights reserved.</p>
          <p className="flex gap-5"><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link><Link href="/terms" className="hover:text-gold">Terms & Conditions</Link><Link href="/admin" className="hover:text-gold">Admin</Link></p>
        </div>
      </div>
    </footer>
  );
}
