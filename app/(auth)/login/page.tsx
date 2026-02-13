import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 420 }}>
        <p className="eyebrow">Sign in</p>
        <h1>PhysioFlow access</h1>
        <p className="lede">Use demo credentials: admin@physioflow.demo / demo123, etc.</p>
        <form className="form" method="post" action="/api/auth/callback/credentials">
          <div className="form-field">
            <label>Email</label>
            <input name="email" type="email" required />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input name="password" type="password" required />
          </div>
          <input type="hidden" name="csrfToken" value="" />
          <div className="form-actions">
            <button className="btn" type="submit">Sign in</button>
            <Link className="btn ghost" href="/">Back to home</Link>
          </div>
        </form>
        <div className="card" style={{ marginTop: 16 }}>
          <h3>Demo accounts</h3>
          <ul className="mini-list">
            <li className="mini-row"><span className="mini-title">admin@physioflow.demo</span><span className="muted small">demo123</span></li>
            <li className="mini-row"><span className="mini-title">dr.smith@physioflow.demo</span><span className="muted small">demo123</span></li>
            <li className="mini-row"><span className="mini-title">front@physioflow.demo</span><span className="muted small">demo123</span></li>
            <li className="mini-row"><span className="mini-title">patient@physioflow.demo</span><span className="muted small">demo123</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
