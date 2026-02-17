import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export type TimeSlotPickerProps = {
  slots: { label: string; available: boolean }[];
  onSelect?: (label: string) => void;
};

export function TimeSlotPicker({ slots, onSelect }: TimeSlotPickerProps) {
  return (
    <Card title="Available times">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {slots.map((slot) => (
          <Button
            key={slot.label}
            variant={slot.available ? 'outline' : 'ghost'}
            disabled={!slot.available}
            onClick={() => onSelect?.(slot.label)}
          >
            {slot.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}
