const items = [
  { label: 'Compliance', value: 'HIPAA · PIPEDA · GDPR friendly' },
  { label: 'Data residency', value: 'Regional storage (US/CA/UK/AU modelled)' },
  { label: 'Availability', value: 'Web-based, works on any device' }
];

export function TrustStrip() {
  return (
    <section className="section muted">
      <div className="container trust">
        {items.map((item) => (
          <div key={item.label} className="trust-item">
            <p className="label">{item.label}</p>
            <p className="value">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
