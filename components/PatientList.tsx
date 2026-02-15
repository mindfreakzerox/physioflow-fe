import type { Patient } from '../lib/mock-data';
import { EmptyState } from './EmptyState';

export function PatientList({ patients }: { patients: Patient[] }) {
  if (!patients?.length) {
    return (
      <EmptyState
        title="No patients synced yet"
        body="Import a roster from your EMR or share the booking link so new patients land here automatically."
        primaryAction={{ label: 'Share booking link', href: '/contact' }}
        secondaryAction={{ label: 'See pricing', href: '/pricing', variant: 'ghost' }}
      />
    );
  }

  return (
    <ul className="list">
      {patients.map((p) => (
        <li key={p.id} className="list-item">
          <div>
            <strong>{p.name}</strong>
            <div className="muted">{p.email}</div>
          </div>
          <div className="muted">{p.lastVisit}</div>
        </li>
      ))}
    </ul>
  );
}
