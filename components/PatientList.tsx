import type { Patient } from '../lib/mock-data';

export function PatientList({ patients }: { patients: Patient[] }) {
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
