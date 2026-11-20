import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PROCESS } from "@/lib/content";
export default function About() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image src="/media/photos/hero_studio_cream.jpg" alt="About Elite Studios" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-28 w-full">
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">ABOUT ELITE STUDIOS</p>
          <h1 className="font-display font-light text-5xl md:text-8xl">Our <span className="italic text-gold">story.</span></h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">A creative home in Kungu, Kampala.</h2>
          <p className="text-silver leading-relaxed mt-6">Elite Studios is a creative entertainment company bringing photography, sound and visual storytelling together. We exist for artists, brands, organisations and private clients who want their ideas turned into professional experiences.</p>
          <p className="text-silver leading-relaxed mt-4">Our philosophy is simple: creativity with discipline, excellence without compromise. Every project — a portrait, a recording session, a film, a live event — is treated as a promise to create something worth remembering.</p>
          <p className="text-silver/70 text-sm mt-6 border border-white/10 p-4">Business details, history and credentials are confirmed by our team and updated here as verified. Nothing is invented.</p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            {["/media/photos/portrait_striped.jpg","/media/photos/portrait_white_shirt.jpg","/media/photos/portrait_black_dress.jpg","/media/photos/music_live_singer.jpg"].map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden"><Image src={src} alt="Elite Studios creative work" fill className="object-cover" /></div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="bg-charcoal border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-10">How we work</h2>
          <div className="grid md:grid-cols-5 gap-6">{PROCESS.map((p) => (<div key={p.n} className="border-t-2 border-gold/40 pt-5"><p className="font-display text-4xl text-stroke">{p.n}</p><h3 className="font-mono tracking-widest text-sm text-gold mt-3">{p.t}</h3><p className="text-silver text-sm mt-2 leading-relaxed">{p.d}</p></div>))}</div>
          <Link href="/book" className="inline-block mt-12 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">START A PROJECT</Link>
        </div>
      </section>
    </>
  );
}
