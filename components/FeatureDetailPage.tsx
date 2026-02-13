import Link from 'next/link';

type Section = { title: string; points: string[] };

type Props = {
  title: string;
  lede: string;
  sections: Section[];
};

export function FeatureDetailPage({ title, lede, sections }: Props) {
  return (
    <main className="section">
      <div className="container">
        <div className="hero-inner" style={{ gap: '12px' }}>
          <div>
            <p className="eyebrow">Feature</p>
            <h1>{title}</h1>
            <p className="lede">{lede}</p>
            <div className="actions">
              <Link className="btn" href="/dashboard">Book a demo</Link>
              <Link className="btn ghost" href="/">Back to home</Link>
            </div>
          </div>
        </div>

        <div className="value-grid" style={{ marginTop: '20px' }}>
          {sections.map((section) => (
            <div key={section.title} className="card">
              <h3>{section.title}</h3>
              <ul className="mini-list">
                {section.points.map((point) => (
                  <li key={point} className="mini-row">
                    <span className="mini-title">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
