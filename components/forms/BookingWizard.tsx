"use client";
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { TimeSlotPicker } from '../calendar/TimeSlotPicker';

const mockSlots = [
  { label: '09:00', available: true },
  { label: '09:45', available: true },
  { label: '10:30', available: false },
  { label: '11:15', available: true },
  { label: '14:00', available: true },
  { label: '16:30', available: false }
];

export function BookingWizard({ clinicName }: { clinicName: string }) {
  const [step, setStep] = useState(1);
  const [slot, setSlot] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <div className="text-sm text-gray-600">Booking with {clinicName} (mock flow)</div>
      {step === 1 && (
        <TimeSlotPicker
          slots={mockSlots}
          onSelect={(value) => {
            setSlot(value);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <Card title="Patient details">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Full name" placeholder="Alex Kim" required />
            <Input label="Email" placeholder="alex@example.com" type="email" required />
            <Input label="Phone" placeholder="+1 (555) 123-4567" />
            <Input label="Reason" placeholder="Ankle pain follow-up" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={() => setStep(3)} disabled={!slot}>Confirm {slot ? `(${slot})` : ''}</Button>
            <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
          </div>
        </Card>
      )}
      {step === 3 && (
        <Card title="Booking confirmed">
          <p className="text-sm text-gray-700">This is a mock confirmation. Emails/SMS are logged to console.</p>
          <p className="text-sm text-gray-700">Selected time: {slot}</p>
          <Button onClick={() => setStep(1)} variant="outline">Book another</Button>
        </Card>
      )}
    </div>
  );
}
