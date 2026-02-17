import { config } from '@/lib/config';
import { calendarEvents } from '@/lib/mock-data';

export async function listAppointments() {
  if (config.useMockMode) {
    return calendarEvents;
  }
  // TODO: Requires calendar sync provider
  throw new Error('Service not configured - add API key');
}
