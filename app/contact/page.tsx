import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | PhysioFlow',
  description: 'Static contact options for the PhysioFlow mock app.'
};

export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container stack">
        <div className="card">
          <p className="eyebrow">Contact</p>
          <h1>Pick a path to reach us</h1>
          <p className="lede">These forms are static; wire them to your CRM, ticketing, or email provider later.</p>
          <div className="actions">
            <Link className="btn" href="/dashboard">Jump into the demo</Link>
            <Link className="btn ghost" href="/pricing">View pricing</Link>
          </div>
        </div>

        <div className="contact-grid">
          <div className="card">
            <div className="card-header">
              <h3>Book a call</h3>
              <span className="pill info">Mock</span>
            </div>
            <form className="form">
              <div className="form-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input type="text" placeholder="Alex Kim" />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input type="email" placeholder="alex@example.com" />
                </label>
              </div>
              <label className="form-field">
                <span>Clinic size</span>
                <select defaultValue="solo">
                  <option value="solo">Solo therapist</option>
                  <option value="team">Small team (3-10)</option>
                  <option value="multi">Multi-location</option>
                </select>
              </label>
              <label className="form-field">
                <span>What do you want to see?</span>
                <textarea rows={3} placeholder="Calendar, patient portal, billing, telehealth..." />
              </label>
              <div className="form-actions">
                <button type="button" className="btn">Send (mock)</button>
                <button type="button" className="btn ghost">Download one-pager</button>
              </div>
              <p className="muted small">Nothing is sent anywhere—this is static for GH Pages export.</p>
            </form>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Fast answers</h3>
              <span className="pill">No backend</span>
            </div>
            <div className="contact-meta">
              <div className="contact-inline"><span className="badge info">SLA</span><span className="muted">Same-day replies during business hours.</span></div>
              <div className="contact-inline"><span className="badge success">Demo</span><span className="muted">We can walk through dashboard + patient portal.</span></div>
              <div className="contact-inline"><span className="badge warning">Billing</span><span className="muted">Stripe hooks are stubbed—swap to your gateway.</span></div>
            </div>
            <div className="callout" style={{ marginTop: 10 }}>
              <div className="callout-title">What to expect</div>
              <p className="muted small">You&apos;ll get a calendar link, a checklist of what you want to see, and a shared summary doc after the call.</p>
            </div>
            <div className="actions" style={{ marginTop: 10 }}>
              <Link className="btn" href="/pricing">Compare plans</Link>
              <Link className="btn ghost" href="/portal">View patient portal</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Support</h3>
              <span className="pill warning">Mock only</span>
            </div>
            <ul className="mini-list">
              <li className="mini-row"><span className="mini-title">Status</span><span className="muted small">All services mocked; no outages.</span></li>
              <li className="mini-row"><span className="mini-title">Email</span><span className="muted small">support@physioflow.demo</span></li>
              <li className="mini-row"><span className="mini-title">Response</span><span className="muted small">Under 24h on weekdays</span></li>
            </ul>
            <p className="muted small">Replace with your real support channels. This stays export-friendly.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
