import Link from 'next/link';
import { portalPreview } from '../lib/mock-data';

export function PortalSnapshot() {
  return (
    <div className="portal-snapshot">
      <div className="meta-grid">
        <div className="meta-box">
          <div className="label">Next visit</div>
          <div className="value">{portalPreview.nextVisit.date}</div>
          <div className="muted small">{portalPreview.nextVisit.mode} • {portalPreview.nextVisit.clinician}</div>
        </div>
        <div className="meta-box">
          <div className="label">Access code (mock)</div>
          <div className="value">{portalPreview.accessCode}</div>
          <div className="muted small">Rotates weekly (demo)</div>
        </div>
        <div className="meta-box">
          <div className="label">Shared docs</div>
          <div className="value">{portalPreview.documents.length}</div>
          <div className="muted small">Care plan + telehealth guide</div>
        </div>
      </div>

      <div className="portal-block">
        <div className="block-title">Exercises pushed</div>
        <ul className="mini-list">
          {portalPreview.exercises.slice(0, 2).map((ex) => (
            <li key={ex.name} className="mini-row">
              <div className="mini-title">{ex.name}</div>
              <div className="muted small">{ex.dosage}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="portal-actions">
        <Link className="btn ghost" href="/portal">Open portal preview</Link>
        <span className="pill info">SSR + static-export safe</span>
      </div>
    </div>
  );
}
