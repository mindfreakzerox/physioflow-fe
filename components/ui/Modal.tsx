import React from 'react';
import { Button } from './Button';

export type ModalProps = {
  title: string;
  description?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export function Modal({ title, description, open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-[0_20px_48px_rgba(31,41,55,0.16)]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-gray-900">{title}</h2>
            {description && <p className="text-sm text-gray-600">{description}</p>}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close modal">
            Close
          </Button>
        </div>
        <div className="space-y-3 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}
