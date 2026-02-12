'use client';

import { mockPatients } from '../lib/mock-data';

export function BookingForm() {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-grid">
        <label className="form-field">
          <span>Patient</span>
          <select defaultValue="">
            <option value="" disabled>Select patient</option>
            {mockPatients.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
        </label>
        <label className="form-field">
          <span>Type</span>
          <select defaultValue="Initial consult">
            <option>Initial consult</option>
            <option>Follow-up</option>
            <option>Manual therapy</option>
            <option>Telehealth</option>
          </select>
        </label>
        <label className="form-field">
          <span>Date</span>
          <input type="date" required />
        </label>
        <label className="form-field">
          <span>Start time</span>
          <input type="time" required />
        </label>
        <label className="form-field">
          <span>Duration (min)</span>
          <input type="number" min="15" max="120" step="15" defaultValue="60" />
        </label>
        <label className="form-field">
          <span>Buffer (min)</span>
          <input type="number" min="0" max="60" step="5" defaultValue="10" />
        </label>
      </div>
      <label className="form-field">
        <span>Notes</span>
        <textarea rows={2} placeholder="Optional note for front desk or therapist" />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn">Save draft (mock)</button>
        <button type="button" className="btn ghost">Clear</button>
      </div>
      <p className="muted small">Demo only: no backend calls. Buffers/recurrence mocked.</p>
    </form>
  );
}
