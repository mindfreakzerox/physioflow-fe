import { bookingSignals, weeklyAvailability } from '../lib/mock-data';

export function AvailabilityGlance() {
  return (
    <div className="availability">
      <div className="availability-grid">
        {weeklyAvailability.map((day) => {
          const utilization = Math.min(100, Math.round((day.booked / day.slots) * 100));
          return (
            <div key={day.day} className="availability-card">
              <div className="availability-top">
                <div className="day-label">{day.day}</div>
                <span className="pill ghost">{day.open}–{day.close}</span>
              </div>
              <div className="bar">
                <span className="bar-fill" style={{ width: `${utilization}%` }} />
              </div>
              <div className="availability-meta">
                <span>{day.booked}/{day.slots} booked</span>
                <span className="muted small">{day.holds ? `${day.holds} hold slot` : 'Buffers on'}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="callout" style={{ marginTop: '10px' }}>
        <div className="callout-title">Booking signals</div>
        <div className="mini-list">
          {bookingSignals.map((signal) => (
            <div key={signal.id} className="mini-row" style={{ alignItems: 'center' }}>
              <span className="mini-title">{signal.label}</span>
              <div className="mini-row" style={{ gap: '8px', justifyContent: 'flex-end' }}>
                <span className="pill info">{signal.status}</span>
                {signal.note && <span className="muted small">{signal.note}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
