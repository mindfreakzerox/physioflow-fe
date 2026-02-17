import React from 'react';
import { BookingWizard } from '@/components/forms/BookingWizard';
import { Card } from '@/components/ui/Card';
import { notFound } from 'next/navigation';

export default function BookClinic({ params }: { params: { clinicSlug: string } }) {
  if (!params.clinicSlug) return notFound();
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <Card title="PhysioFlow online booking">
        <p className="text-sm text-gray-600">Clinic slug: {params.clinicSlug}</p>
        <p className="text-sm text-gray-700">This is a mock flow. Confirmations are printed to the console and stored in memory only.</p>
      </Card>
      <BookingWizard clinicName="PhysioFlow Demo Clinic" />
    </main>
  );
}
