import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { mockPatients } from '@/lib/mock-data';
import { PatientForm } from '@/components/forms/PatientForm';

export default function PatientsPage() {
  return (
    <div className="space-y-4">
      <Card title="Patients">
        <div className="divide-y divide-gray-200">
          {mockPatients.map((p) => (
            <div key={p.id} className="flex items-center justify-between py-2 text-sm">
              <div>
                <div className="font-semibold text-gray-900">{p.name}</div>
                <div className="text-gray-600">{p.email}</div>
              </div>
              <Link className="text-teal-700 font-semibold" href={`/dashboard/patients/${p.id}`}>View</Link>
            </div>
          ))}
        </div>
      </Card>
      <PatientForm />
    </div>
  );
}
