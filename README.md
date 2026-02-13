# Physiotherapy Scheduler (Jane-style Clone)

Goal: SSR Next.js app that can run without external API keys, but is ready to plug in auth, payments, storage, and telehealth later.

Live preview (GH Pages, static export): https://mindfreakzerox.github.io/physiotherapy-scheduler/

## Stack
- Next.js 14 (App Router, SSR-first)
- TypeScript
- Minimal CSS (no Tailwind) to avoid config bloat; easy to swap in Tailwind later

## Run
```
npm install
npm run dev
```

## Structure
- `app/`
  - `layout.tsx` – shared shell
  - `page.tsx` – marketing/landing
  - `dashboard/` – mock practitioner dashboard (schedule, patients, tasks)
  - `api/` – placeholder route for appointments (mock data)
- `lib/mock-data.ts` – in-memory mock data for schedules, patients
- `components/` – UI bits (Nav, Cards, ScheduleTable, PatientList, Tasks)
- `styles/globals.css` – base styles

## Extending (no keys required today)
- Auth: add NextAuth/Clerk/etc.; protect `dashboard/*`
- DB: swap `lib/mock-data.ts` for a real ORM (Prisma + Postgres)
- Payments: add Stripe in `api/` routes
- Telehealth: embed Daily/Twilio in a visit page
- Storage: wire S3/Supabase for documents

## Pages
- `/` landing with feature highlights
- `/dashboard` (mock) showing schedule, patients, and tasks
- `/api/appointments` returns mock JSON

## Environment
- `.env.example` provided; nothing required to run in mock mode.

## Notes
- Everything runs locally without secrets.
- Mobile-friendly layout; cards stack on small screens.
