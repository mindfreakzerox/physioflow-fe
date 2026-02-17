import React from 'react';
import { portalPreview } from '@/lib/mock-data';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function PatientPortalPage() {
  return (
    <div className="space-y-4">
      <Card title={`Welcome, ${portalPreview.patientName}`}>
        <p className="text-sm text-gray-600">Access code: {portalPreview.accessCode}</p>
        <p className="text-sm text-gray-700">Next visit: {portalPreview.nextVisit.date} · {portalPreview.nextVisit.mode}</p>
      </Card>
      <div className="grid gap-3 md:grid-cols-2">
        <Card title="Exercises">
          <ul className="space-y-2 text-sm text-gray-700">
            {portalPreview.exercises.map((ex) => (
              <li key={ex.name} className="flex items-start justify-between gap-2">
                <span>{ex.name}</span>
                <Badge tone="info">{ex.dosage}</Badge>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Documents">
          <ul className="space-y-2 text-sm text-gray-700">
            {portalPreview.documents.map((doc) => (
              <li key={doc.title} className="flex items-center justify-between">
                <span>{doc.title}</span>
                <Badge tone={doc.status === 'shared' ? 'success' : 'warning'}>{doc.status}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
