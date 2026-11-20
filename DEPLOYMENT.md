# Deployment Guide — Elite Studios Kungu

## Stack
Next.js 14 (App Router) + React + TypeScript + Tailwind CSS + Framer Motion + Lucide.
Demo data layer: `data/store.json`. Production: Supabase (PostgreSQL) via `DATABASE_SCHEMA.sql`.

## Local development
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build
npm start
```

## Vercel (recommended)
1. Push this folder to GitHub.
2. Import into Vercel (framework: Next.js).
3. Set env vars from `.env.example` (at minimum `ADMIN_PASSWORD`, `NEXT_PUBLIC_SITE_URL`).
4. Deploy. Connect your domain (e.g. elitestudios.ug).

## Supabase production cutover
1. Create a Supabase project.
2. Run `DATABASE_SCHEMA.sql` in the SQL editor.
3. Add Supabase keys to `.env.local`.
4. Replace the JSON file logic in `app/api/bookings/route.ts` and `app/api/contact/route.ts` with Supabase queries (RLS policies included in schema).
5. Move images/audio to Supabase Storage; update `lib/content.ts` URLs.

## SEO checklist before launch
- Set `NEXT_PUBLIC_SITE_URL` to the live domain.
- Replace all `[EDITABLE]` content in `lib/content.ts` with verified data.
- Claim Google Business Profile: "Elite Studios Kungu, Kungu, Kampala".
- Submit `https://yourdomain/sitemap.xml` in Google Search Console.
- Add real Open Graph image in `app/layout.tsx`.

## Security checklist
- Change `ADMIN_PASSWORD` (demo: `elite2026`).
- Never commit `.env.local`.
- Enable Supabase RLS; keep service-role keys server-side only.
