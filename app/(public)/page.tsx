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
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-teal-700">PhysioFlow</p>
          <h1 className="text-3xl font-black leading-tight text-gray-900">Mocked practice OS for physio clinics.</h1>
          <p className="text-lg text-gray-600">
            Scheduling, intake, billing, and patient portal—fully in mock mode until real API keys are added.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="rounded-full bg-teal-600 px-4 py-2 font-semibold text-white shadow-lg hover:bg-teal-700" href="/dashboard">Open dashboard</Link>
            <Link className="rounded-full border border-gray-200 px-4 py-2 font-semibold text-gray-800 shadow-sm hover:bg-white" href="/book/physioflow-demo">Book a visit</Link>
          </div>
        </div>
        <Card title="Clinic snapshot">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-gray-50 p-3">
                <div className="text-xs uppercase text-gray-500">{metric.label}</div>
                <div className="text-xl font-bold text-gray-900">{metric.value}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">USE_MOCK_MODE is enforced. No external APIs are required.</p>
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
            <p className="text-sm text-gray-600">Mocked workflows, ready to wire into real services later.</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
