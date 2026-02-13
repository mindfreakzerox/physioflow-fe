import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhysioFlow',
  description: 'PhysioFlow practice management in mock mode—scheduling, notes, billing, and telehealth ready to wire later.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
