import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

const metrics = [
  { label: 'Appointments managed', value: '50 (mock)' },
  { label: 'Patients', value: '20' },
  { label: 'Practitioners', value: '5' }
];

export default function PublicHome() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-14 pt-16 sm:gap-12 sm:pb-16 sm:pt-20">
      <section className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-4 sm:gap-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] sm:text-xs">PhysioFlow</p>
          <h1 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-[1.05] tracking-[-0.02em] text-gray-900">Mocked practice OS for physio clinics.</h1>
          <p className="max-w-xl text-[16px] leading-[1.65] text-gray-700 sm:text-[17px]">
            Scheduling, intake, billing, and patient portal—fully in mock mode until real API keys are added.
          </p>
          <div className="flex flex-wrap gap-3 text-sm sm:gap-4">
            <Link className="inline-flex items-center justify-center rounded-full bg-[#0D9488] px-5 py-2.5 text-[14px] font-semibold leading-[1.2] text-white shadow-[0_12px_28px_rgba(13,148,136,0.18)] transition hover:bg-[#0b7f76]" href="/dashboard">Open dashboard</Link>
            <Link className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-2.5 text-[14px] font-semibold leading-[1.2] text-gray-900 shadow-sm transition hover:bg-white/80" href="/book/physioflow-demo">Book a visit</Link>
          </div>
        </div>
        <Card title="Clinic snapshot" className="min-w-0">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-gray-50 p-3">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500">{metric.label}</div>
                <div className="text-2xl font-bold text-gray-900 leading-[1.2]">{metric.value}</div>
              </div>
            ))}
          </div>
          <p className="text-[12.5px] text-gray-600">USE_MOCK_MODE is enforced. No external APIs are required.</p>
        </Card>
      </section>
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          'Clinic admin',
          'Practitioner',
          'Front desk',
          'Billing',
          'Patient portal',
          'Reporting'
        ].map((item) => (
          <Card key={item} title={item}>
            <p className="text-[14.5px] leading-[1.6] text-gray-700">Mocked workflows, ready to wire into real services later.</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
