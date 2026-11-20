"use client";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Clip = {
  src: string;
  poster: string;
  title: string;
  caption: string;
  views?: string;
};

export default function VideoReel({ clips, heading, sub }: { clips: Clip[]; heading: string; sub: string }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clip = clips[active];

  function play(i: number) {
    setActive(i);
    setPlaying(true);
    setMuted(true); // never autoplay with sound
    setTimeout(() => {
      videoRef.current?.play().catch(() => setPlaying(false));
    }, 50);
  }

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div>
      <div className="relative aspect-[9/13] md:aspect-video overflow-hidden bg-coal group">
        <video
          ref={videoRef}
          key={clip.src}
          src={clip.src}
          poster={clip.poster}
          playsInline
          muted={muted}
          preload="metadata"
          onEnded={() => setPlaying(false)}
          className="w-full h-full object-cover"
        />

        {!playing && (
          <button
            onClick={() => play(active)}
            aria-label={`Play ${clip.title}`}
            className="absolute inset-0 flex items-center justify-center bg-obsidian/25 hover:bg-obsidian/10 transition"
          >
            <span className="w-20 h-20 rounded-full bg-gold text-obsidian flex items-center justify-center hover:scale-110 transition">
              <Play size={30} className="ml-1" />
            </span>
          </button>
        )}

        {playing && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button onClick={toggle} className="w-11 h-11 rounded-full bg-obsidian/70 border border-white/25 flex items-center justify-center hover:bg-gold hover:text-obsidian transition" aria-label="Play or pause">
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={() => {
                const next = !muted;
                setMuted(next);
                if (videoRef.current) videoRef.current.muted = next;
              }}
              className="w-11 h-11 rounded-full bg-obsidian/70 border border-white/25 flex items-center justify-center hover:bg-gold hover:text-obsidian transition"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        )}

        <div className="absolute top-4 left-4 bg-obsidian/75 px-3 py-1.5">
          <p className="font-mono text-[10px] tracking-[0.25em] text-gold">{clip.views ? `${clip.views} VIEWS · TIKTOK` : "ELITE STUDIOS"}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-mono text-xs tracking-[0.35em] text-gold">{heading}</p>
        <h3 className="font-display text-2xl md:text-4xl mt-2">{clip.title}</h3>
        <p className="text-silver text-sm mt-2 leading-relaxed max-w-2xl">{clip.caption}</p>
        <p className="text-silver/50 text-xs mt-2 max-w-2xl">{sub}</p>
      </div>

      <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
        {clips.map((c, i) => (
          <button
            key={c.src}
            onClick={() => play(i)}
            className={`relative shrink-0 w-20 h-28 md:w-24 md:h-32 overflow-hidden border-2 transition ${
              i === active ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Play ${c.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.poster} alt={c.title} className="w-full h-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-obsidian/30">
              <Play size={16} className="text-warmwhite" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
