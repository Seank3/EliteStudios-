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

---

# Netlify Deployment (this repository)

Repository: https://github.com/Seank3/EliteStudios-
Config: `netlify.toml` (build `npm run build`, publish `.next`, Node 20, `@netlify/plugin-nextjs`)

## Option A — Netlify UI (fastest, no token needed)
1. Go to https://app.netlify.com/start
2. Choose **Import from GitHub** → authorise → pick `Seank3/EliteStudios-`
3. Build settings are read from `netlify.toml` automatically — just click **Deploy**
4. After the first deploy: **Site configuration → Environment variables** → add:
   - `ADMIN_PASSWORD` = a strong password (replaces the demo `elite2026`)
   - `NEXT_PUBLIC_SITE_URL` = your Netlify URL (or custom domain)
5. **Deploys → Trigger deploy → Clear cache and deploy site**

## Option B — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init          # link to Seank3/EliteStudios-
netlify env:set ADMIN_PASSWORD "your-strong-password"
netlify env:set NEXT_PUBLIC_SITE_URL "https://your-site.netlify.app"
netlify deploy --build --prod
```

## IMPORTANT: bookings need a database on Netlify
Netlify's serverless filesystem is **read-only and ephemeral**. The demo build stores
bookings in `data/store.json`; on Netlify it falls back to in-memory, so **bookings will
not survive between requests**.

Before using the site publicly you must connect Supabase (free tier is fine):
1. Create a project at https://supabase.com
2. Run `DATABASE_SCHEMA.sql` in the Supabase SQL editor
3. Add these Netlify environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Redeploy. `lib/store.ts` detects them automatically and switches to Supabase —
   no code changes required.
