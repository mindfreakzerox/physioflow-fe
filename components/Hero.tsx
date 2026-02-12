import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow">Jane-style clone (mock)</p>
          <h1>All-in-one scheduling, billing, and telehealth — ready to wire real APIs later.</h1>
          <p className="lede">
            Server-side rendered Next.js app with mock data. No API keys needed. Swap in auth,
            payments, and video when you&apos;re ready.
          </p>
          <div className="actions">
            <Link className="btn" href="/dashboard">View dashboard</Link>
            <Link className="btn ghost" href="#features">See features</Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="pill">Today</div>
          <h3>Upcoming Visits</h3>
          <ul>
            <li><span>09:00</span> • Initial consult — Alex Kim</li>
            <li><span>11:00</span> • Follow-up — Priya Nair</li>
            <li><span>14:00</span> • Telehealth — Omar Rahman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
