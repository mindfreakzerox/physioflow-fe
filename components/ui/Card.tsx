import React from 'react';

export type CardProps = {
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, actions, children, className }: CardProps) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-[20px] shadow-[0_20px_64px_rgba(15,23,42,0.06)] p-6 transition-transform duration-150 hover:-translate-y-[1px] ${
        className ?? ''
      }`}
    >
      {(title || actions) && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          {title ? <h3 className="text-[15px] font-semibold leading-[1.35] tracking-[-0.01em] text-gray-900">{title}</h3> : <div />}
          {actions}
        </div>
      )}
      <div className="space-y-3 text-[14.5px] leading-[1.65] text-gray-700">{children}</div>
    </div>
  );
}
