import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown, Camera, AudioLines, Clapperboard, PartyPopper, Star, CalendarDays, Play, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DIVISIONS, PROJECTS, PROCESS, FOUNDER, SITE } from "@/lib/content";

const HERO_IMG = "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2400&auto=format&fit=crop";
const STUDIO_IMG = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop";
const PHOTO_IMG = "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1600&auto=format&fit=crop";

export default function Home() {
  return (
    <>
      {/* 01 CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
        <Image src={HERO_IMG} alt="Elite Studios — cinematic creative production" fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/20" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-32 w-full">
          <p className="font-mono text-xs tracking-[0.4em] text-gold mb-6">KUNGU · KAMPALA · UGANDA</p>
          <h1 className="font-display font-light leading-[0.95] text-[16vw] md:text-[9rem]">
            ELITE<br /><span className="italic text-gold">STUDIOS</span>
          </h1>
          <p className="font-mono tracking-[0.35em] text-sm md:text-lg mt-6 text-warmwhite">{SITE.tagline}</p>
          <p className="max-w-xl text-silver text-base md:text-lg mt-5 leading-relaxed">{SITE.heroCopy}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="#world" className="inline-flex items-center gap-2 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">EXPLORE OUR WORLD <ArrowRight size={16} /></Link>
            <Link href="/book" className="inline-flex items-center gap-2 border border-white/30 tracking-widest text-sm px-8 py-4 hover:border-gold hover:text-gold transition">START A PROJECT</Link>
          </div>
          <div className="mt-16 flex items-center gap-3 text-silver/70 text-xs tracking-[0.3em] font-mono">
            <ArrowDown size={14} className="animate-bounce" /> SCROLL TO EXPLORE
          </div>
        </div>
      </section>

      {/* 02 BRAND INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">01 — WHO WE ARE</p>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-tight">Where creativity,<br /><span className="italic text-gold">sound</span> and visual<br />storytelling meet.</h2>
          <p className="text-silver leading-relaxed mt-6 max-w-lg">
            Elite Studios is a creative entertainment company built on one belief: great ideas deserve professional experiences.
            From a single portrait to a full production, we bring photography, sound and film together under one roof in Kungu, Kampala.
          </p>
          <p className="text-silver leading-relaxed mt-4 max-w-lg">Your vision. Our creative excellence.</p>
          <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-gold tracking-widest text-sm border-b border-gold pb-1 hover:gap-3 transition-all">OUR STORY <ChevronRight size={16} /></Link>
        </Reveal>
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden group">
            <Image src={PHOTO_IMG} alt="Elite Studios photography" fill className="object-cover img-zoom" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gold text-obsidian px-6 py-4 font-mono text-xs tracking-widest">CREATE · PRODUCE · ENTERTAIN</div>
        </Reveal>
      </section>

      {/* 03 OUR CREATIVE WORLD */}
      <section id="world" className="bg-charcoal border-y border-white/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">02 — OUR CREATIVE WORLD</p>
              <h2 className="font-display font-light text-4xl md:text-6xl">Six divisions.<br /><span className="italic text-gold">One standard: elite.</span></h2>
            </div>
            <Link href="/portfolio" className="text-gold tracking-widest text-sm border-b border-gold pb-1">VIEW ALL WORK</Link>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map((d, i) => (
              <Reveal key={d.slug}>
                <Link href={`/${d.slug}`} className="group block relative aspect-[4/5] overflow-hidden bg-coal">
                  <Image src={d.image} alt={d.name} fill className="object-cover opacity-70 img-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-gold">0{i + 1}</p>
                    <h3 className="font-display text-2xl mt-2">{d.name}</h3>
                    <p className="text-silver text-xs tracking-widest mt-1">{d.short}</p>
                    <p className="text-silver/80 text-sm mt-3 leading-relaxed line-clamp-2">{d.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-xs tracking-widest mt-4 group-hover:gap-2 transition-all">EXPLORE <ArrowRight size={13} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 SELECTED WORK */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <Reveal className="mb-14">
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">03 — SELECTED WORK</p>
          <h2 className="font-display font-light text-4xl md:text-6xl">Work that <span className="italic text-gold">speaks.</span></h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <Link href={`/portfolio/${p.slug}`} className="group block relative overflow-hidden aspect-[16/9]">
                <Image src={p.image} alt={p.title} fill className="object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 md:p-8 flex items-end justify-between w-full">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-gold">{p.category.toUpperCase()} · {p.year}</p>
                    <h3 className="font-display text-2xl md:text-4xl mt-2">{p.title}</h3>
                  </div>
                  <span className="hidden md:flex w-12 h-12 rounded-full border border-white/30 items-center justify-center group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition"><ArrowRight size={18} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <Link href="/portfolio" className="inline-flex items-center gap-2 border border-white/25 tracking-widest text-sm px-8 py-4 hover:border-gold hover:text-gold transition">FULL PORTFOLIO <ArrowRight size={16} /></Link>
        </Reveal>
      </section>

      {/* 05 PHOTOGRAPHY EXPERIENCE */}
      <section className="bg-charcoal border-y border-white/10 py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="grid grid-cols-2 gap-4">
            {["photo-1544005313-94ddf0286df2", "photo-1509631179647-0177331693ae", "photo-1516035069371-29a1b244cc32", "photo-1493863641943-9b68992a8d07"].map((id) => (
              <div key={id} className="relative aspect-square overflow-hidden group">
                <Image src={`https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`} alt="Elite Photography" fill className="object-cover img-zoom" />
              </div>
            ))}
          </Reveal>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">04 — ELITE PHOTOGRAPHY</p>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">Photography as<br /><span className="italic text-gold">art, not just service.</span></h2>
            <p className="text-silver leading-relaxed mt-6">Portraits, fashion, commercial, events, lifestyle, editorial and corporate — each frame composed with intention, each story told with light.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Portraits", "Fashion", "Commercial", "Events", "Lifestyle", "Editorial", "Corporate"].map((c) => (
                <span key={c} className="text-xs tracking-widest border border-white/20 px-3 py-1.5 text-silver">{c.toUpperCase()}</span>
              ))}
            </div>
            <Link href="/photography" className="inline-flex items-center gap-2 mt-8 bg-gold text-obsidian font-semibold tracking-widest text-sm px-7 py-3.5 hover:bg-warmwhite transition"><Camera size={16} /> EXPLORE PHOTOGRAPHY</Link>
          </Reveal>
        </div>
      </section>

      {/* 06 AUDIO AND RECORDING STUDIO */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">05 — ELITE AUDIO</p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">Where sound<br /><span className="italic text-gold">becomes experience.</span></h2>
          <p className="text-silver leading-relaxed mt-6">Music recording, vocal recording, audio production, mixing, mastering, sound engineering and voice-over — a cinematic studio experience from first take to final master.</p>
          <ul className="mt-6 space-y-2 text-silver text-sm">
            {["Music & vocal recording", "Audio production", "Mixing & mastering", "Sound engineering", "Voice-over recording"].map((s) => (
              <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />{s}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/audio" className="inline-flex items-center gap-2 bg-gold text-obsidian font-semibold tracking-widest text-sm px-7 py-3.5 hover:bg-warmwhite transition"><AudioLines size={16} /> ENTER THE STUDIO</Link>
            <Link href="/book?service=audio" className="inline-flex items-center gap-2 border border-white/25 tracking-widest text-sm px-7 py-3.5 hover:border-gold hover:text-gold transition">BOOK A SESSION</Link>
          </div>
        </Reveal>
        <Reveal className="relative aspect-[4/3] overflow-hidden group">
          <Image src={STUDIO_IMG} alt="Elite Audio recording studio" fill className="object-cover img-zoom" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/audio" aria-label="Play studio preview" className="w-20 h-20 rounded-full bg-gold/90 text-obsidian flex items-center justify-center hover:scale-110 transition"><Play size={28} className="ml-1" /></Link>
          </div>
        </Reveal>
      </section>

      {/* 07 ENTERTAINMENT AND TALENT */}
      <section className="bg-charcoal border-y border-white/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">06 — ENTERTAINMENT & TALENT</p>
            <h2 className="font-display font-light text-4xl md:text-6xl">The stage is <span className="italic text-gold">set.</span></h2>
            <p className="text-silver mt-5 leading-relaxed">DJs, live bands, instrumentalists, performers, artists and hosts — discover talent and book entertainment that moves people. Profiles are added by our team as artists join the roster.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: PartyPopper, t: "Entertainment Booking", d: "Corporate and private events, weddings and celebrations — curated entertainment for every occasion.", href: "/entertainment" },
              { icon: Star, t: "Talent & Artists", d: "Artist development, representation and collaborations. Discover the voices of tomorrow.", href: "/talent" },
              { icon: CalendarDays, t: "Events", d: "Full creative production for events — entertainment experiences designed end-to-end.", href: "/events" },
            ].map((c) => (
              <Reveal key={c.t}>
                <Link href={c.href} className="group block border border-white/10 p-8 hover:border-gold/60 transition bg-obsidian/40">
                  <c.icon size={28} className="text-gold" />
                  <h3 className="font-display text-2xl mt-5">{c.t}</h3>
                  <p className="text-silver text-sm leading-relaxed mt-3">{c.d}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-xs tracking-widest mt-5 group-hover:gap-2 transition-all">DISCOVER <ArrowRight size={13} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 CREATIVE PROCESS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <Reveal className="mb-14">
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">07 — OUR CREATIVE PROCESS</p>
          <h2 className="font-display font-light text-4xl md:text-6xl">From vision<br /><span className="italic text-gold">to experience.</span></h2>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-5">
          {PROCESS.map((p) => (
            <Reveal key={p.n}>
              <div className="border-t-2 border-gold/40 pt-6 h-full">
                <p className="font-display text-5xl text-stroke">{p.n}</p>
                <h3 className="font-mono tracking-[0.25em] text-sm mt-4 text-gold">{p.t}</h3>
                <p className="text-silver text-sm leading-relaxed mt-3">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/process" className="inline-flex items-center gap-2 text-gold tracking-widest text-sm border-b border-gold pb-1">FULL PROCESS <ChevronRight size={16} /></Link>
        </Reveal>
      </section>

      {/* 09 FOUNDER AND CEO */}
      <section className="bg-charcoal border-y border-white/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-5 gap-12 items-center">
          <Reveal className="md:col-span-2 relative aspect-[3/4] overflow-hidden">
            <Image src={FOUNDER.image} alt="Founder and CEO of Elite Studios" fill className="object-cover" />
          </Reveal>
          <Reveal className="md:col-span-3">
            <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">08 — THE FOUNDER & CEO</p>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">Driven by vision.<br /><span className="italic text-gold">Built on craft.</span></h2>
            <p className="text-silver leading-relaxed mt-6 max-w-xl">{FOUNDER.bio}</p>
            <blockquote className="border-l-2 border-gold pl-5 mt-8 font-display italic text-xl md:text-2xl text-warmwhite max-w-xl">“{FOUNDER.philosophy}”</blockquote>
            <p className="mt-8 font-mono text-xs tracking-[0.25em] text-silver">{FOUNDER.title.toUpperCase()}</p>
            <Link href="/founder" className="inline-flex items-center gap-2 mt-6 text-gold tracking-widest text-sm border-b border-gold pb-1">MEET THE FOUNDER <ChevronRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* 10 CLIENTS AND COLLABORATIONS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-28 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.35em] text-gold mb-4">09 — CLIENTS & COLLABORATIONS</p>
          <h2 className="font-display font-light text-4xl md:text-5xl">Trusted by creatives.<br /><span className="italic text-gold">Chosen by clients.</span></h2>
          <p className="text-silver mt-5 max-w-xl mx-auto leading-relaxed">Artists, brands, organisations and event organisers across Kampala and beyond. Client logos and testimonials appear here once confirmed — we never publish invented endorsements.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Artists", "Brands", "Organisations", "Event Organisers", "Private Clients"].map((c) => (
              <span key={c} className="border border-white/15 px-5 py-2.5 text-xs tracking-widest text-silver">{c.toUpperCase()}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 11 FILM STRIP */}
      <section className="relative py-28 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2400&auto=format&fit=crop" alt="Elite Visuals film production" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <Clapperboard size={32} className="text-gold mx-auto" />
            <h2 className="font-display font-light text-4xl md:text-6xl mt-6">ELITE <span className="italic text-gold">VISUALS</span></h2>
            <p className="text-silver mt-4 max-w-lg mx-auto">Music videos, creative films and promotional production — stories told in motion.</p>
            <Link href="/videography" className="inline-flex items-center gap-2 mt-8 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">WATCH & EXPLORE <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* 12 FINAL CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-28 md:py-40 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-gold mb-6">ELITE STUDIOS · KUNGU</p>
          <h2 className="font-display font-light text-5xl md:text-8xl leading-[1.02]">HAVE SOMETHING<br /><span className="italic text-gold">WORTH CREATING?</span></h2>
          <p className="text-silver text-lg mt-6">Let&apos;s bring your next creative vision to life.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/book" className="inline-flex items-center gap-2 bg-gold text-obsidian font-semibold tracking-widest text-sm px-9 py-4 hover:bg-warmwhite transition">START A PROJECT <ArrowRight size={16} /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 tracking-widest text-sm px-9 py-4 hover:border-gold hover:text-gold transition">CONTACT ELITE STUDIOS</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
