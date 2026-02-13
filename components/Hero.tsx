import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow">Built for physiotherapy clinics</p>
          <h1>Practice management like Jane—appointments, notes, and billing in one place.</h1>
          <p className="lede">
            Online booking, therapist schedules, patient notes, and ready-to-wire payments. No API keys
            required for this mock—plug in Stripe, SendGrid, and auth when you&apos;re ready.
          </p>
          <div className="actions">
            <Link className="btn" href="/dashboard">Book a demo</Link>
            <Link className="btn ghost" href="/portal">Patient portal</Link>
            <Link className="btn ghost" href="#features">See features</Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-header">
            <div>
              <div className="pill">Today</div>
              <h3>Clinic at a glance</h3>
            </div>
            <div className="pill success">98% show rate</div>
          </div>
          <ul>
            <li><span>09:00</span> Initial consult — Alex Kim</li>
            <li><span>11:00</span> Follow-up — Priya Nair</li>
            <li><span>14:00</span> Telehealth — Omar Rahman</li>
          </ul>
          <div className="hero-metrics">
            <div>
              <p className="label">Outstanding balance</p>
              <p className="value">$1,240</p>
            </div>
            <div>
              <p className="label">Arrivals</p>
              <p className="value">3/4</p>
            </div>
            <div>
              <p className="label">Waitlist</p>
              <p className="value">2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
