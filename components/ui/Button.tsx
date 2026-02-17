import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md';
};

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488] shadow-sm disabled:opacity-60 disabled:cursor-not-allowed';
  const sizes = size === 'sm' ? 'text-sm px-3.5 py-2' : 'text-sm px-4 py-2.5';
  const variants = {
    primary: 'bg-[#0D9488] text-white hover:bg-[#0b7f76] active:bg-[#0a6f67] border border-transparent',
    ghost: 'bg-white text-[#1F2937] border border-gray-200 hover:bg-gray-50',
    outline: 'bg-white text-[#0D9488] border border-[#0D9488]/30 hover:border-[#0D9488] hover:bg-[#0D9488]/5'
  } as const;
  return (
    <button className={cx(base, sizes, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
