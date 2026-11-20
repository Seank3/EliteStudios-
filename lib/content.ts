/**
 * ELITE STUDIOS — CMS CONTENT LAYER
 * ============================================================
 * All business facts below are EDITABLE placeholders.
 * Research (Nov 2026) found NO verified public listing for
 * "Elite Studios Kungu" — see RESEARCH_REPORT.md.
 * Replace every [EDITABLE] value with confirmed business data
 * via /admin (Content Manager) before public launch.
 * Never publish invented founder names, phones, prices or clients.
 */

export const SITE = {
  name: "ELITE STUDIOS",
  location: "Kungu, Kampala, Uganda",
  tagline: "CREATE. PRODUCE. ENTERTAIN.",
  support: "Where creativity, sound and visual storytelling come together.",
  heroCopy:
    "A creative entertainment company bringing photography, sound and visual storytelling together — from Kungu, Kampala to the world.",
  // [EDITABLE] — confirm before launch
  phone: "+256 700 000 000",
  whatsapp: "256700000000",
  email: "hello@elitestudios.ug",
  address: "Kungu, Kampala, Uganda",
  hours: "Mon–Sat · 9:00–18:00 EAT",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
  },
};

export type Division = {
  slug: string;
  name: string;
  short: string;
  desc: string;
  image: string;
  status: "active" | "coming";
};

export const DIVISIONS: Division[] = [
  {
    slug: "photography",
    name: "ELITE PHOTOGRAPHY",
    short: "Portraits · Fashion · Events · Commercial · Editorial",
    desc: "Professional photography as an artistic discipline — portraits, fashion, events, commercial and editorial imagery crafted with intention.",
    image:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1600&auto=format&fit=crop",
    status: "active",
  },
  {
    slug: "audio",
    name: "ELITE AUDIO",
    short: "Recording · Vocal Production · Mixing · Mastering",
    desc: "Audio recording, vocal production, music production, mixing and mastering — where sound becomes experience.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    status: "active",
  },
  {
    slug: "videography",
    name: "ELITE VISUALS",
    short: "Music Videos · Creative Film · Promo Production",
    desc: "Videography, music videos, creative films and promotional video production with a cinematic eye.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop",
    status: "active",
  },
  {
    slug: "entertainment",
    name: "ELITE ENTERTAINMENT",
    short: "DJs · Live Performers · Event Entertainment",
    desc: "Entertainment bookings, DJs, live performers, musicians and event entertainment — confirmed on booking.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop",
    status: "active",
  },
  {
    slug: "talent",
    name: "ELITE TALENT",
    short: "Artist Development · Representation · Collaboration",
    desc: "Artist development, talent representation, management and collaborations — built on trust and craft.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
    status: "active",
  },
  {
    slug: "events",
    name: "ELITE EVENTS",
    short: "Creative Production · Entertainment Experiences",
    desc: "Event creative production and entertainment experiences for corporate and private celebrations.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    status: "active",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  image: string;
  credits: string;
  featured?: boolean;
};

/** [EDITABLE] Showcase placeholders — replace with real Elite Studios projects via /admin */
export const PROJECTS: Project[] = [
  {
    slug: "golden-hour-portraits",
    title: "Golden Hour — Portrait Series",
    category: "Photography",
    year: "2025",
    desc: "A portrait series exploring light, identity and presence. Shot on location in Kampala.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    credits: "Photography · Elite Studios",
    featured: true,
  },
  {
    slug: "studio-sessions-vol1",
    title: "Studio Sessions Vol. 1",
    category: "Audio",
    year: "2025",
    desc: "Recording sessions capturing raw vocal performances and live instrumentation.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1600&auto=format&fit=crop",
    credits: "Audio · Elite Studios",
    featured: true,
  },
  {
    slug: "kampala-in-motion",
    title: "Kampala In Motion",
    category: "Film",
    year: "2025",
    desc: "A short film celebrating the rhythm and colour of the city.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop",
    credits: "Film · Elite Studios",
    featured: true,
  },
  {
    slug: "fashion-editorial",
    title: "Fashion Editorial",
    category: "Photography",
    year: "2024",
    desc: "Editorial fashion imagery — bold, minimal, unapologetically Ugandan.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    credits: "Photography · Elite Studios",
  },
  {
    slug: "live-at-elite",
    title: "Live At Elite",
    category: "Entertainment",
    year: "2024",
    desc: "Live performance evenings — DJs, bands and emerging voices.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    credits: "Entertainment · Elite Studios",
  },
  {
    slug: "brand-stories",
    title: "Brand Stories",
    category: "Commercial",
    year: "2024",
    desc: "Commercial photography and film for brands that want to be remembered.",
    image:
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1600&auto=format&fit=crop",
    credits: "Commercial · Elite Studios",
  },
];

export const PROCESS = [
  { n: "01", t: "DISCOVER", d: "We listen first. Your vision, your story, your goals — understood before a single frame is shot or note recorded." },
  { n: "02", t: "PLAN", d: "Creative direction and a production plan: mood, references, schedule and budget — agreed together, in writing." },
  { n: "03", t: "CREATE", d: "Execution with craft — photography, recording or entertainment, directed with precision and care." },
  { n: "04", t: "REFINE", d: "Review, select and polish. We refine until the work feels inevitable." },
  { n: "05", t: "DELIVER", d: "Final professional delivery — files, formats and support, ready for the world." },
];

export const FOUNDER = {
  // [EDITABLE] — founder name/bio MUST be confirmed by the administrator. Do not publish placeholders.
  name: "Founder & CEO",
  title: "Founder and CEO, Elite Studios",
  bio: "Elite Studios is the founder's major creative venture — a home for photography, sound and visual storytelling in Kungu, Kampala. The vision is simple: world-class creative production, made in Uganda, for Uganda and the world.",
  philosophy: "Creativity with discipline. Excellence without compromise. Every project is a promise — to create something worth remembering.",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
};

export const SERVICES_PRICING_NOTE =
  "Pricing is confirmed per project. Request a quote for a tailored package — no hidden costs, ever.";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Photography", href: "/photography" },
  { label: "Audio", href: "/audio" },
  { label: "Film", href: "/videography" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Talent", href: "/talent" },
  { label: "Events", href: "/events" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Founder", href: "/founder" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];
