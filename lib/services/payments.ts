import { config } from '@/lib/config';

export type PaymentRequest = {
  amount: number;
  method: string;
  patientId: string;
};

export async function takePayment(request: PaymentRequest) {
  if (config.useMockMode) {
    console.log('[mock-payment]', request);
    return { success: true, id: `mock_payment_${Date.now()}`, status: 'succeeded' };
  }
  // TODO: Requires STRIPE_SECRET_KEY
  throw new Error('Service not configured - add API key');
}
