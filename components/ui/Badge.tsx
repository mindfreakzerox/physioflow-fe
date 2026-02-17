import React from 'react';

export type BadgeProps = {
  children: React.ReactNode;
  tone?: 'info' | 'success' | 'warning' | 'neutral';
  className?: string;
};

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
    neutral: 'bg-gray-100 text-gray-800 border border-gray-200',
    info: 'bg-teal-50 text-teal-800 border border-teal-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200'
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]} ${className ?? ''}`}>{children}</span>;
}
