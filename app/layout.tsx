import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physiotherapy Scheduler',
  description: 'Jane-style scheduling platform (mock, SSR-first)'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
