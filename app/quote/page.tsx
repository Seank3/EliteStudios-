import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Quote() {
  return (
    <section className="max-w-4xl mx-auto px-5 md:px-8 pt-32 pb-24">
      <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">REQUEST A QUOTE</p>
      <h1 className="font-display font-light text-5xl md:text-6xl">Tailored <span className="italic text-gold">pricing.</span></h1>
      <p className="text-silver mt-6 leading-relaxed max-w-2xl">Every Elite Studios project is unique, so pricing is confirmed per project — fixed-price packages, custom quotations and optional add-ons. Tell us what you&apos;re creating and we&apos;ll respond with a clear, itemised quote. No hidden costs, ever.</p>
      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        {[{t:"Fixed-price packages",d:"Clear scope, clear price. Ideal for portraits, sessions and standard productions."},{t:"Custom quotations",d:"Bespoke productions — film, events and corporate projects priced to your brief."},{t:"Add-ons",d:"Extra hours, additional deliverables, rush turnaround — added only when you choose them."}].map((c) => (
          <div key={c.t} className="border border-white/10 p-6 bg-charcoal"><h2 className="font-display text-xl">{c.t}</h2><p className="text-silver text-sm mt-3 leading-relaxed">{c.d}</p></div>
        ))}
      </div>
      <Link href="/book" className="inline-flex items-center gap-2 mt-10 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">REQUEST A QUOTE <ArrowRight size={16} /></Link>
      <p className="text-silver/60 text-xs mt-4">Deposit requirements, where applicable, are confirmed in your quote before any payment.</p>
    </section>
  );
}
