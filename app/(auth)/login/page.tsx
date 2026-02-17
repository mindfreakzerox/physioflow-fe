"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

const creds = [
  { email: 'admin@physioflow.demo', role: 'Clinic Admin' },
  { email: 'dr.smith@physioflow.demo', role: 'Practitioner' },
  { email: 'front@physioflow.demo', role: 'Front Desk' },
  { email: 'patient@physioflow.demo', role: 'Patient Portal' }
];

export default function LoginPage() {
  const [email, setEmail] = useState(creds[0].email);
  const [password, setPassword] = useState('demo123');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/dashboard' });
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <Card title="Login">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          <Button type="submit">Sign in (mock)</Button>
        </form>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Mock credentials (password: demo123):</p>
          <ul className="list-disc pl-4">
            {creds.map((c) => (
              <li key={c.email}>{c.email} · {c.role}</li>
            ))}
          </ul>
        </div>
      </Card>
    </main>
  );
}
