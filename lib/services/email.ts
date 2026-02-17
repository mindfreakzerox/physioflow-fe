import { config } from '@/lib/config';

export type OutboundEmail = {
  to: string;
  subject: string;
  body: string;
};

const emailLog: OutboundEmail[] = [];

export function getEmailLog() {
  return emailLog;
}

export async function sendEmail(email: OutboundEmail) {
  if (config.useMockMode) {
    emailLog.push(email);
    console.log('[mock-email]', email);
    return { success: true, id: `mock_email_${Date.now()}` };
  }
  // TODO: Requires SENDGRID_API_KEY
  throw new Error('Service not configured - add API key');
}
