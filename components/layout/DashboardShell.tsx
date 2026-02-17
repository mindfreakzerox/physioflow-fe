import React from 'react';
import { Sidebar } from './Sidebar';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:flex-row">
      <Sidebar />
      <main className="flex-1 space-y-4">{children}</main>
    </div>
  );
}
