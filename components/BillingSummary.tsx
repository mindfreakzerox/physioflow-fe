import { ReactNode } from 'react';

type Line = { label: string; amount: string; note?: string };

const lines: Line[] = [
  { label: 'Initial consult (60 min)', amount: '$120', note: 'CPT 97161 (mock)' },
  { label: 'Therapeutic exercise', amount: '$40', note: 'CPT 97110 (mock)' },
  { label: 'Discount', amount: '-$20', note: 'Referral credit (mock)' }
];

function Row({ label, amount, note }: Line) {
  return (
    <div className="bill-row">
      <div>
        <div className="bill-label">{label}</div>
        {note && <div className="muted small">{note}</div>}
      </div>
      <div className="bill-amount">{amount}</div>
    </div>
  );
}

export function BillingSummary() {
  return (
    <div className="billing">
      <div className="bill-header">Mock billing (no payments wired)</div>
      <div className="bill-body">
        {lines.map((line) => (
          <Row key={line.label} {...line} />
        ))}
      </div>
      <div className="bill-footer">
        <div>Total</div>
        <div className="bill-amount">$140</div>
      </div>
      <div className="bill-actions">
        <button className="btn">Mark as paid (mock)</button>
        <button className="btn ghost">Send receipt (mock)</button>
      </div>
      <p className="muted small">Stripe/claims can be added later; currently static.</p>
    </div>
  );
}
