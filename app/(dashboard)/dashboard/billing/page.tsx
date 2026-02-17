"use client";
import React from 'react';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { takePayment } from '@/lib/services/payments';
import { Button } from '@/components/ui/Button';

const invoices = Array.from({ length: 5 }).map((_, idx) => ({
  id: `inv-${idx + 1}`,
  patient: `Patient ${idx + 1}`,
  amount: 90 + idx * 10,
  status: idx % 2 === 0 ? 'pending' : 'paid'
}));

export default function BillingPage() {
  const payInvoice = async (id: string) => {
    await takePayment({ amount: 100, method: 'card', patientId: id });
  };
  return (
    <div className="space-y-4">
      <Card title="Invoices">
        <div className="space-y-3 text-sm">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-[200px]">
                <div className="font-semibold text-gray-900">{inv.id} · {inv.patient}</div>
                <div className="text-gray-600">{formatCurrency(inv.amount)}</div>
              </div>
              <Button
                variant={inv.status === 'paid' ? 'ghost' : 'outline'}
                size="sm"
                onClick={() => payInvoice(inv.id)}
              >
                {inv.status === 'paid' ? 'View receipt' : 'Mark paid (mock)'}
              </Button>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Payments">
        <p className="text-sm text-gray-600">Stripe wiring pending. Currently logs mock payments to the console.</p>
      </Card>
    </div>
  );
}
