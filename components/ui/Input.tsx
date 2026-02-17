import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export function Input({ label, hint, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1.5 text-sm text-gray-700">
      {label && <span className="font-medium text-gray-900">{label}</span>}
      <input
        className={`rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_1px_2px_rgba(31,41,55,0.04)] focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-100 ${className ?? ''}`}
        {...props}
      />
      {hint && <span className="text-xs text-gray-500">{hint}</span>}
    </label>
  );
}
