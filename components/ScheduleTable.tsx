import type { Appointment } from '../lib/mock-data';

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
      {appointments.map((a) => (
        <div key={a.id} className="table-row">
          <div>{a.time}</div>
          <div>{a.patient}</div>
          <div>{a.kind}</div>
          <div>{a.location}</div>
          <div><span className={`status ${a.status}`}>{a.status}</span></div>
        </div>
      ))}
    </div>
  );
}
