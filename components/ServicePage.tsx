import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ServicePage({
  eyebrow, title, italic, intro, image, includes, ctaService,
}: {
  eyebrow: string; title: string; italic: string; intro: string; image: string; includes: string[]; ctaService: string;
}) {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-28 w-full">
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">{eyebrow}</p>
          <h1 className="font-display font-light text-5xl md:text-8xl leading-[0.98]">{title}<br /><span className="italic text-gold">{italic}</span></h1>
          <p className="max-w-xl text-silver text-lg mt-6 leading-relaxed">{intro}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">What&apos;s included</h2>
          <ul className="mt-6 space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex items-start gap-3 text-silver"><span className="mt-1 w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0"><Check size={12} /></span>{i}</li>
            ))}
          </ul>
          <p className="text-silver/70 text-sm mt-6">Pricing is confirmed per project. Request a quote for a tailored package — no hidden costs, ever.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href={`/book?service=${ctaService}`} className="inline-flex items-center gap-2 bg-gold text-obsidian font-semibold tracking-widest text-sm px-7 py-3.5 hover:bg-warmwhite transition">BOOK THIS SERVICE <ArrowRight size={16} /></Link>
            <Link href="/quote" className="inline-flex items-center gap-2 border border-white/25 tracking-widest text-sm px-7 py-3.5 hover:border-gold hover:text-gold transition">REQUEST A QUOTE</Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="border border-white/10 p-8 bg-charcoal">
            <h3 className="font-mono text-xs tracking-[0.3em] text-gold">HOW IT WORKS</h3>
            <ol className="mt-5 space-y-4 text-silver text-sm leading-relaxed">
              <li><strong className="text-warmwhite">1. Discover</strong> — tell us your vision via the booking form.</li>
              <li><strong className="text-warmwhite">2. Plan</strong> — we confirm creative direction, date and package.</li>
              <li><strong className="text-warmwhite">3. Create</strong> — the session / production day.</li>
              <li><strong className="text-warmwhite">4. Refine & deliver</strong> — review, polish and final delivery.</li>
            </ol>
            <p className="text-silver/60 text-xs mt-6">A request is not a confirmed appointment until our team approves it. You&apos;ll receive a booking reference immediately.</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
