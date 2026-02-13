"use client";

import { useMemo, useState } from 'react';
import { calendarEvents } from '../lib/mock-data';

type View = 'day' | 'week' | 'month';

const statusCopy: Record<string, string> = {
  scheduled: 'On time',
  'checked-in': 'Arrived',
  completed: 'Completed',
  canceled: 'Canceled'
};

const viewCopy: Record<View, string> = {
  day: 'Today focus — buffers + holds visible',
  week: 'Mon–Wed snapshot with mocked reschedules',
  month: 'Rolling 4-week highlights for static export'
};

export function CalendarRibbon() {
  const [view, setView] = useState<View>('week');

  const visibleEvents = useMemo(() => {
    if (view === 'day') {
      return calendarEvents.filter((event) => event.day === 'Mon');
    }
    return calendarEvents;
  }, [view]);

  const rescheduleQueue = useMemo(
    () => calendarEvents.filter((event) => event.status === 'canceled' || event.note?.toLowerCase().includes('buffer')).slice(0, 3),
    []
  );

  return (
    <div className="calendar">
      <div className="calendar-head">
        <div>
          <p className="eyebrow">Calendar</p>
          <h3>{view === 'day' ? 'Today' : view === 'week' ? 'Week snapshot' : 'Month preview'}</h3>
          <p className="muted small">{viewCopy[view]}</p>
        </div>
        <div className="chip-row">
          <button type="button" className={`chip toggle ${view === 'day' ? 'active' : 'ghost'}`} onClick={() => setView('day')}>Day</button>
          <button type="button" className={`chip toggle ${view === 'week' ? 'active' : 'ghost'}`} onClick={() => setView('week')}>Week</button>
          <button type="button" className={`chip toggle ${view === 'month' ? 'active' : 'ghost'}`} onClick={() => setView('month')}>Month</button>
        </div>
      </div>

      <div className="calendar-controls">
        <div className="chip-row">
          <span className="pill warning">Reschedule: 1</span>
          <span className="pill info">Buffers on</span>
          <span className="pill ghost">Rooms: 3</span>
          <span className="pill ghost">Telehealth: on</span>
        </div>
        <div className="chip-row">
          <span className="chip info">Day/week/month wired</span>
          <span className="chip success">Overbook guard</span>
          <span className="chip warning">Waitlist held</span>
        </div>
      </div>

      <div className="calendar-ribbon">
        {visibleEvents.map((event) => (
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

      <div className="reschedule-queue">
        <div className="queue-head">
          <div>
            <p className="eyebrow">Reschedule / convert</p>
            <p className="muted small">Flagged items to move or flip to telehealth</p>
          </div>
          <span className="pill warning">{rescheduleQueue.length} flagged</span>
        </div>
        <div className="queue-list">
          {rescheduleQueue.map((event) => (
            <div key={event.id} className="queue-row">
              <div>
                <div className="queue-title">{event.patient}</div>
                <p className="muted small">{event.day} · {event.start}–{event.end} — {event.visit}</p>
              </div>
              <div className="queue-actions">
                <button type="button" className="btn ghost">Reschedule</button>
                <button type="button" className="btn subtle">Convert to telehealth</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
