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
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 md:gap-4">
        <div className="flex flex-1 items-center gap-3 md:flex-none">
          <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight text-gray-900">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: 'var(--accent)', boxShadow: '0 0 0 6px rgba(13, 148, 136, 0.12)' }}
              aria-hidden
            />
            PhysioFlow
          </Link>
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 shadow-sm md:text-sm">
            Mock mode
          </span>
        </div>

        <nav className="hidden flex-1 md:flex md:justify-center">
          <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-2 py-1 text-sm text-gray-700 shadow-[0_8px_24px_rgba(31,41,55,0.08)]">
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

        <div className="hidden items-center gap-2 text-sm md:flex">
          <Link className="rounded-full border border-gray-200 px-3 py-1.5 text-gray-800 shadow-sm hover:bg-gray-50" href="/login">Login</Link>
          <Link className="rounded-full bg-teal-600 px-3.5 py-1.5 font-semibold text-white shadow-sm hover:bg-teal-700" href="/dashboard">Try mock</Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link className="rounded-full bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700" href="/dashboard">
            Try mock
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className={`h-0.5 w-5 rounded-full bg-gray-900 transition-transform duration-200 ${
                    open && line === 0 ? 'translate-y-[7px] rotate-45' : ''
                  } ${open && line === 1 ? 'opacity-0' : ''} ${open && line === 2 ? '-translate-y-[7px] -rotate-45' : ''}`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'} fixed inset-0 z-20 transition-[opacity,backdrop-filter] duration-200 ${
          open ? 'bg-gray-900/40 backdrop-blur-sm opacity-100' : 'opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <aside
        className={`md:hidden fixed right-0 top-0 z-30 flex h-full w-80 max-w-[84vw] transform flex-col border-l border-gray-200 bg-white shadow-2xl transition-transform duration-200 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2 text-base font-black tracking-tight text-gray-900">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: 'var(--accent)', boxShadow: '0 0 0 6px rgba(13, 148, 136, 0.12)' }}
              aria-hidden
            />
            PhysioFlow
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm"
            aria-label="Close navigation menu"
          >
            <span className="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                className={`flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold transition ${
                  active
                    ? 'bg-teal-50 text-teal-800 shadow-[0_10px_32px_rgba(13,148,136,0.16)]'
                    : 'hover:bg-gray-50 text-gray-800'
                }`}
                href={link.href}
              >
                {link.label}
                {active && <span className="text-xs font-semibold text-teal-700">Active</span>}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 px-4 py-5">
          <span className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 shadow-sm">
            Mock mode enforced
          </span>
          <Link className="w-full rounded-full bg-teal-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-700" href="/dashboard">
            Try mock dashboard
          </Link>
          <Link className="w-full rounded-full border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50" href="/login">
            Login
          </Link>
          <Link className="w-full rounded-full border border-teal-100 bg-teal-50 px-4 py-3 text-center text-sm font-semibold text-teal-800 shadow-sm hover:bg-teal-100" href="/book/physioflow-demo">
            Book a visit
          </Link>
        </div>
      </aside>
    </header>
  );
}
