"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-obsidian/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl md:text-2xl tracking-wide">ELITE <span className="text-gold italic">STUDIOS</span></span>
          <span className="hidden md:inline text-[10px] tracking-[0.3em] text-silver/70 font-mono">KUNGU · KAMPALA</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-[13px] tracking-widest">
          {NAV.slice(0, 8).map((n) => (
            <Link key={n.href} href={n.href} className="text-silver hover:text-gold transition-colors">{n.label.toUpperCase()}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/book" className="hidden md:inline-flex items-center gap-1.5 bg-gold text-obsidian text-xs font-semibold tracking-widest px-5 py-2.5 hover:bg-warmwhite transition-colors">
            BOOK A SESSION <ArrowUpRight size={14} />
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-obsidian/95 backdrop-blur-md border-t border-white/10 px-5 py-6 flex flex-col gap-4 text-sm tracking-widest">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-silver hover:text-gold">{n.label.toUpperCase()}</Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center bg-gold text-obsidian font-semibold px-5 py-3">BOOK A SESSION</Link>
        </div>
      )}
    </header>
  );
}
