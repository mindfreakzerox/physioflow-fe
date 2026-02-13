import { calendarEvents } from '../lib/mock-data';

const statusCopy: Record<string, string> = {
  scheduled: 'On time',
  'checked-in': 'Arrived',
  completed: 'Completed',
  canceled: 'Canceled'
};

export function CalendarRibbon() {
  return (
    <div className="calendar">
      <div className="calendar-head">
        <div>
          <p className="eyebrow">Calendar</p>
          <h3>Week snapshot</h3>
          <p className="muted small">Buffers/reschedules mocked for static export.</p>
        </div>
        <div className="chip-row">
          <span className="chip info">Day/week/month ready</span>
          <span className="chip ghost">Rooms: 3</span>
          <span className="chip ghost">Telehealth: on</span>
        </div>
      </div>
      <div className="calendar-ribbon">
        {calendarEvents.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-time">{event.day} · {event.start}–{event.end}</div>
            <div className="event-title">{event.patient}</div>
            <div className="event-subtitle">{event.visit} · {event.mode}</div>
            <div className="event-meta">
              <span className={`badge ${event.status}`}>{statusCopy[event.status]}</span>
              <span className="pill ghost">{event.therapist}</span>
              <span className="pill ghost">{event.room || 'Online'}</span>
            </div>
            {event.note && <p className="muted small">{event.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
