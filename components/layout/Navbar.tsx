import Link from 'next/link';
import React from 'react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-black tracking-tight text-gray-900">PhysioFlow</Link>
        <nav className="flex items-center gap-2 rounded-full bg-white/70 px-2 py-1 text-sm text-gray-700 shadow-[0_8px_24px_rgba(31,41,55,0.08)]">
          <Link className="rounded-full px-3 py-1.5 hover:bg-teal-50 hover:text-teal-800" href="/">Home</Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-teal-50 hover:text-teal-800" href="/dashboard">Dashboard</Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-teal-50 hover:text-teal-800" href="/book/physioflow-demo">Book</Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-teal-50 hover:text-teal-800" href="/portal">Patient portal</Link>
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <Link className="rounded-full border border-gray-200 px-3 py-1.5 text-gray-800 shadow-sm hover:bg-gray-50" href="/login">Login</Link>
          <Link className="rounded-full bg-teal-600 px-3.5 py-1.5 font-semibold text-white shadow-sm hover:bg-teal-700" href="/dashboard">Try mock</Link>
        </div>
      </div>
    </header>
  );
}
