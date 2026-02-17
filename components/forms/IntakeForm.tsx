import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function IntakeForm() {
  return (
    <Card title="Intake form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label="Name" placeholder="Patient name" required />
        <Input label="Email" placeholder="patient@example.com" required />
        <Input label="Phone" placeholder="+1 (555) 000-0000" />
        <Input label="Date of birth" placeholder="1990-01-01" />
      </div>
      <label className="text-sm text-gray-700 flex flex-col gap-1">
        Notes
        <textarea className="min-h-[100px] rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Injury details, goals, precautions" />
      </label>
      <Button type="button">Save (mock)</Button>
    </Card>
  );
}
