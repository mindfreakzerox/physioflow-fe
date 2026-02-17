'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/book/physioflow-demo', label: 'Book' },
  { href: '/portal', label: 'Patient portal' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:gap-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-gray-900">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--accent)', boxShadow: '0 0 0 6px rgba(13, 148, 136, 0.12)' }}
            aria-hidden
          />
          PhysioFlow
        </Link>
        <nav className="w-full md:flex-1">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white/80 px-2 py-1 text-sm text-gray-700 shadow-[0_8px_24px_rgba(31,41,55,0.08)] md:flex-nowrap md:justify-center md:gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  className={`rounded-full px-3 py-1.5 transition-colors ${
                    active
                      ? 'border border-teal-100 bg-teal-50 text-teal-800 shadow-lg'
                      : 'hover:bg-teal-50 hover:text-teal-800'
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="flex w-full flex-wrap items-center gap-2 text-sm md:w-auto md:justify-end">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-800 shadow-sm">
            Mock mode
          </span>
          <Link className="rounded-full border border-gray-200 px-3 py-1.5 text-gray-800 shadow-sm hover:bg-gray-50" href="/login">Login</Link>
          <Link className="rounded-full bg-teal-600 px-3.5 py-1.5 font-semibold text-white shadow-sm hover:bg-teal-700" href="/dashboard">Try mock</Link>
        </div>
      </div>
    </header>
  );
}
