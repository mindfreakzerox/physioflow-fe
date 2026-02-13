const features = [
  {
    title: 'Online booking',
    description: '24/7 self-serve with buffers, rooms, and services. Ready to plug in payments later.'
  },
  {
    title: 'Scheduling',
    description: 'Day/week/month views, multi-practitioner calendars, quick reschedule and cancel.'
  },
  {
    title: 'Documentation',
    description: 'Treatment notes and intake basics with templates. File uploads planned for Phase 2.'
  },
  {
    title: 'Payments-ready',
    description: 'Stripe wiring deferred—UI for invoices, receipts, and statuses is in place.'
  },
  {
    title: 'Telehealth-ready',
    description: 'Embed Daily/Twilio when keys are provided. Mock join links included.'
  },
  {
    title: 'Reporting',
    description: 'Appointments, utilization, revenue placeholders, and upcoming bookings at a glance.'
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="grid">
          {features.map((f) => (
            <div key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
