import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function PatientForm() {
  return (
    <Card title="Add patient">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label="Name" placeholder="Alex Kim" required />
        <Input label="Email" placeholder="alex@example.com" type="email" required />
        <Input label="Phone" placeholder="+1 (555) 123-4567" />
        <Input label="Address" placeholder="123 Main St" />
      </div>
      <Button type="button">Create (mock)</Button>
    </Card>
  );
}
