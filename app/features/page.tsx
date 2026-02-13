const features = [
  {
    slug: 'online-booking',
    title: 'Online Booking',
    excerpt: '24/7 patient self-booking with buffers, rooms, and services.',
  },
  {
    slug: 'scheduling',
    title: 'Scheduling',
    excerpt: 'Day/week/month views for multi-practitioner calendars with quick reschedule/cancel.',
  },
  {
    slug: 'documentation',
    title: 'Documentation',
    excerpt: 'Treatment notes and intake templates; file uploads planned for Phase 2.',
  },
  {
    slug: 'telehealth',
    title: 'Telehealth',
    excerpt: 'Embed Daily/Twilio later; mock join links today for hybrid care.',
  },
  {
    slug: 'payments',
    title: 'Payments',
    excerpt: 'Stripe wiring deferred; UI ready for invoices, receipts, and statuses.',
  },
  {
    slug: 'billing-and-insurance',
    title: 'Billing & Insurance',
    excerpt: 'Line items, discounts, and claims-ready structure; hook insurers later.',
  },
  {
    slug: 'reporting',
    title: 'Reporting',
    excerpt: 'At-a-glance appointments, utilization, revenue placeholders, and upcoming bookings.',
  },
];

export default function FeaturesPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="hero-inner" style={{ gap: '12px' }}>
          <div>
            <p className="eyebrow">Features</p>
            <h1>Everything you need to run a physio clinic with PhysioFlow.</h1>
            <p className="lede">Pick a feature to see the details.</p>
          </div>
        </div>
        <div className="grid" style={{ marginTop: '20px' }}>
          {features.map((f) => (
            <a key={f.slug} className="card feature-link" href={`/features/${f.slug}`}>
              <h3>{f.title}</h3>
              <p>{f.excerpt}</p>
              <span className="link">View details →</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
