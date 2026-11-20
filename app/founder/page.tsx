import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FOUNDER } from "@/lib/content";
export default function Founder() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24 grid md:grid-cols-5 gap-12">
      <Reveal className="md:col-span-2 relative aspect-[3/4] overflow-hidden"><Image src={FOUNDER.image} alt="Founder and CEO, Elite Studios" fill className="object-cover" /></Reveal>
      <Reveal className="md:col-span-3">
        <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">FOUNDER & LEADERSHIP</p>
        <h1 className="font-display font-light text-5xl md:text-6xl leading-tight">The vision<br /><span className="italic text-gold">behind Elite.</span></h1>
        <p className="text-silver leading-relaxed mt-7 max-w-xl">{FOUNDER.bio}</p>
        <blockquote className="border-l-2 border-gold pl-5 mt-8 font-display italic text-2xl max-w-xl">“{FOUNDER.philosophy}”</blockquote>
        <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-xl">
          <div className="border border-white/10 p-6"><h3 className="font-mono text-xs tracking-widest text-gold">VISION</h3><p className="text-silver text-sm mt-3 leading-relaxed">World-class creative production, made in Uganda — for Uganda and the world.</p></div>
          <div className="border border-white/10 p-6"><h3 className="font-mono text-xs tracking-widest text-gold">LEADERSHIP</h3><p className="text-silver text-sm mt-3 leading-relaxed">Hands-on creative direction on every project, from first brief to final delivery.</p></div>
        </div>
        <p className="mt-8 font-mono text-xs tracking-[0.25em] text-silver">{FOUNDER.title.toUpperCase()}</p>
        <Link href="/book" className="inline-block mt-8 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">WORK WITH US</Link>
      </Reveal>
    </section>
  );
}
