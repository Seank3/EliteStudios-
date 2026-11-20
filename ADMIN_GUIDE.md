# Administrator Guide — Elite Studios Kungu

## Logging in
Go to `/admin` and enter the admin password (demo: `elite2026`; production: value of `ADMIN_PASSWORD`).

## Dashboard tabs
- **Overview** — totals: bookings, pending enquiries, confirmed bookings, portfolio projects + recent enquiries.
- **Bookings** — review every enquiry: confirm, decline or delete. Each booking has a unique reference (e.g. ES-XXXX).
- **Content** — divisions and portfolio currently live. Edit content in `lib/content.ts` (demo) or via Supabase CMS (production).

## Booking workflow
1. Client submits `/book` → saved instantly with a reference number.
2. You review it in **Bookings** → Confirm (client gets confirmed) or Decline.
3. Follow up on WhatsApp using the number provided.

## Updating business information
Edit `lib/content.ts` → `SITE` (phone, email, address, socials) and `FOUNDER` (name, bio, photo). Redeploy after changes.

## Important
- Never publish invented clients, prices, testimonials or credentials.
- Replace placeholder project photos with real Elite Studios work as soon as available.
- Back up `data/store.json` (demo) or your Supabase database regularly.
