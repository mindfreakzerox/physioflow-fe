import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

const invoices = Array.from({ length: 5 }).map((_, idx) => ({
  id: `inv-${idx + 1}`,
  patient: `Patient ${idx + 1}`,
  amount: 90 + idx * 10,
  status: idx % 2 === 0 ? 'pending' : 'paid'
}));

export async function GET() {
  if (config.useMockMode) {
    return NextResponse.json(invoices);
  }
  // TODO: wire to database
  return NextResponse.json({ error: 'Service not configured' }, { status: 503 });
}
