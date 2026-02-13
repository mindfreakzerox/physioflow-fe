import Link from 'next/link';

export function CTA() {
  return (
    <section className="section muted">
      <div className="container cta">
        <div>
          <h2>Plug in your own stack when you&apos;re ready</h2>
          <p>Auth, payments, storage, and video are optional. Add keys later without refactoring.</p>
        </div>
        <div className="actions">
          <Link className="btn" href="/dashboard">Open dashboard</Link>
          <Link className="btn ghost" href="/portal">Preview patient view</Link>
          <Link className="btn ghost" href="/pricing">View pricing</Link>
          <Link className="btn ghost" href="/contact">Talk to us</Link>
          <Link className="btn ghost" href="/api/appointments.json">View mock API</Link>
        </div>
      </div>
    </section>
  );
}
