const features = [
  {
    title: 'Scheduling',
    description: 'Book, reschedule, and manage multi-practitioner calendars with buffers and rooms.'
  },
  {
    title: 'Billing-ready',
    description: 'Charge visits, add line items, and prep for insurance claims. Stripe-ready.'
  },
  {
    title: 'Telehealth',
    description: 'Drop in Daily/Twilio when you add keys. Mock links today.'
  },
  {
    title: 'Notes & Docs',
    description: 'Secure charting and file attachments. Storage placeholder is ready.'
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
