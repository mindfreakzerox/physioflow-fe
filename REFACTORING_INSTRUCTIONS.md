## Project: Physiotherapy-Scheduler

You have this repo cloned locally. Refactor it into a production-ready healthcare practice management platform.

---

## CRITICAL RULES

### Rule 1: NO API KEYS

I have ZERO external API keys. Everything must work with `npm run dev` only.

**For every feature:**
1. Build a working mock version first
2. Use `USE_MOCK_MODE=true` environment flag
3. Mark real API points with `// TODO: Requires [API_KEY_NAME]`
4. Never block functionality waiting for keys

**Mock Implementations:**

| Feature | How to Mock |
|---------|-------------|
| Auth | NextAuth CredentialsProvider + hardcoded test users |
| Database | SQLite locally via Prisma |
| Payments | Fake UI, return mock success/failure responses |
| Email | `console.log()` + store in memory for `/dev/emails` preview |
| SMS | `console.log()` only |
| File Storage | Save to `/public/uploads` locally |
| Telehealth | Show "Coming Soon" placeholder UI |
| Calendar Sync | Generate `.ics` file download, no external API |

**Standard Service Pattern:**

```typescript
// lib/services/[service].ts
import { config } from '@/lib/config'

export async function doSomething() {
  if (config.useMockMode) {
    return { success: true, id: `mock_${Date.now()}` }
  }
  // TODO: Requires REAL_API_KEY in .env
  throw new Error('Service not configured - add API key')
}
```

---

### Rule 2: ORIGINAL BRANDING

**Product Name: PhysioFlow**

**DELETE all references to:**
- "Jane" or "Jane-style" or "Jane-clone"
- Any competitor names
- Copied marketing text

**Color Palette:**
- Primary: `#0D9488` (teal-600)
- Accent: `#F97316` (orange-500)
- Neutral: `#1F2937` (gray-800)
- Background: `#F9FAFB` (gray-50)

---

## TEST CREDENTIALS

Create these users in mock auth:

```
admin@physioflow.demo / demo123     → Clinic Admin
dr.smith@physioflow.demo / demo123  → Practitioner
front@physioflow.demo / demo123     → Front Desk Staff
patient@physioflow.demo / demo123   → Patient Portal
```

---

## DATABASE SCHEMA

Create `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Clinic {
  id            String         @id @default(cuid())
  name          String
  slug          String         @unique
  address       String?
  phone         String?
  email         String?
  timezone      String         @default("UTC")
  practitioners Practitioner[]
  patients      Patient[]
  services      Service[]
  appointments  Appointment[]
  createdAt     DateTime       @default(now())
}

model Practitioner {
  id           String        @id @default(cuid())
  clinicId     String
  clinic       Clinic        @relation(fields: [clinicId], references: [id])
  name         String
  email        String        @unique
  password     String
  role         String        @default("practitioner")
  specialties  String?
  avatarUrl    String?
  appointments Appointment[]
  createdAt    DateTime      @default(now())
}

model Patient {
  id           String        @id @default(cuid())
  clinicId     String
  clinic       Clinic        @relation(fields: [clinicId], references: [id])
  name         String
  email        String
  phone        String?
  dateOfBirth  DateTime?
  address      String?
  notes        String?
  appointments Appointment[]
  invoices     Invoice[]
  documents    Document[]
  createdAt    DateTime      @default(now())
}

model Service {
  id           String        @id @default(cuid())
  clinicId     String
  clinic       Clinic        @relation(fields: [clinicId], references: [id])
  name         String
  duration     Int
  price        Float
  description  String?
  color        String        @default("#0D9488")
  appointments Appointment[]
}

model Appointment {
  id             String       @id @default(cuid())
  clinicId       String
  clinic         Clinic       @relation(fields: [clinicId], references: [id])
  patientId      String
  patient        Patient      @relation(fields: [patientId], references: [id])
  practitionerId String
  practitioner   Practitioner @relation(fields: [practitionerId], references: [id])
  serviceId      String
  service        Service      @relation(fields: [serviceId], references: [id])
  startTime      DateTime
  endTime        DateTime
  status         String       @default("scheduled")
  notes          String?
  invoice        Invoice?
  createdAt      DateTime     @default(now())
}

model Invoice {
  id            String       @id @default(cuid())
  appointmentId String?      @unique
  appointment   Appointment? @relation(fields: [appointmentId], references: [id])
  patientId     String
  patient       Patient      @relation(fields: [patientId], references: [id])
  amount        Float
  status        String       @default("pending")
  paidAt        DateTime?
  createdAt     DateTime     @default(now())
}

model Document {
  id         String   @id @default(cuid())
  patientId  String
  patient    Patient  @relation(fields: [patientId], references: [id])
  name       String
  type       String
  filePath   String
  uploadedAt DateTime @default(now())
}
```

---

## FILE STRUCTURE

Refactor to:

```
app/
  (auth)/
    login/page.tsx
  (dashboard)/
    layout.tsx
    page.tsx
    schedule/page.tsx
    patients/page.tsx
    patients/[id]/page.tsx
    billing/page.tsx
    settings/page.tsx
  (public)/
    page.tsx
    book/[clinicSlug]/page.tsx
  (patient-portal)/
    layout.tsx
    page.tsx
  api/
    auth/[...nextauth]/route.ts
    appointments/route.ts
    patients/route.ts
    invoices/route.ts
  dev/
    emails/page.tsx
components/
  ui/
    Button.tsx
    Card.tsx
    Input.tsx
    Modal.tsx
    Badge.tsx
  calendar/
    ScheduleView.tsx
    AppointmentCard.tsx
    TimeSlotPicker.tsx
  forms/
    BookingWizard.tsx
    IntakeForm.tsx
    PatientForm.tsx
  layout/
    Navbar.tsx
    Sidebar.tsx
    DashboardShell.tsx
lib/
  config.ts
  db.ts
  auth.ts
  services/
    email.ts
    sms.ts
    payments.ts
    calendar.ts
  utils.ts
prisma/
  schema.prisma
  seed.ts
styles/
  globals.css
public/
  uploads/
  logo.svg
```

---

## IMPLEMENTATION ORDER

### Phase 1: Foundation
1. Create `lib/config.ts` with mock mode flags
2. Set up Prisma with SQLite + migrations
3. Create `prisma/seed.ts` with demo data
4. Implement NextAuth with credentials provider
5. Rebrand everything to "PhysioFlow"

### Phase 2: Core Features
6. Dashboard layout with role-based nav
7. Schedule view with calendar
8. Patient list and detail pages
9. Public booking flow

### Phase 3: Business Features
10. Invoice system with mock payments
11. Notification system (console logging)
12. Reporting dashboard

### Phase 4: Polish
13. Loading states and error handling
14. Mobile responsiveness
15. `/dev/emails` preview page

---

## ENV FILE

Create `.env.local`:

```env
USE_MOCK_MODE=true
MOCK_DELAY_MS=300
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="dev-secret-change-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Future (not required)
# STRIPE_SECRET_KEY=
# SENDGRID_API_KEY=
# TWILIO_ACCOUNT_SID=
```

---

## DEMO SEED DATA

Create in `prisma/seed.ts`:
- 1 clinic: "PhysioFlow Demo Clinic"
- 5 practitioners
- 20 patients
- 8 services
- 50 appointments (past 30 days + next 14 days)
- 10 invoices (mixed statuses)

---

## SUCCESS CRITERIA

After refactoring:
1. `npm install && npx prisma migrate dev && npm run dev` works
2. Landing page shows PhysioFlow branding
3. All test credentials work
4. Role-appropriate dashboards display
5. Schedule shows appointments
6. Patient profiles accessible
7. Mock payments process
8. Public booking works
9. ZERO "Jane" references anywhere

---

## QUESTIONS?

Ask me before assuming anything about:
- Design decisions
- Feature scope
- Schema changes
- Service choices
