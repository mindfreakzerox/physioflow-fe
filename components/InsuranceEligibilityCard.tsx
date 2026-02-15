import { insuranceEligibility } from '../lib/mock-data';

export function InsuranceEligibilityCard() {
  const notes = insuranceEligibility.notes ?? [];
  return (
    <div className="stack" style={{ gap: '12px' }}>
      <div className="card-header" style={{ padding: 0 }}>
        <h2 style={{ margin: 0 }}>Insurance & eligibility</h2>
        <span className="pill">Mock verification</span>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
        <Info label="Payer" value={insuranceEligibility.payer} />
        <Info label="Member ID" value={insuranceEligibility.memberId} />
        <Info label="Coverage" value={insuranceEligibility.coverage} />
        <Info label="Deductible remaining" value={insuranceEligibility.deductibleRemaining} />
        <Info label="Copay" value={insuranceEligibility.copay} />
        <Info label="Auth" value={insuranceEligibility.authRequired ? 'Required' : 'Not required'} />
        <Info label="Status" value={insuranceEligibility.status === 'verified' ? 'Verified' : 'Pending'} />
      </div>
      <div className="stack" style={{ gap: '6px' }}>
        <strong>Notes</strong>
        <ul className="muted" style={{ margin: 0, paddingLeft: '20px' }}>
          {notes.map((n, idx) => (
            <li key={idx}>{n}</li>
          ))}
        </ul>
      </div>
      <div className="pill-row" style={{ justifyContent: 'space-between', background: '#f9fafb', border: '1px dashed #e5e7eb' }}>
        <div>
          <strong>Claims-ready</strong>
          <p className="muted" style={{ margin: 0 }}>Mocked for demo; drop in clearinghouse API when ready.</p>
        </div>
        <button className="button ghost">Export summary</button>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="stack" style={{ gap: '2px' }}>
      <span className="muted" style={{ fontSize: '12px' }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
