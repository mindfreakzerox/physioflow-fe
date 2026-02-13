'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { portalPreview } from '../lib/mock-data';

export function PortalPreview() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [dob, setDob] = useState('');

  const handleUnlock = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUnlocked(true);
  };

  const reset = () => {
    setUnlocked(false);
    setCode('');
    setDob('');
  };

  return (
    <div className="portal">
      <div className="card portal-hero">
        <div className="portal-hero-text">
          <p className="eyebrow">Patient portal preview</p>
          <h2>Read-only mock with simple access gate</h2>
          <p className="muted">
            No backend or PHI. Unlock just toggles the preview state so you can demo the flow without
            connecting auth or storage.
          </p>
          <div className="actions">
            <Link className="btn" href="/dashboard">Back to dashboard</Link>
            <span className={`pill ${unlocked ? 'success' : 'warning'}`}>
              {unlocked ? 'Unlocked (mock only)' : 'Locked for patients'}
            </span>
          </div>
        </div>
        <div className="portal-meta">
          <div className="meta-box">
            <div className="label">Patient</div>
            <div className="value">{portalPreview.patientName}</div>
            <div className="muted small">{portalPreview.patientEmail}</div>
          </div>
          <div className="meta-box">
            <div className="label">Next visit</div>
            <div className="value">{portalPreview.nextVisit.date}</div>
            <div className="muted small">{portalPreview.nextVisit.reason}</div>
          </div>
          <div className="meta-box">
            <div className="label">Mode</div>
            <div className="value">{portalPreview.nextVisit.mode}</div>
            <div className="muted small">{portalPreview.nextVisit.location}</div>
          </div>
        </div>
      </div>

      <div className="portal-grid">
        <div className="card">
          <div className="card-header">
            <h3>Patient view</h3>
            <span className={`pill ${unlocked ? 'success' : 'info'}`}>
              {unlocked ? 'Access granted (mock)' : 'Preview mode'}
            </span>
          </div>

          <div className="portal-section">
            <div className="portal-row">
              <div>
                <div className="label">Upcoming</div>
                <div className="value">{portalPreview.nextVisit.date}</div>
                <div className="muted small">{portalPreview.nextVisit.clinician} • {portalPreview.nextVisit.mode}</div>
              </div>
              <div className="pill ghost">{portalPreview.nextVisit.location}</div>
            </div>

            <div className="portal-block">
              <div className="block-title">Exercises</div>
              <ul className="mini-list">
                {portalPreview.exercises.map((ex) => (
                  <li key={ex.name} className="mini-row">
                    <div className="mini-title">{ex.name}</div>
                    <div className="muted small">{ex.dosage} — {ex.note}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="portal-block">
              <div className="block-title">Messages</div>
              <ul className="mini-list">
                {portalPreview.messages.map((m, idx) => (
                  <li key={idx} className="mini-row">
                    <div className="mini-title">{m.from}</div>
                    <div className="muted small">{m.time}</div>
                    <div>{m.text}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="portal-block">
              <div className="block-title">Shared files</div>
              <ul className="mini-list">
                {portalPreview.documents.map((doc) => (
                  <li key={doc.title} className="mini-row">
                    <div className="mini-title">{doc.title}</div>
                    <div className="muted small">{doc.note || 'Ready in portal'}</div>
                    <span className={`pill ${doc.status === 'shared' ? 'success' : 'info'}`}>
                      {doc.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="portal-block">
              <div className="block-title">Checklist</div>
              <ul className="mini-list">
                {portalPreview.checklist.map((item) => (
                  <li key={item} className="mini-row">
                    <span className="pill success">Ready</span>
                    <div className="mini-title">{item}</div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="muted small">This page is static and exports cleanly. Unlock just toggles local UI state.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Access control (mock)</h3>
            <span className="pill">Demo only</span>
          </div>

          <form className="form" onSubmit={handleUnlock}>
            <label className="form-field">
              <span>Access code</span>
              <input
                type="text"
                placeholder={portalPreview.accessCode}
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <small className="muted">Accepts any value; nothing is stored.</small>
            </label>
            <label className="form-field">
              <span>Date of birth</span>
              <input
                type="text"
                placeholder={portalPreview.birthDate}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <small className="muted">Simulates a second factor (no validation).</small>
            </label>
            <label className="form-checkbox">
              <input type="checkbox" defaultChecked /> <span>Share telehealth join link (mock)</span>
            </label>
            <div className="form-actions">
              <button type="submit" className="btn">Unlock portal (mock)</button>
              <button type="button" className="btn ghost" onClick={reset}>Relock</button>
            </div>
          </form>

          <div className="callout">
            <div className="callout-title">Implementation notes</div>
            <p className="muted small">Wire to real auth later (Clerk/Auth.js/etc). Current state is fully static for GH Pages export.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
