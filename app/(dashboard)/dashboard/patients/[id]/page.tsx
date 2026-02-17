import React from 'react';
import { notFound } from 'next/navigation';
import { mockPatients, calendarEvents } from '@/lib/mock-data';
import { Card } from '@/components/ui/Card';

export default function PatientDetail({ params }: { params: { id: string } }) {
  const patient = mockPatients.find((p) => p.id === params.id);
  if (!patient) return notFound();
  const visits = calendarEvents.filter((c) => c.patient.includes(patient.name.split(' ')[0]));
  return (
    <div className="space-y-4">
      <Card title={patient.name}>
        <p className="text-sm text-gray-700">{patient.email}</p>
        <p className="text-sm text-gray-600">{patient.lastVisit}</p>
      </Card>
      <Card title="Recent visits">
        <div className="space-y-2 text-sm">
          {visits.map((v) => (
            <div key={v.id} className="flex flex-wrap items-center justify-between gap-2">
              <span>{v.day} {v.start} · {v.visit}</span>
              <span className="text-gray-500">{v.status}</span>
            </div>
          ))}
          {!visits.length && <p className="text-gray-600">No visits yet (mock).</p>}
        </div>
      </Card>
    </div>
  );
}
