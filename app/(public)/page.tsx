import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

const metrics = [
  { label: 'Appointments managed', value: '50 (mock)' },
  { label: 'Patients', value: '20' },
  { label: 'Practitioners', value: '5' }
];

const roles = [
  { title: 'Clinic admin', copy: 'Capacity, performance, and billing snapshots that stay in sync with mock data.' },
  { title: 'Practitioner', copy: 'A day sheet that keeps charting, arrivals, and payments side-by-side.' },
  { title: 'Front desk', copy: 'Drag-and-drop scheduling with eligibility, intake, and reminders in one place.' },
  { title: 'Billing', copy: 'Invoice queues with mock payments, status filters, and export-ready totals.' },
  { title: 'Patient portal', copy: 'Self-serve booking, intake, and receipts—already wired for mock mode.' },
  { title: 'Reporting', copy: 'Throughput, cancellations, and utilization trends ready for real data later.' }
];

const highlights = [
  {
    title: 'Calm hero layout',
    copy: 'Two-column hero with a live clinic snapshot card, softened shadows, and muted gradients that stay on-brand.'
  },
  {
    title: 'CTA buttons that feel tactile',
    copy: 'Rounded pills with balanced padding, subtle lift on hover, and primary/ghost states tuned to PhysioFlow colors.'
  },
  {
    title: 'Comfortable spacing',
    copy: 'Navbar, hero, and card spacing follow a calm clinic rhythm: roomy gutters, even vertical rhythm, and gentle dividers.'
  }
];

export default function PublicHome() {
  return (
    <main className="relative isolate">
      <div className="pointer-events-none absolute inset-x-0 top-[-220px] h-[440px] bg-gradient-to-b from-[#ECFDF3] via-[#F9FAFB] to-transparent opacity-90" aria-hidden />
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0F766E] shadow-[0_10px_32px_rgba(15,23,42,0.08)] ring-1 ring-[#0D9488]/15">
              Practice OS · Mock mode
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-black leading-[1.05] tracking-[-0.02em] text-gray-900 sm:text-4xl md:text-[46px]">
                Calm, practice-inspired landing—still fully PhysioFlow.
              </h1>
              <p className="max-w-2xl text-[16px] leading-[1.65] text-gray-700 sm:text-[17px]">
                Scheduling, intake, billing, and patient portal in a softer layout. Muted gradients, balanced CTAs, and
                on-brand teal/orange accents keep the experience familiar while you stay safely in mock mode.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[14px]">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#0D9488] px-5 py-3 text-[14.5px] font-semibold leading-[1.2] text-white shadow-[0_16px_40px_rgba(13,148,136,0.18)] transition hover:-translate-y-[1px] hover:bg-[#0b7f76]"
                href="/dashboard"
              >
                Open mock dashboard
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-gray-200/90 bg-white px-5 py-3 text-[14.5px] font-semibold leading-[1.2] text-gray-900 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:-translate-y-[1px] hover:bg-gray-50"
                href="/book/physioflow-demo"
              >
                Book a visit
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2.5 text-[14px] font-semibold leading-[1.2] text-[#0D9488] underline-offset-[6px] transition hover:text-[#0b7f76]"
                href="/login"
              >
                Login
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[13.5px] font-medium text-gray-600">
              <span
                className="inline-flex items-center rounded-full px-3 py-1.5 text-[#0F766E] ring-1 ring-[#0D9488]/20"
                style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)' }}
              >
                USE_MOCK_MODE enforced
              </span>
              <span className="text-gray-600">No external APIs required. Data stays local.</span>
            </div>
          </div>

          <Card className="relative overflow-hidden border-gray-100/80 bg-gradient-to-br from-white via-white to-[#ecfdf3] shadow-[0_26px_70px_rgba(15,23,42,0.08)]">
            <div className="absolute right-[-32px] top-[-32px] h-40 w-40 rounded-full bg-[#F97316]/10 blur-3xl" aria-hidden />
            <div
              className="absolute left-[-24px] bottom-[-24px] h-36 w-36 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)' }}
              aria-hidden
            />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-500">Clinic snapshot</p>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-gray-900">PhysioFlow Demo Clinic</h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-[12.5px] font-semibold text-[#0D9488] shadow-sm ring-1 ring-[#0D9488]/20">
                  Mock data
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/70 bg-white/70 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500">{metric.label}</div>
                    <div className="text-2xl font-bold leading-[1.2] text-gray-900">{metric.value}</div>
                  </div>
                ))}
              </div>
              <div
                className="rounded-xl border border-[#0D9488]/20 px-4 py-3 text-[14px] leading-[1.6] text-gray-800 shadow-[0_12px_32px_rgba(13,148,136,0.12)]"
                style={{ backgroundColor: 'rgba(13, 148, 136, 0.08)' }}
              >
                Scheduling, intake, billing, and portal routes are live in App Router. Swap in real services when ready—UI stays stable.
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-12 sm:space-y-8 sm:pb-16">
        <div className="space-y-2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-500">Built for every seat</p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-gray-900 sm:text-[32px]">Role-specific views already mocked.</h2>
          <p className="max-w-3xl text-[15.5px] leading-[1.65] text-gray-700">Cards, tables, and CTA blocks share the same softened corners and spacing for a calm, trustworthy feel while keeping PhysioFlow colors.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((item) => (
            <Card key={item.title} title={item.title} className="shadow-[0_16px_44px_rgba(15,23,42,0.06)]">
              <p>{item.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-12 sm:space-y-8 sm:pb-16">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <Card className="shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#0D9488] shadow-[0_0_0_6px_rgba(13,148,136,0.12)]" aria-hidden />
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-600">Why it feels familiar</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3 shadow-inner">
                  <h4 className="text-[15px] font-semibold tracking-[-0.01em] text-gray-900">{item.title}</h4>
                  <p className="text-[14.5px] leading-[1.65] text-gray-700">{item.copy}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="relative overflow-hidden border-[#0D9488]/15 bg-gradient-to-br from-[#0D9488]/12 via-white to-white shadow-[0_22px_70px_rgba(13,148,136,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.08),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(13,148,136,0.12),transparent_46%)]" aria-hidden />
            <div className="relative space-y-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F766E]">CTA blocks</p>
              <h3 className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-gray-900">Launch to mock dashboard or booking from a single, calm strip.</h3>
              <p className="text-[15px] leading-[1.65] text-gray-700">CTA spacing, pill buttons, and soft gradients mirror modern clinic banners while keeping PhysioFlow teal and orange accents.</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-[#0D9488] px-5 py-3 text-[14.5px] font-semibold leading-[1.2] text-white shadow-[0_16px_40px_rgba(13,148,136,0.2)] transition hover:-translate-y-[1px] hover:bg-[#0b7f76]"
                  href="/dashboard"
                >
                  Try the mock dashboard
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/80 px-4 py-3 text-[14.5px] font-semibold leading-[1.2] text-[#0D9488] shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition hover:-translate-y-[1px] hover:bg-white"
                  href="/book/physioflow-demo"
                >
                  Book a mock visit
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-20">
        <Card className="relative overflow-hidden border-[#0D9488]/15 bg-gradient-to-r from-white via-[#ecfdf3] to-white shadow-[0_22px_70px_rgba(13,148,136,0.14)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(13,148,136,0.12),transparent_45%),radial-gradient(circle_at_82%_70%,rgba(249,115,22,0.12),transparent_38%)]" aria-hidden />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F766E]">Ready when you are</p>
              <h3 className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] text-gray-900">Keep the calm tone, keep the PhysioFlow palette.</h3>
              <p className="max-w-2xl text-[15px] leading-[1.65] text-gray-700">Mock mode remains enforced, App Router routes stay untouched. When real APIs arrive, swap services without disturbing the landing experience.</p>
            </div>
            <div className="flex flex-wrap gap-3 sm:min-w-[280px] sm:justify-end">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#0D9488] px-5 py-3 text-[14.5px] font-semibold leading-[1.2] text-white shadow-[0_16px_40px_rgba(13,148,136,0.2)] transition hover:-translate-y-[1px] hover:bg-[#0b7f76]"
                href="/dashboard"
              >
                Explore dashboard
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-gray-200/80 bg-white px-4 py-3 text-[14.5px] font-semibold leading-[1.2] text-gray-900 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:-translate-y-[1px] hover:bg-gray-50"
                href="/book/physioflow-demo"
              >
                Start a mock booking
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
