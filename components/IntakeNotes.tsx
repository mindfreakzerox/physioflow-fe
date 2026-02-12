'use client';

import { mockPatients } from '../lib/mock-data';

export function IntakeNotes() {
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
          <span>Visit type</span>
          <select defaultValue="Follow-up">
            <option>Initial consult</option>
            <option>Follow-up</option>
            <option>Telehealth</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>Subjective</span>
        <textarea rows={2} placeholder="Patient-reported status" />
      </label>
      <label className="form-field">
        <span>Objective</span>
        <textarea rows={2} placeholder="Findings, measurements" />
      </label>
      <label className="form-field">
        <span>Plan</span>
        <textarea rows={2} placeholder="Next steps, home exercise" />
      </label>
      <div className="form-grid">
        <label className="form-checkbox">
          <input type="checkbox" defaultChecked /> <span>Share with patient portal (mock)</span>
        </label>
        <label className="form-checkbox">
          <input type="checkbox" /> <span>Mark as billable note</span>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn">Save note (mock)</button>
        <button type="button" className="btn ghost">Discard</button>
      </div>
      <p className="muted small">Demo only: no storage; wired for future portal + billing flags.</p>
    </form>
  );
}
