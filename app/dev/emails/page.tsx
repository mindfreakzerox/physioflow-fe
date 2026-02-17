import React from 'react';
import { getEmailLog } from '@/lib/services/email';
import { Card } from '@/components/ui/Card';

export const dynamic = 'force-dynamic';

export default function EmailDevPage() {
  const emails = getEmailLog();
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-4">
      <Card title="Mock email log">
        <p className="text-sm text-gray-600">Emails are stored in-memory and logged to the console.</p>
      </Card>
      <div className="space-y-3">
        {emails.length === 0 && <Card title="No emails yet">Trigger actions to send mock emails.</Card>}
        {emails.map((email, idx) => (
          <Card key={`${email.id ?? idx}`} title={email.subject}>
            <p className="text-sm text-gray-700">To: {email.to}</p>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{email.body}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
