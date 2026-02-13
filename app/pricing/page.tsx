import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | PhysioFlow',
  description: 'Simple pricing tiers with mock checkout ready to wire later.'
};

export const dynamic = 'force-static';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/mo',
    badge: 'Trial friendly',
    bullets: ['Single clinic, up to 3 staff', 'Patient portal + booking', 'Dashboard + calendar mock', 'Email reminders (mock copy)'],
    cta: 'Use the demo',
    href: '/dashboard'
  },
  {
    name: 'Growth',
    price: '$89',
    cadence: '/mo',
    badge: 'Most clinics',
    bullets: ['Unlimited staff + therapists', 'Billing & invoices (mock UI)', 'Telehealth readiness', 'Stripe/SendGrid hooks ready to connect'],
    cta: 'Schedule onboarding',
    href: '/contact'
  },
  {
    name: 'Scale',
    price: 'Let’s chat',
    cadence: '',
    badge: 'Multi-location',
    bullets: ['Multiple clinics + permissions', 'SLA + priority support', 'Data export + audit trail', 'Custom integrations (mock placeholders)'],
    cta: 'Talk to us',
    href: '/contact'
  }
];

export default function PricingPage() {
  return (
    <main className="section">
      <div className="container stack">
        <div className="card">
          <p className="eyebrow">Pricing</p>
          <h1>Pick a tier; connect real payments later</h1>
          <p className="lede">Static content only. Swap the CTA targets for your own checkout or CRM when ready.</p>
          <div className="actions">
            <Link className="btn" href="/contact">Ask a question</Link>
            <Link className="btn ghost" href="/dashboard">Open the live demo</Link>
          </div>
        </div>

        <div className="price-grid">
          {plans.map((plan) => (
            <div key={plan.name} className="price-card">
              <div className="price-head">
                <div>
                  <div className="eyebrow">{plan.badge}</div>
                  <h3>{plan.name}</h3>
                </div>
                <div>
                  <div className="price-tag">{plan.price}</div>
                  <div className="price-meta">{plan.cadence}</div>
                </div>
              </div>
              <ul className="price-list">
                {plan.bullets.map((item) => (
                  <li key={item}>
                    <span className="badge success" aria-hidden>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <Link className="btn" href={plan.href}>{plan.cta}</Link>
                <Link className="btn ghost" href="/contact">Questions? Contact</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-header">
            <h3>All tiers include</h3>
            <span className="pill info">Static export ready</span>
          </div>
          <ul className="mini-list">
            <li className="mini-row"><span className="mini-title">Responsive public site</span><span className="muted small">Home, features, pricing, contact</span></li>
            <li className="mini-row"><span className="mini-title">Dashboard mocks</span><span className="muted small">Scheduling, tasks, billing, telehealth placeholders</span></li>
            <li className="mini-row"><span className="mini-title">Patient portal preview</span><span className="muted small">Read-only, mock unlock flow</span></li>
            <li className="mini-row"><span className="mini-title">Static API samples</span><span className="muted small">/api/appointments.json for quick demos</span></li>
          </ul>
          <p className="muted small">Swap copy, add your own checkout, or wire to Stripe when ready. No external keys are used today.</p>
        </div>
      </div>
    </main>
  );
}
