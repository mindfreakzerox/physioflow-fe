"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/schedule', label: 'Schedule' },
  { href: '/dashboard/patients', label: 'Patients' },
  { href: '/dashboard/billing', label: 'Billing' },
  { href: '/dashboard/settings', label: 'Settings' }
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-full max-w-xs shrink-0 space-y-3 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-[0_12px_32px_rgba(31,41,55,0.08)]">
      <div className="text-sm font-semibold text-gray-900">Clinic nav</div>
      <nav className="flex flex-col gap-1 text-sm">
        {links.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              className={`flex items-center rounded-xl px-3 py-2 transition-colors ${
                active
                  ? 'bg-teal-50 text-teal-800 font-semibold border border-teal-100'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
