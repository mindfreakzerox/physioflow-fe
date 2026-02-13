import '../styles/globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhysioFlow',
  description: 'PhysioFlow practice management in mock mode—scheduling, notes, billing, and telehealth ready to wire later.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topnav">
          <div className="container nav-inner">
            <Link className="brand" href="/">PhysioFlow</Link>
            <nav className="nav-links">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/portal">Patient portal</Link>
            </nav>
            <div className="nav-actions">
              <Link className="chip ghost" href="/(auth)/login">Login</Link>
              <Link className="chip info" href="/dashboard">Try demo</Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
