"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/content";
const CATS = ["All", "Photography", "Audio", "Film", "Entertainment", "Commercial"];
export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24">
      <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">PORTFOLIO</p>
      <h1 className="font-display font-light text-5xl md:text-7xl">Selected <span className="italic text-gold">work.</span></h1>
      <div className="flex flex-wrap gap-2 mt-10">
        {CATS.map((c) => (<button key={c} onClick={() => setCat(c)} className={`text-xs tracking-widest px-4 py-2 border transition ${cat === c ? "bg-gold text-obsidian border-gold font-semibold" : "border-white/20 text-silver hover:border-gold hover:text-gold"}`}>{c.toUpperCase()}</button>))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {list.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block relative overflow-hidden aspect-[16/10] bg-coal">
            <Image src={p.image} alt={p.title} fill className="object-cover img-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6"><p className="font-mono text-[10px] tracking-[0.3em] text-gold">{p.category.toUpperCase()} · {p.year}</p><h2 className="font-display text-2xl md:text-3xl mt-2">{p.title}</h2></div>
          </Link>
        ))}
      </div>
      {list.length === 0 && <p className="text-silver mt-10">No projects in this category yet — check back soon.</p>}
    </section>
  );
}
