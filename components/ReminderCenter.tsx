import { reminderRules } from '../lib/mock-data';

export function ReminderCenter() {
  return (
    <div className="stack" style={{ gap: '12px' }}>
      <div className="card-header" style={{ padding: 0 }}>
        <h2 style={{ margin: 0 }}>Reminders & outreach</h2>
        <span className="pill">Mock automations</span>
      </div>
      <p className="muted" style={{ margin: 0 }}>
        Prewired reminder cadences to cut no-shows and keep telehealth on-time. Toggle channels and see next send
        times. Real SMS/email wiring will plug in when keys are provided.
      </p>
      <div className="stack" style={{ gap: '10px' }}>
        {reminderRules.map((rule) => (
          <div key={rule.id} className="pill-row">
            <div>
              <div className="row" style={{ gap: '8px', alignItems: 'center' }}>
                <strong>{rule.label}</strong>
                <span className="pill" style={{ background: '#ecfeff', color: '#0d9488' }}>{rule.channel}</span>
                <span className="pill" style={{ background: '#f5f3ff', color: '#6b21a8' }}>{rule.cadence}</span>
                <span
                  className="pill"
                  style={{
                    background: rule.status === 'active' ? '#ecfdf3' : '#fef9c3',
                    color: rule.status === 'active' ? '#166534' : '#92400e'
                  }}
                >
                  {rule.status === 'active' ? 'Active' : 'Paused'}
                </span>
              </div>
              <p className="muted" style={{ margin: '4px 0' }}>
                Audience: {rule.audience} · Coverage: {rule.coverage} · Next send: {rule.nextSend}
              </p>
              {rule.guardrails && (
                <p className="muted" style={{ margin: 0 }}>
                  Guardrails: {rule.guardrails}
                </p>
              )}
            </div>
            <button className="button ghost" style={{ height: 'fit-content' }}>
              {rule.status === 'active' ? 'Pause' : 'Resume'}
            </button>
          </div>
        ))}
      </div>
      <div className="pill-row" style={{ justifyContent: 'space-between', background: '#f9fafb', border: '1px dashed #e5e7eb' }}>
        <div>
          <strong>Compliance-safe defaults</strong>
          <p className="muted" style={{ margin: 0 }}>Double opt-in planned; SMS caps and quiet hours ready to wire.</p>
        </div>
        <button className="button ghost">Send test (mock)</button>
      </div>
    </div>
  );
}
