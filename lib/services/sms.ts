import { config } from '@/lib/config';

export async function sendSms({ to, message }: { to: string; message: string }) {
  if (config.useMockMode) {
    console.log('[mock-sms]', { to, message });
    return { success: true, id: `mock_sms_${Date.now()}` };
  }
  // TODO: Requires TWILIO_ACCOUNT_SID
  throw new Error('Service not configured - add API key');
}
