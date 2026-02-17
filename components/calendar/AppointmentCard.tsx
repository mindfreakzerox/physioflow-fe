import React from 'react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { CalendarEvent } from '@/lib/mock-data';

export function AppointmentCard({ event }: { event: CalendarEvent }) {
  return (
    <Card className="h-full" title={`${event.patient} · ${event.visit}`}>
      <div className="text-sm text-gray-600 flex flex-wrap gap-2">
        <span>{event.day} {event.start}–{event.end}</span>
        <Badge tone={event.status === 'completed' ? 'success' : event.status === 'canceled' ? 'warning' : 'info'}>{event.status}</Badge>
        <Badge tone="neutral">{event.mode}</Badge>
        {event.room && <Badge tone="neutral">{event.room}</Badge>}
      </div>
      <p className="text-sm text-gray-700">{event.note}</p>
      <div className="text-xs text-gray-500">Therapist: {event.therapist}</div>
    </Card>
  );
}
