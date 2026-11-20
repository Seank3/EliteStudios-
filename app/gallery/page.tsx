"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const PHOTOS = [
  { src: "/media/photos/hero_studio_cream.jpg", alt: "Editorial studio portrait — cream draping on a black set with red lighting", cat: "Studio" },
  { src: "/media/photos/hero_red_dress.jpg", alt: "Red dress portrait against a pink studio backdrop", cat: "Studio" },
  { src: "/media/photos/portrait_striped.jpg", alt: "Portrait in striped two-piece on a white cube", cat: "Studio" },
  { src: "/media/photos/portrait_white_shirt.jpg", alt: "Portrait in white and black layered shirt", cat: "Portrait" },
  { src: "/media/photos/portrait_black_dress.jpg", alt: "Portrait in a black draped gown with gold detail", cat: "Fashion" },
  { src: "/media/photos/portrait_lilac.jpg", alt: "Lilac dress editorial portrait with red sofa", cat: "Fashion" },
  { src: "/media/photos/portrait_denim.jpg", alt: "Portrait in denim with a lilac backdrop", cat: "Portrait" },
  { src: "/media/photos/music_live_singer.jpg", alt: "Live vocal session — singer with microphone under warm light", cat: "Live" },
  { src: "/media/photos/portrait_plum.jpg", alt: "Plum dress portrait in an orange archway", cat: "Fashion" },
  { src: "/media/photos/portrait_soft.jpg", alt: "Soft-light seated portrait", cat: "Portrait" },
  { src: "/media/photos/portrait_soft_stool.jpg", alt: "Seated portrait on a studio stool", cat: "Studio" },
  { src: "/media/photos/portrait_seated.jpg", alt: "Seated editorial portrait", cat: "Portrait" },
  { src: "/media/photos/portrait_smile.jpg", alt: "Natural-light smiling portrait", cat: "Portrait" },
  { src: "/media/photos/portrait_red_shirt.jpg", alt: "Portrait in a red football shirt", cat: "Portrait" },
  { src: "/media/photos/kid_princess.jpg", alt: "Child portrait — white feathered dress with sparkler backdrop", cat: "Portrait" },
  { src: "/media/photos/portrait_maroon.jpg", alt: "Maroon dress portrait", cat: "Fashion" },
  { src: "/media/photos/film_bts_set.jpg", alt: "Elite Studios crew on set with lighting and camera rig", cat: "Behind the scenes" },
  { src: "/media/photos/studio_bts_light.jpg", alt: "Behind the scenes — softbox and lighting stand on set", cat: "Behind the scenes" },
];

const CATS = ["All", "Studio", "Portrait", "Fashion", "Live", "Behind the scenes"];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24">
      <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">PHOTO GALLERY</p>
      <h1 className="font-display font-light text-5xl md:text-7xl">
        Our <span className="italic text-gold">lens.</span>
      </h1>
      <p className="text-silver mt-5 max-w-2xl leading-relaxed">
        Every image here was shot and edited by Elite Studios — published on our own channels.
        No stock photography, no placeholders.
      </p>

      <div className="flex flex-wrap gap-2 mt-10">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`text-xs tracking-widest px-4 py-2 border transition ${
              cat === c ? "bg-gold text-obsidian border-gold font-semibold" : "border-white/20 text-silver hover:border-gold hover:text-gold"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-10 [column-fill:_balance]">
        {list.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOpen(PHOTOS.indexOf(p))}
            className="mb-4 block w-full relative overflow-hidden group break-inside-avoid"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={900}
              height={1400}
              className="w-full h-auto object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/25 transition" />
          </button>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/book" className="inline-flex items-center gap-2 bg-gold text-obsidian font-semibold tracking-widest text-sm px-8 py-4 hover:bg-warmwhite transition">
          BOOK YOUR SHOOT <ArrowRight size={16} />
        </Link>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute top-6 right-6 text-warmwhite hover:text-gold" aria-label="Close" onClick={() => setOpen(null)}>
            <X size={32} />
          </button>
          <div className="max-h-full max-w-4xl">
            <Image
              src={PHOTOS[open].src}
              alt={PHOTOS[open].alt}
              width={1200}
              height={1800}
              className="max-h-[85vh] w-auto object-contain"
            />
            <p className="text-silver text-sm text-center mt-3">{PHOTOS[open].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
