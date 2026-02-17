import { NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { mockPatients } from '@/lib/mock-data';

export async function GET() {
  if (config.useMockMode) {
    return NextResponse.json(mockPatients);
  }
  // TODO: wire to database
  return NextResponse.json({ error: 'Service not configured' }, { status: 503 });
}
