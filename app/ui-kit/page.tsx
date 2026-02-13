import Link from 'next/link';

export const dynamic = 'force-static';

const palette = [
  { name: 'Primary', token: 'var(--accent)', swatch: '#0ea5e9', note: 'Buttons, links, accents' },
  { name: 'Secondary', token: 'var(--accent-2)', swatch: '#22c55e', note: 'Success, confirmation' },
  { name: 'Surface', token: 'var(--card)', swatch: '#ffffff', note: 'Cards, panels' },
  { name: 'Border', token: 'var(--border)', swatch: '#e2e8f0', note: 'Dividers, outlines' },
  { name: 'Text', token: 'var(--text)', swatch: '#0f172a', note: 'Headings, body' },
  { name: 'Muted', token: 'var(--muted)', swatch: '#4b5563', note: 'Secondary text' }
];

export default function UiKitPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Design system</p>
        <h1>UI kit & tokens</h1>
        <p className="lede">Re-usable palette, buttons, pills, and card patterns used across dashboard and portal mocks.</p>

        <div className="card" style={{ marginTop: '16px' }}>
          <div className="card-header">
            <h2>Palette</h2>
            <span className="pill ghost">CSS variables</span>
          </div>
          <div className="token-grid">
            {palette.map((item) => (
              <div key={item.name} className="token-card">
                <div className="swatch" style={{ background: item.swatch }} />
                <div>
                  <div className="token-name">{item.name}</div>
                  <div className="muted small">{item.token}</div>
                  <div className="muted small">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid" style={{ marginTop: '16px' }}>
          <div className="card">
            <div className="card-header">
              <h3>Buttons</h3>
              <span className="pill ghost">Action styles</span>
            </div>
            <div className="stack">
              <div className="stack-row">
                <a className="btn" href="#">Primary</a>
                <a className="btn ghost" href="#">Ghost</a>
                <a className="btn subtle" href="#">Subtle</a>
              </div>
              <div className="stack-row">
                <span className="badge info">Info</span>
                <span className="badge success">Success</span>
                <span className="badge warning">Warning</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Pills & chips</h3>
              <span className="pill ghost">Status</span>
            </div>
            <div className="stack">
              <div className="chip-row">
                <span className="pill todo">Todo</span>
                <span className="pill doing">In progress</span>
                <span className="pill done">Done</span>
                <span className="pill ghost">Ghost</span>
              </div>
              <div className="chip-row">
                <span className="chip info">Live</span>
                <span className="chip success">Green</span>
                <span className="chip warning">Attention</span>
                <span className="chip ghost">Muted</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '16px' }}>
          <div className="card-header">
            <h3>Cards & layout</h3>
            <span className="pill ghost">Patterns</span>
          </div>
          <div className="stack">
            <div className="stack-row">
              <div className="sample-card">
                <div className="sample-top">
                  <span className="pill info">Demo</span>
                  <span className="pill ghost">Static</span>
                </div>
                <div className="sample-body">
                  <div className="sample-title">Card shell</div>
                  <p className="muted small">Use for dashboard widgets, portal blocks, and feature previews.</p>
                </div>
              </div>
              <div className="sample-card">
                <div className="sample-top">
                  <span className="pill success">Stable</span>
                </div>
                <div className="sample-body">
                  <div className="sample-title">List rows</div>
                  <p className="muted small">List spacing, muted text, badge usage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '16px' }}>
          <div className="card-header">
            <h3>Typography & spacing</h3>
            <span className="pill ghost">Scale</span>
          </div>
          <ul className="mini-list">
            <li className="mini-row"><span className="mini-title">Headings</span><span className="muted small">H1 34 / H2 24 / H3 18 — semi-bold</span></li>
            <li className="mini-row"><span className="mini-title">Body</span><span className="muted small">14–16px, 1.5 line height, muted secondary</span></li>
            <li className="mini-row"><span className="mini-title">Spacing</span><span className="muted small">4 / 8 / 12 / 16 / 24 step for padding + grid gutters</span></li>
            <li className="mini-row"><span className="mini-title">Radius</span><span className="muted small">var(--radius) = 12px, var(--radius-lg) = 14px</span></li>
            <li className="mini-row"><span className="mini-title">Shadow</span><span className="muted small">var(--shadow) for cards and CTAs only</span></li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: '16px' }}>
          <div className="card-header">
            <h3>Surface + states</h3>
            <span className="pill ghost">Consistency</span>
          </div>
          <div className="stack">
            <div className="stack-row">
              <span className="badge scheduled">Scheduled</span>
              <span className="badge checked-in">Arrived</span>
              <span className="badge completed">Completed</span>
              <span className="badge warning">Alert</span>
            </div>
            <p className="muted small">Use badges for status, pills for filters, chips for toggles (as on the calendar view switcher). Inputs share the white surface with a subtle inset shadow.</p>
          </div>
        </div>

        <div className="card" style={{ marginTop: '16px' }}>
          <div className="card-header">
            <h3>Usage</h3>
            <span className="pill ghost">Docs</span>
          </div>
          <p className="muted">Components pull tokens from <code>styles/globals.css</code>. Keep dashboard, portal, and landing in sync by reusing the <strong>btn</strong>, <strong>pill</strong>, and <strong>card</strong> primitives.</p>
          <p className="muted">See the live dashboard for applied examples.</p>
          <div className="chip-row" style={{ marginTop: '8px' }}>
            <Link className="btn" href="/dashboard">View dashboard</Link>
            <Link className="btn ghost" href="/">Back home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
