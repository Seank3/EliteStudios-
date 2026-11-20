import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PROCESS } from "@/lib/content";
export default function Process() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24">
      <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">OUR CREATIVE PROCESS</p>
      <h1 className="font-display font-light text-5xl md:text-7xl">Vision to <span className="italic text-gold">experience.</span></h1>
      <div className="mt-16 space-y-0">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n}>
            <div className={`grid md:grid-cols-4 gap-6 py-10 border-t border-white/10 ${i % 2 ? "md:text-right" : ""}`}>
              <p className="font-display text-7xl text-stroke">{p.n}</p>
              <h2 className="font-mono tracking-[0.3em] text-gold text-lg md:col-span-1">{p.t}</h2>
              <p className="text-silver leading-relaxed md:col-span-2 max-w-lg">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Link href="/book" className="inline-block mt-10 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">START A PROJECT</Link>
    </section>
  );
}
