import React from 'react';
import { ScheduleView } from '@/components/calendar/ScheduleView';
import { Card } from '@/components/ui/Card';

export default function SchedulePage() {
  return (
    <div className="space-y-4">
      <Card title="Schedule">
        <p className="text-sm text-gray-600">Mock calendar with day/week toggles to be wired later.</p>
      </Card>
      <ScheduleView />
    </div>
  );
}
