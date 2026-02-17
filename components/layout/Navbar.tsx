"use client";

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
    <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-4 sm:py-5 md:gap-5">
        <div className="flex flex-1 items-center gap-3 md:flex-none">
          <Link href="/" className="flex items-center gap-2 text-[17px] font-extrabold leading-none tracking-[-0.02em] text-gray-900">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: 'var(--accent)', boxShadow: '0 0 0 6px rgba(13, 148, 136, 0.12)' }}
              aria-hidden
            />
            PhysioFlow
          </Link>
          <span className="inline-flex items-center rounded-full bg-[#0D9488] px-3 py-1.5 text-[12.5px] font-semibold text-white shadow-sm ring-1 ring-[#0D9488]/20 md:text-[13px]">
            Mock mode
          </span>
        </div>

        <nav className="hidden flex-1 md:flex md:justify-center">
          <div className="flex items-center gap-2 rounded-[28px] border border-gray-200/70 bg-white/80 px-2.5 py-1.5 text-[14px] font-medium text-gray-800 shadow-[0_14px_38px_rgba(15,23,42,0.08)] backdrop-blur">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  className={`rounded-full px-3.5 py-1.75 text-[14px] leading-[1.2] transition-all ${
                    active
                      ? 'border border-[#0D9488]/25 bg-[#0D9488]/10 text-[#0D9488] shadow-[0_10px_30px_rgba(13,148,136,0.14)]'
                      : 'hover:bg-gray-50 hover:text-[#0D9488]'
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
          <Link className="rounded-full border border-gray-200/80 bg-white px-4 py-2.5 text-[14px] font-semibold leading-[1.2] text-gray-900 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition hover:-translate-y-[1px] hover:bg-gray-50" href="/login">
            Login
          </Link>
          <Link className="rounded-full bg-[#0D9488] px-4 py-2.5 text-[14px] font-semibold leading-[1.2] text-white shadow-[0_14px_32px_rgba(13,148,136,0.2)] transition hover:-translate-y-[1px] hover:bg-[#0b7f76]" href="/dashboard">
            Try mock
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link className="rounded-full bg-[#0D9488] px-3.5 py-1.75 text-[14px] font-semibold leading-[1.2] text-white shadow-[0_10px_22px_rgba(13,148,136,0.18)] hover:bg-[#0b7f76]" href="/dashboard">
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

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-[0_18px_38px_rgba(31,41,55,0.16)]">
          <div className="mx-auto max-w-6xl space-y-3 px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-semibold leading-[1.3] transition-colors ${
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

            <div className="flex flex-col gap-2 rounded-2xl bg-gray-50 px-3 py-3">
              <span className="inline-flex w-fit items-center rounded-full bg-[#0D9488] px-3 py-1.5 text-[12.5px] font-semibold text-white shadow-sm ring-1 ring-[#0D9488]/20">
                Mock mode enforced
              </span>
              <Link
                className="w-full rounded-full bg-teal-600 px-4 py-3 text-center text-[14px] font-semibold leading-[1.25] text-white shadow-[0_10px_22px_rgba(13,148,136,0.18)] hover:bg-teal-700"
                href="/dashboard"
              >
                Try mock dashboard
              </Link>
              <Link
                className="w-full rounded-full border border-gray-200 px-4 py-3 text-center text-[14px] font-semibold leading-[1.25] text-gray-900 shadow-sm hover:bg-gray-100"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="w-full rounded-full border border-teal-100 bg-teal-50 px-4 py-3 text-center text-[14px] font-semibold leading-[1.25] text-teal-800 shadow-sm hover:bg-teal-100"
                href="/book/physioflow-demo"
              >
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
