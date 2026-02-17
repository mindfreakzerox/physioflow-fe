import React from 'react';

export type CardProps = {
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, actions, children, className }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl shadow-[0_12px_32px_rgba(31,41,55,0.08)] p-5 ${className ?? ''}`}>
      {(title || actions) && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          {title ? <h3 className="text-[15px] font-semibold leading-[1.35] tracking-[-0.01em] text-gray-900">{title}</h3> : <div />}
          {actions}
        </div>
      )}
      <div className="space-y-2.5 text-[14.5px] leading-[1.6] text-gray-700">{children}</div>
    </div>
  );
}
