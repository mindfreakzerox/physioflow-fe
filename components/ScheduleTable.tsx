import type { Appointment } from '../lib/mock-data';
import { EmptyState } from './EmptyState';

export function ScheduleTable({ appointments }: { appointments: Appointment[] }) {
  return (
    <div className="table">
      <div className="table-head">
        <div>Time</div>
        <div>Patient</div>
        <div>Type</div>
        <div>Location</div>
        <div>Status</div>
      </div>

      {!appointments?.length ? (
        <EmptyState
          title="No visits on the books"
          body="Share the booking link from /contact or drop patients into the portal — we keep the empty state visible so you can test export/static builds."
          primaryAction={{ label: 'Share booking link', href: '/contact' }}
          secondaryAction={{ label: 'View pricing', href: '/pricing', variant: 'ghost' }}
        />
      ) : (
        appointments.map((a) => (
          <div key={a.id} className="table-row">
            <div>{a.time}</div>
            <div>{a.patient}</div>
            <div>{a.kind}</div>
            <div>{a.location}</div>
            <div><span className={`status ${a.status}`}>{a.status}</span></div>
          </div>
        ))
      )}
    </div>
  );
}
