import Link from 'next/link';
import { Hero } from '../components/Hero';
import { Testimonial } from '../components/Testimonial';
import { ValueProps } from '../components/ValueProps';
import { FeatureGrid } from '../components/FeatureGrid';
import { CTA } from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Testimonial />
      <ValueProps />
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
