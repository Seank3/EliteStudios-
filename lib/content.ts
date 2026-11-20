/**
 * ELITE STUDIOS — verified content layer
 * --------------------------------------
 * VERIFIED (from the company's own TikTok profile @eliteprostudios, Nov 2026):
 *   • Name: Elite studios  • Handle: @eliteprostudios
 *   • Bio: "Photography Videography cinematography And production"
 *   • WhatsApp: +256 776 777 030 (also on Instagram bio)
 *   • Region: Uganda (UG)  • 5,900 followers, 144.3K likes, 222 videos
 *   • Media in /public/media are the studio's own published work.
 *
 * STILL NEEDS FOUNDER CONFIRMATION (marked [EDITABLE]):
 *   founder name/title, physical address, email, opening hours,
 *   Instagram URL slug (handle shown as @eliteprostudios — confirm exact link),
 *   pricing, team size, founding year.
 */

export const SITE = {
  name: "Elite Studios",
  legalName: "Elite Studios Kungu",
  handle: "@eliteprostudios",
  tagline: "CREATE. PRODUCE. ENTERTAIN.",
  support: "Where creativity, sound and visual storytelling come together.",
  taglineVerified: "Photography · Videography · Cinematography · Production",
  city: "Kampala",
  area: "Kungu",
  country: "Uganda",
  whatsapp: "256776777030", // VERIFIED
  phone: "+256 776 777 030", // VERIFIED (TikTok bio)
  email: "[EDITABLE] hello@elitestudios.ug",
  address: "Kungu, Kampala, Uganda",
  hours: "[EDITABLE] Mon – Sat · 9:00 – 19:00",
  socials: {
    tiktok: "https://www.tiktok.com/@eliteprostudios", // VERIFIED
    instagram: "https://www.instagram.com/eliteprostudios/", // handle VERIFIED; confirm link
    facebook: "[EDITABLE]",
    youtube: "[EDITABLE]",
  },
  stats: {
    followers: "5.9K",
    likes: "144.3K",
    videos: "222",
  },
};

export const DIVISIONS = [
  {
    slug: "photography",
    name: "Photography",
    status: "VERIFIED",
    line: "Portraits, fashion, graduation, lifestyle and event photography — lit with intention.",
    image: "/media/photos/hero_studio_cream.jpg",
  },
  {
    slug: "videography",
    name: "Videography",
    status: "VERIFIED",
    line: "Music videos, creative films and behind-the-scenes production.",
    image: "/media/photos/music_live_singer.jpg",
  },
  {
    slug: "audio",
    name: "Audio & Sound",
    status: "[EDITABLE]",
    line: "Recording, production, mixing and mastering — to be confirmed by the studio.",
    image: "/media/photos/portrait_soft.jpg",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    status: "[EDITABLE]",
    line: "Live sessions, artist collaborations and event entertainment.",
    image: "/media/photos/portrait_red_shirt.jpg",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video?: string;
  desc: string;
  credits: string;
  views?: string;
};

/** Real published work from @eliteprostudios — captions and view counts verified. */
export const PROJECTS: Project[] = [
  {
    slug: "coco-must-shine",
    title: "Coco Must Shine",
    category: "Entertainment",
    year: "2026",
    image: "/media/photos/film_bts_set.jpg",
    video: "/media/videos/web_bts_coco.mp4",
    desc: "Behind the scenes on set with Fey Tusha and Queen Minah — a full creative production day, from lighting build to final take.",
    credits: "Featuring @Fey Tusha, @Queen Minah",
    views: "367.3K",
  },
  {
    slug: "studio-portrait-series",
    title: "Studio Portrait Series",
    category: "Photography",
    year: "2026",
    image: "/media/photos/hero_studio_cream.jpg",
    desc: "Editorial portraiture on the Elite Studios set: cream draping, gold accents and a red-lit arch backdrop.",
    credits: "Elite Studios — photography & art direction",
    views: "473",
  },
  {
    slug: "zayra-baby-session",
    title: "Zayra Baby Session",
    category: "Photography",
    year: "2026",
    image: "/media/photos/portrait_black_dress.jpg",
    video: "/media/videos/web_bts_zayra.mp4",
    desc: "Behind the scenes on a portrait session — posing direction, lighting and the studio workflow in motion.",
    credits: "Elite Studios — photography",
    views: "204.9K",
  },
  {
    slug: "imba-sessions-aroma",
    title: "Imba Sessions — AROMA",
    category: "Entertainment",
    year: "2026",
    image: "/media/photos/music_live_singer.jpg",
    video: "/media/videos/web_aroma_elite.mp4",
    desc: "Live vocal session captured by Elite Studios for the Imba Sessions series — a singer mid-phrase under warm stage light.",
    credits: "Performance: AROMA · Film: Elite Studios",
    views: "810",
  },
  {
    slug: "graduation-shoot",
    title: "Graduation Shoot",
    category: "Photography",
    year: "2026",
    image: "/media/photos/portrait_denim.jpg",
    video: "/media/videos/web_grad_shoot.mp4",
    desc: "Graduation portrait session — clean styling, confident poses and a polished final frame.",
    credits: "Elite Studios — photography",
    views: "499",
  },
  {
    slug: "green-dress-duo",
    title: "Green Dress Duo",
    category: "Photography",
    year: "2026",
    image: "/media/photos/portrait_striped.jpg",
    desc: "An outdoor editorial duo shoot — colour, movement and natural light in the garden set.",
    credits: "Elite Studios — photography",
  },
  {
    slug: "on-set-stories",
    title: "On Set Stories",
    category: "Film",
    year: "2026",
    image: "/media/photos/portrait_red_shirt.jpg",
    video: "/media/videos/web_reply_sherry.mp4",
    desc: "The crew at work — lighting stands, camera rigs and the moments between takes.",
    credits: "Elite Studios production team",
    views: "263.7K",
  },
];

export const PROCESS = [
  { n: "01", t: "BRIEF", d: "Tell us the vision — the mood, the references, the deadline. We listen first." },
  { n: "02", t: "PLAN", d: "We shape the shoot or session: styling, lighting, locations and schedule." },
  { n: "03", t: "PRODUCE", d: "Production day — camera, lights, sound and direction, handled end to end." },
  { n: "04", t: "EDIT", d: "Colour grading, retouching and audio polish to the studio standard." },
  { n: "05", t: "DELIVER", d: "Final files delivered, ready to post, print or distribute." },
];

export const FOUNDER = {
  // NOT VERIFIED — never invent a founder's name. Admin must confirm.
  name: "[EDITABLE] Founder name",
  title: "Founder & Creative Director",
  image: "/media/photos/film_bts_set.jpg",
  bio: "Elite Studios is built on a simple belief: every client deserves work that looks like it belongs on a national stage. Our team photographs, films and produces in Kampala, Uganda — bringing lighting, direction and post-production together under one roof.",
  philosophy: "Create with intention. Produce with discipline. Entertain with soul.",
};

export const TALENT = {
  note: "Artist and collaborator profiles are only published with the studio's confirmed permission. Collaborations visible on our social channels include @Fey Tusha, @Queen Minah, @SHADAH_UG and @C.O.C.O.",
};

export const NAV = [
  { href: "/portfolio", label: "Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/photography", label: "Photography" },
  { href: "/videography", label: "Videography" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];
