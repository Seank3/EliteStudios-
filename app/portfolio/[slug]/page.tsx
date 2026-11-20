import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/content";
import { ArrowLeft, ArrowRight } from "lucide-react";
export function generateStaticParams() { return PROJECTS.map((p) => ({ slug: p.slug })); }
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <article className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-silver text-sm hover:text-gold"><ArrowLeft size={15} /> ALL WORK</Link>
      <p className="font-mono text-xs tracking-[0.35em] text-gold mt-8">{p.category.toUpperCase()} · {p.year}</p>
      <h1 className="font-display font-light text-5xl md:text-7xl mt-4">{p.title}</h1>
      <div className="relative aspect-[16/9] mt-10 overflow-hidden"><Image src={p.image} alt={p.title} fill className="object-cover" priority /></div>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        <div className="md:col-span-2"><h2 className="font-display text-2xl">About this project</h2><p className="text-silver leading-relaxed mt-4">{p.desc}</p><p className="text-silver leading-relaxed mt-4">Every Elite Studios project follows the same standard: discover, plan, create, refine, deliver — with craft at every step.</p></div>
        <div className="border border-white/10 p-6 h-fit"><p className="font-mono text-xs tracking-widest text-gold">CREDITS</p><p className="text-silver text-sm mt-3">{p.credits}</p><p className="font-mono text-xs tracking-widest text-gold mt-6">YEAR</p><p className="text-silver text-sm mt-2">{p.year}</p><Link href="/book" className="block text-center mt-8 bg-gold text-obsidian font-semibold text-xs tracking-widest py-3 hover:bg-warmwhite transition">START YOUR PROJECT</Link></div>
      </div>
      <Link href={`/portfolio/${next.slug}`} className="group flex items-center justify-between border-t border-white/10 mt-16 pt-8"><span><span className="font-mono text-xs tracking-widest text-gold">NEXT PROJECT</span><span className="block font-display text-3xl mt-2 group-hover:text-gold transition">{next.title}</span></span><ArrowRight size={28} className="text-gold" /></Link>
    </article>
  );
}
