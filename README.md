# Physiotherapy-Scheduler Project Brief (Updated)

## 1. Project Overview
Physiotherapy-Scheduler (PhysioFlow) is a web-based practice management and appointment booking platform for physiotherapy clinics. It centralizes appointments, therapists, patients, billing, and reporting with a physio-first focus. MVP first, then expansion.

## 2. Target Users
- **Primary:** Clinic owners, Clinic administrators, Physiotherapists
- **Secondary:** Patients (online booking)

## 3. Core Objectives
- Simplify appointment scheduling
- Reduce no-shows with reminders
- Centralize patient records
- Enable online payments
- Provide clinic performance insights
- Support multiple clinics (multi-tenant SaaS)

## 4. Core Features (MVP Scope)
### A. Public Website
- Landing page
- Features page
- Pricing page
- Contact form
- Clinic login / signup

### B. User Roles & Permissions
- **Super Admin (platform owner):** manage all clinics, view subscription data, manage plans
- **Clinic Admin:** manage therapists, view reports, manage clinic settings
- **Therapist:** view schedule, add session notes, manage availability
- **Patient:** book appointments, view appointment history, receive reminders

### C. Appointment & Scheduling System
- Calendar views (daily/weekly/monthly)
- Therapist availability management
- Online patient self-booking
- Appointment confirmation email
- Rescheduling & cancellation
- Automated reminders (email; SMS optional later)
- Buffer time between sessions

### D. Patient Management (Basic EMR)
- Patient profiles
- Contact details
- Appointment history
- Treatment notes
- File uploads (Phase 2)

### E. Payments & Billing
- Online payments via Stripe
- Invoice generation
- Payment status tracking
- Subscription billing for clinics

### F. Dashboard & Reporting
- **Clinic Admin Dashboard:** total appointments, revenue summary, therapist utilization, upcoming bookings
- **Super Admin Dashboard:** total clinics onboarded, monthly recurring revenue, active subscriptions

## 5. Technical Requirements
- **Frontend:** React or Next.js (fully responsive)
- **Backend:** Node.js (Express/NestJS) or Laravel; REST API
- **Database:** PostgreSQL
- **Hosting:** AWS / DigitalOcean / Vercel (TBD)
- **Integrations:** Stripe (payments), SendGrid (emails), Twilio optional (SMS)

## 6. Architecture Requirements
- Multi-tenant (clinic-isolated data)
- Role-based access control
- Secure authentication (JWT or session)
- Data encryption
- GDPR-compliant data handling

## 7. Design Requirements
- Clean, professional medical aesthetic
- Simple, intuitive dashboard
- Fast loading; minimal learning curve
- Figma designs before development

## 8. Phased Development Plan
- **Phase 1 – MVP (3–4 months):** auth, booking system, calendar, patient profiles, Stripe integration, basic reporting, subscription system
- **Phase 2 – Advanced:** SMS reminders, file/document uploads, advanced analytics, multi-location support

## Current State (workspace)
- Next.js app with static export; out/ generated. GH Pages push pending (auth needed).
- Recent build succeeded via SSH. Local builds previously segfaulted on next build; resolved externally.
- gh-pages worktree was created and cleaned; needs push with proper GitHub auth to publish.
- UI kit page added (/ui-kit) plus dashboard calendar ribbon + availability glance for booking UX polish.
