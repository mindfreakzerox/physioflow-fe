import Link from 'next/link';
import { Hero } from '../components/Hero';
import { FeatureGrid } from '../components/FeatureGrid';
import { CTA } from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <CTA />
      <section className="section muted">
        <div className="container">
          <div className="card">
            <h2>Dashboard Preview</h2>
            <p>See the mock practitioner view with schedule, patients, and tasks.</p>
            <Link className="btn" href="/dashboard">Go to Dashboard</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
