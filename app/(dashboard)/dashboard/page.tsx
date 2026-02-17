import React from 'react';
import { Card } from '@/components/ui/Card';
import { BookingWizard } from '@/components/forms/BookingWizard';
import { ScheduleView } from '@/components/calendar/ScheduleView';
import { calendarEvents, mockPatients } from '@/lib/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <Card title="Today">
          <div className="text-2xl font-bold text-gray-900">{calendarEvents.length} visits</div>
          <p className="text-sm text-gray-600">All data is mocked. Telehealth, payments, and reminders console-log actions.</p>
        </Card>
        <Card title="Patients">
          <div className="flex flex-wrap gap-2">
            {mockPatients.slice(0, 4).map((p) => (
              <Badge key={p.id} tone="info">{p.name}</Badge>
            ))}
          </div>
        </Card>
      </div>
      <Card title="Schedule preview">
        <ScheduleView />
      </Card>
      <Card title="Quick book">
        <BookingWizard clinicName="PhysioFlow Demo Clinic" />
      </Card>
    </div>
  );
}
