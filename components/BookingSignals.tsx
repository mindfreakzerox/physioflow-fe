import { bookingSignals } from '../lib/mock-data';

export function BookingSignals() {
  return (
    <div className="signals">
      <div className="card-header" style={{ marginBottom: '4px' }}>
        <h2>Booking guardrails</h2>
        <span className="pill ghost">Static</span>
      </div>
      <p className="muted small">Waitlist, buffers, and overbook prevention shown as mock signals for export.</p>
      <div className="signals-list">
        {bookingSignals.map((signal) => (
          <div key={signal.id} className="signal-row">
            <div>
              <div className="signal-title">{signal.label}</div>
              <p className="muted small">{signal.note}</p>
            </div>
            <span className="pill info">{signal.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
