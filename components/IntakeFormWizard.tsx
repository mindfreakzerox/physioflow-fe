'use client';

import { useState } from 'react';

const steps = ['Patient details', 'Concerns & goals', 'Consent & reminders'];

type IntakeState = {
  name: string;
  email: string;
  date: string;
  concern: string;
  goals: string;
  consent: boolean;
  reminders: 'email' | 'sms' | 'both';
};

const initialState: IntakeState = {
  name: '',
  email: '',
  date: '',
  concern: '',
  goals: '',
  consent: true,
  reminders: 'both'
};

export function IntakeFormWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<IntakeState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const onPrev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const setField = (key: keyof IntakeState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="stack" style={{ gap: '12px' }}>
      <div className="card-header" style={{ padding: 0 }}>
        <h2 style={{ margin: 0 }}>Patient intake</h2>
        <span className="pill">Mock workflow</span>
      </div>
      <p className="muted" style={{ margin: 0 }}>
        Collect what you need before the visit: demographics, goals, and consent preferences. This runs in mock mode
        and does not store PHI; wire to your API when ready.
      </p>

      <div className="pill-row" style={{ gap: '6px', flexWrap: 'wrap' }}>
        {steps.map((label, idx) => (
          <span
            key={label}
            className="pill"
            style={{
              background: idx === step ? '#ecfeff' : '#f3f4f6',
              color: idx === step ? '#0d9488' : '#374151'
            }}
          >
            {idx + 1}. {label}
          </span>
        ))}
      </div>

      <form className="stack" style={{ gap: '12px' }} onSubmit={onSubmit}>
        {step === 0 && (
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <Field label="Full name" value={form.name} onChange={(v) => setField('name', v)} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setField('email', v)} required />
            <Field label="Preferred date" type="date" value={form.date} onChange={(v) => setField('date', v)} />
          </div>
        )}

        {step === 1 && (
          <div className="stack" style={{ gap: '10px' }}>
            <Field label="Primary concern" textarea value={form.concern} onChange={(v) => setField('concern', v)} required />
            <Field label="Goals" textarea value={form.goals} onChange={(v) => setField('goals', v)} />
          </div>
        )}

        {step === 2 && (
          <div className="stack" style={{ gap: '10px' }}>
            <div className="row" style={{ gap: '12px', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setField('consent', e.target.checked)}
                id="consent"
              />
              <label htmlFor="consent">I consent to treatment and telehealth (mock acknowledgement)</label>
            </div>
            <div className="stack" style={{ gap: '6px' }}>
              <span className="muted">Reminder preference</span>
              <div className="row" style={{ gap: '8px', flexWrap: 'wrap' }}>
                {(
                  [
                    { value: 'email', label: 'Email only' },
                    { value: 'sms', label: 'SMS only' },
                    { value: 'both', label: 'Email + SMS' }
                  ] as const
                ).map((opt) => (
                  <label key={opt.value} className="pill" style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="reminders"
                      value={opt.value}
                      checked={form.reminders === opt.value}
                      onChange={() => setField('reminders', opt.value)}
                      style={{ marginRight: '6px' }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="row" style={{ justifyContent: 'space-between' }}>
          <button type="button" className="button ghost" onClick={onPrev} disabled={step === 0}>
            Back
          </button>
          {step < steps.length - 1 ? (
            <button type="button" className="button" onClick={onNext}>
              Continue
            </button>
          ) : (
            <button type="submit" className="button" disabled={submitted}>
              {submitted ? 'Submitted (mock)' : 'Submit intake'}
            </button>
          )}
        </div>
      </form>

      {submitted && (
        <div className="pill-row" style={{ background: '#ecfdf3', border: '1px solid #bbf7d0' }}>
          <div>
            <strong>Captured intake (mock)</strong>
            <p className="muted" style={{ margin: 0 }}>
              {form.name || 'Patient'} · {form.email || 'No email'} · {form.reminders.toUpperCase()} reminders · Consent:{' '}
              {form.consent ? 'Yes' : 'No'}
            </p>
          </div>
          <button className="button ghost" onClick={() => setForm(initialState)}>
            Reset form
          </button>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  textarea,
  required
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <label className="stack" style={{ gap: '4px', fontWeight: 500 }}>
      <span className="muted" style={{ fontWeight: 500 }}>
        {label}
        {required ? ' *' : ''}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '10px',
            width: '100%'
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '10px',
            width: '100%'
          }}
        />
      )}
    </label>
  );
}
