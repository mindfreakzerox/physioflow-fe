import '@/styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'PhysioFlow',
  description: 'PhysioFlow practice management in mock mode—scheduling, intake, billing, and patient portal for clinics.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
