const items = [
  {
    title: 'Always available',
    body: 'Web-based, mobile-friendly, and no installs. Keep schedules, notes, and billing synced across locations.'
  },
  {
    title: 'Staff & owners',
    body: 'Real-time booking, buffers, rooms, and simple billing so admins spend less time on the phone.'
  },
  {
    title: 'Patients',
    body: 'Online booking, reminders, and easy check-in. A clean portal to see visits, notes, and receipts.'
  }
];

export function ValueProps() {
  return (
    <section className="section">
      <div className="container">
        <div className="value-grid">
          {items.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
