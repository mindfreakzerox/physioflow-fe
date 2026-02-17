import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const metrics = [
  { label: "Appointments managed", value: "50 (mock)" },
  { label: "Patients", value: "20" },
  { label: "Practitioners", value: "5" },
];

const heroHighlights = [
  "Day sheet, booking, billing, and portal already mocked",
  "Soft gradients, pill CTAs, and steady nav spacing",
  "Book / demo / sign-in CTAs align with PhysioFlow palette",
];

const features = [
  {
    title: "Scheduling that feels live",
    copy: "Drag-and-drop mock schedule, same-day waitlist, and practitioner load at a glance.",
    icon: "📅",
  },
  {
    title: "Billing & invoices",
    copy: "Queue invoices, mark paid, and preview exports without leaving mock mode.",
    icon: "💳",
  },
  {
    title: "Patient-first portal",
    copy: "Self-serve booking, intake, and receipts with calm typography and clear CTAs.",
    icon: "🌿",
  },
];

const benefits = [
  {
    title: "Clinic rhythm, not chaos",
    points: [
      "Role-specific dashboards",
      "Live-ish booking cards",
      "Color-coded service chips",
    ],
  },
  {
    title: "Trust the mock rails",
    points: [
      "USE_MOCK_MODE enforced",
      "Local SQLite + seed data",
      "Swap services later with minimal UI churn",
    ],
  },
  {
    title: "CTA parity across flows",
    points: [
      "Book / Demo / Login always visible",
      "Pill buttons with consistent lift",
      "Ghost state mirrors primary spacing",
    ],
  },
];

const testimonials = [
  {
    quote:
      "The landing feels like the product—calm, steady, and on-brand without shouting.",
    name: "Clinic admin (mock)",
    role: "Capacity & billing snapshots",
  },
  {
    quote:
      "Booking and portal CTAs line up exactly how we want patients to move.",
    name: "Front desk (mock)",
    role: "Scheduling & arrivals",
  },
  {
    quote:
      "Colors, gradients, and spacing all match the dashboard tone. Nothing feels out of place.",
    name: "Practitioner (mock)",
    role: "Day sheet & charting",
  },
];

const bookingSlots = [
  {
    time: "9:30 AM",
    practitioner: "Dr. Smith",
    type: "Initial Assessment",
    status: "Available",
  },
  {
    time: "11:00 AM",
    practitioner: "Dr. Lee",
    type: "Follow-up",
    status: "Held",
  },
  {
    time: "1:15 PM",
    practitioner: "Dr. Patel",
    type: "Pelvic Health",
    status: "Available",
  },
  {
    time: "3:45 PM",
    practitioner: "Dr. Gomez",
    type: "Sports Rehab",
    status: "Available",
  },
];

const footerLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/book/physioflow-demo", label: "Book a visit" },
  { href: "/portal", label: "Patient portal" },
  { href: "/login", label: "Login" },
];

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-[#0D9488] px-5 py-3 text-[14.5px] font-semibold leading-[1.2] text-white shadow-[0_16px_40px_rgba(13,148,136,0.18)] transition hover:-translate-y-[1px] hover:bg-[#0b7f76]";
const ghostButton =
  "inline-flex items-center justify-center rounded-full border border-gray-200/90 bg-white px-5 py-3 text-[14.5px] font-semibold leading-[1.2] text-gray-900 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:-translate-y-[1px] hover:bg-gray-50";
const textButton =
  "inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2.5 text-[14px] font-semibold leading-[1.2] text-[#0D9488] underline-offset-[6px] transition hover:text-[#0b7f76]";

export default function PublicHome() {
  return (
    <main className="relative isolate">
      <div
        className="pointer-events-none absolute inset-x-0 top-[-240px] h-[500px] bg-gradient-to-b from-[#ECFDF3] via-[#F9FAFB] to-transparent"
        aria-hidden
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0F766E] shadow-[0_10px_32px_rgba(15,23,42,0.08)] ring-1 ring-[#0D9488]/20">
              PhysioFlow · Mock mode
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-black leading-[1.05] tracking-[-0.02em] text-gray-900 sm:text-4xl md:text-[46px]">
                Jane-style calm, but fully PhysioFlow.
              </h1>
              <p className="max-w-2xl text-[16px] leading-[1.65] text-gray-700 sm:text-[17px]">
                Two-column hero with live-ish clinic snapshot, pill CTAs for
                book/demo/login, and muted gradients that keep teal and orange
                in balance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[14px]">
              <Link className={primaryButton} href="/book/physioflow-demo">
                Book a visit
              </Link>
              <Link className={ghostButton} href="/dashboard">
                View demo dashboard
              </Link>
              <Link className={textButton} href="/login">
                Login
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-[0_16px_44px_rgba(15,23,42,0.07)] ring-1 ring-[#0D9488]/15">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D9488]/10 text-lg">
                  🌀
                </div>
                <div className="text-[14.5px] leading-[1.6] text-gray-800">
                  <div className="font-semibold text-gray-900">Practice OS</div>
                  <p className="text-gray-700">
                    Scheduling, billing, portal, reporting already wired to mock
                    data.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-[0_16px_44px_rgba(15,23,42,0.07)] ring-1 ring-[#F97316]/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/10 text-lg">
                  ✨
                </div>
                <div className="text-[14.5px] leading-[1.6] text-gray-800">
                  <div className="font-semibold text-gray-900">
                    Soft gradients
                  </div>
                  <p className="text-gray-700">
                    Nav, hero CTAs, and cards mirror the calm cadence you see in
                    Jane.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-2 text-[13.5px] font-medium text-gray-700 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-gray-200/80"
                >
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full bg-[#0D9488] shadow-[0_0_0_6px_rgba(13,148,136,0.12)]"
                    aria-hidden
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden border-gray-100/80 bg-gradient-to-br from-white via-white to-[#ecfdf3] shadow-[0_26px_70px_rgba(15,23,42,0.08)]">
            <div
              className="absolute right-[-32px] top-[-32px] h-40 w-40 rounded-full bg-[#F97316]/12 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute left-[-24px] bottom-[-24px] h-36 w-36 rounded-full bg-[#0D9488]/10 blur-3xl"
              aria-hidden
            />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Clinic snapshot
                  </p>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-gray-900">
                    PhysioFlow Demo Clinic
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-[12.5px] font-semibold text-[#0D9488] shadow-sm ring-1 ring-[#0D9488]/20">
                  Mock data
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/70 bg-white/80 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                      {metric.label}
                    </div>
                    <div className="text-2xl font-bold leading-[1.2] text-gray-900">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-[#0D9488]/20 bg-[#0D9488]/10 px-4 py-3 text-[14px] leading-[1.6] text-gray-800 shadow-[0_12px_32px_rgba(13,148,136,0.12)]">
                Scheduling, intake, billing, and portal routes are live in App
                Router. Swap real services later—UI and CTAs stay stable.
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-14 sm:space-y-8 sm:pb-16">
        <div className="space-y-2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-500">
            Built for every seat
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-gray-900 sm:text-[32px]">
            Feature columns with icons and calm spacing.
          </h2>
          <p className="max-w-3xl text-[15.5px] leading-[1.65] text-gray-700">
            Mirror of the Jane-style grid: icon, concise headline, grounded
            copy, and consistent pill CTAs.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <Card
              key={item.title}
              className="shadow-[0_16px_44px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D9488]/10 text-xl">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[16px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-gray-700">
                    {item.copy}
                  </p>
                </div>
              </div>
              <Link className={textButton} href="/dashboard">
                See it in demo
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-14 sm:space-y-8 sm:pb-16">
        <Card className="relative overflow-hidden border-[#0D9488]/15 bg-gradient-to-br from-[#0D9488]/10 via-white to-white shadow-[0_22px_70px_rgba(13,148,136,0.14)]">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.08),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(13,148,136,0.12),transparent_46%)]"
            aria-hidden
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F766E]">
                Benefits row
              </p>
              <h3 className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-gray-900">
                Calm benefit columns that mirror the original cadence.
              </h3>
              <p className="text-[15px] leading-[1.65] text-gray-700">
                Each row keeps consistent padding, rounded corners, and quiet
                dividers so the mock experience still feels production-ready.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className={primaryButton} href="/book/physioflow-demo">
                  Book a mock visit
                </Link>
                <Link className={ghostButton} href="/dashboard">
                  Explore dashboard
                </Link>
              </div>
            </div>
            <div className="grid gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_14px_38px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-2 flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-gray-600">
                    <span
                      className="h-2 w-2 rounded-full bg-[#F97316]"
                      aria-hidden
                    />
                    {benefit.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {benefit.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-gray-50 px-3 py-1.5 text-[13.5px] font-semibold text-gray-800 ring-1 ring-gray-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-14 sm:space-y-8 sm:pb-16">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            <div className="mb-4 flex items-center gap-2">
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full bg-[#0D9488] shadow-[0_0_0_6px_rgba(13,148,136,0.12)]"
                aria-hidden
              />
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-600">
                Testimonials
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-gray-100 bg-gray-50/70 px-4 py-3 shadow-inner"
                >
                  <p className="text-[14.5px] leading-[1.65] text-gray-800">
                    “{item.quote}”
                  </p>
                  <div className="mt-3 text-[13px] font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-[12.5px] uppercase tracking-[0.08em] text-gray-500">
                    {item.role}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="relative overflow-hidden border-[#0D9488]/15 bg-gradient-to-br from-white via-white to-[#ecfdf3] shadow-[0_22px_70px_rgba(13,148,136,0.14)]">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(249,115,22,0.12),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(13,148,136,0.12),transparent_46%)]"
              aria-hidden
            />
            <div className="relative space-y-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F766E]">
                CTA strip
              </p>
              <h3 className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-gray-900">
                Launch to booking, portal, or login from one calm bar.
              </h3>
              <p className="text-[15px] leading-[1.65] text-gray-700">
                Button sizing, radii, and shadows match nav so the landing stays
                cohesive.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className={primaryButton} href="/book/physioflow-demo">
                  Book now
                </Link>
                <Link className={ghostButton} href="/portal">
                  Patient portal
                </Link>
                <Link className={textButton} href="/login">
                  Sign in
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-20">
        <Card className="relative overflow-hidden border-[#0D9488]/20 bg-gradient-to-r from-white via-[#ecfdf3] to-white shadow-[0_22px_70px_rgba(13,148,136,0.14)]">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(13,148,136,0.14),transparent_45%),radial-gradient(circle_at_82%_70%,rgba(249,115,22,0.14),transparent_38%)]"
            aria-hidden
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F766E]">
                Booking embed mock
              </p>
              <h3 className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-gray-900">
                Preview the booking feel without leaving the page.
              </h3>
              <p className="max-w-2xl text-[15px] leading-[1.65] text-gray-700">
                A Jane-style inline booking mock with teal/orange accents,
                availability chips, and clear next steps.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className={primaryButton} href="/book/physioflow-demo">
                  Open booking flow
                </Link>
                <Link className={ghostButton} href="/dashboard">
                  View in dashboard
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_18px_46px_rgba(15,23,42,0.1)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                    PhysioFlow Booking
                  </div>
                  <div className="text-[15px] font-bold text-gray-900">
                    Choose a time
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#0D9488]/10 px-3 py-1.5 text-[12.5px] font-semibold text-[#0D9488] ring-1 ring-[#0D9488]/20">
                    Local
                  </span>
                  <span className="rounded-full bg-[#F97316]/10 px-3 py-1.5 text-[12.5px] font-semibold text-[#F97316] ring-1 ring-[#F97316]/20">
                    Mock
                  </span>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {bookingSlots.map((slot) => (
                  <div
                    key={slot.time}
                    className="flex flex-wrap items-center justify-between gap-3 py-3"
                  >
                    <div className="space-y-1">
                      <div className="text-[14.5px] font-semibold text-gray-900">
                        {slot.time} · {slot.practitioner}
                      </div>
                      <div className="text-[13.5px] text-gray-700">
                        {slot.type}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#0D9488]/10 px-3 py-1.5 text-[13px] font-semibold text-[#0D9488] ring-1 ring-[#0D9488]/25">
                        {slot.status}
                      </span>
                      <button className="rounded-full bg-[#F97316] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.2)] transition hover:-translate-y-[1px] hover:bg-[#dd640f]">
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-[13.5px] text-gray-700">
                <span>
                  Need a different time? Move to portal and keep your choices.
                </span>
                <Link className={textButton} href="/portal">
                  Go to portal
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t border-gray-200/80 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[17px] font-extrabold tracking-[-0.02em] text-gray-900">
            <span
              className="h-2.5 w-2.5 rounded-full bg-[#0D9488] shadow-[0_0_0_6px_rgba(13,148,136,0.12)]"
              aria-hidden
            />
            PhysioFlow
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[14px] font-semibold text-gray-800">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-gray-100 hover:text-[#0D9488]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[13px] text-gray-600">
            <span className="rounded-full bg-[#0D9488]/10 px-3 py-1.5 text-[12.5px] font-semibold text-[#0D9488] ring-1 ring-[#0D9488]/20">
              Mock mode
            </span>
            <span>
              Soft gradients, consistent CTAs, and ready for production APIs.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
