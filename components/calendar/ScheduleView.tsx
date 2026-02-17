import React from 'react';
import { calendarEvents } from '@/lib/mock-data';
import { AppointmentCard } from './AppointmentCard';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function ScheduleView() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {days.map((day) => (
          <Badge key={day} tone="neutral">{day}</Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {calendarEvents.map((event) => (
          <AppointmentCard key={event.id} event={event} />
        ))}
      </div>
      <Card title="Reschedule queue">
        <div className="space-y-2 text-sm text-gray-700">
          <p>Queue is mocked; real integrations go here.</p>
          <ul className="list-disc pl-4 text-gray-600">
            <li>Drag-and-drop calendar coming soon.</li>
            <li>Sync to EHR/telehealth APIs when keys are added. // TODO: Requires REAL_API_KEYS</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
