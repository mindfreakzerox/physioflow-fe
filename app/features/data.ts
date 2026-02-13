import { FeatureDetailPage } from '../../components/FeatureDetailPage';

type FeatureDetail = {
  title: string;
  lede: string;
  sections: { title: string; points: string[] }[];
};

export const featureDetails: Record<string, FeatureDetail> = {
  'online-booking': {
    title: 'Online Booking',
    lede: '24/7 patient self-booking with buffers, rooms, and services. Ready to add payments later.',
    sections: [
      {
        title: 'Patient experience',
        points: [
          'Mobile-friendly booking with service/therapist selection',
          'Buffer/room-aware slots to avoid conflicts',
          'Confirmations and reminder hooks (email/SMS later)'
        ]
      },
      {
        title: 'Clinic controls',
        points: [
          'Per-therapist availability and blackout dates',
          'Booking policies (lead time, cancellation windows)',
          'Reserve-with-Google style entry point (stubbed)'
        ]
      }
    ]
  },
  scheduling: {
    title: 'Scheduling',
    lede: 'Day/week/month views for multi-practitioner calendars with quick reschedule/cancel.',
    sections: [
      {
        title: 'Calendar tools',
        points: [
          'Multi-view calendar with filters (therapist, room, location)',
          'Drag-and-drop style reschedule (mocked) and fast cancel',
          'Waitlist placeholders to backfill cancellations'
        ]
      },
      {
        title: 'Operational controls',
        points: [
          'Buffers between sessions',
          'Room/resource awareness',
          'Status indicators: scheduled, arrived, completed'
        ]
      }
    ]
  },
  documentation: {
    title: 'Documentation',
    lede: 'Treatment notes and intake basics with templates. File uploads planned for Phase 2.',
    sections: [
      {
        title: 'Notes & forms',
        points: [
          'Subjective/objective/plan note structure',
          'Intake form placeholders with customizable fields',
          'Template-friendly layout for SOAP-style charting'
        ]
      },
      {
        title: 'Storage roadmap',
        points: [
          'File upload slots stubbed for Phase 2',
          'Encryption and regional storage noted in trust copy',
          'Audit trail/logging to be added with real auth'
        ]
      }
    ]
  },
  telehealth: {
    title: 'Telehealth',
    lede: 'Embed Daily/Twilio when keys are provided. Mock join links included for hybrid care.',
    sections: [
      {
        title: 'Session experience',
        points: [
          'Join/start placeholders with status pills',
          'Group telehealth up to 12 clients noted as roadmap',
          'Pre-call checklist placeholder (device check, consent)'
        ]
      },
      {
        title: 'Integration plan',
        points: [
          'Drop-in provider keys when ready (no refactor needed)',
          'Optional recording/notes linkage after session',
          'Scheduling-aware links to avoid overlap'
        ]
      }
    ]
  },
  payments: {
    title: 'Payments',
    lede: 'Stripe wiring deferred; UI ready for invoices, receipts, and statuses.',
    sections: [
      {
        title: 'Patient payments',
        points: [
          'Invoice layout with line items/discounts/taxes',
          'Payment status badges (paid/unpaid/partial)',
          'Email/SMS receipt hooks planned (SendGrid/Twilio)'
        ]
      },
      {
        title: 'Clinic subscriptions',
        points: [
          'UI for plan selection and renewal reminders',
          'Stripe Checkout integration stubbed for later',
          'MRR/active subscriptions surfaced in admin dashboards'
        ]
      }
    ]
  },
  'billing-and-insurance': {
    title: 'Billing & Insurance',
    lede: 'Line items, discounts, and claims-ready structure; hook insurers later.',
    sections: [
      {
        title: 'Visit billing',
        points: [
          'CPT/code-style line items (mocked)',
          'Discounts, packages, and memberships placeholders',
          'Receipts ready for export/email'
        ]
      },
      {
        title: 'Insurance readiness',
        points: [
          'Eligibility/claim submission hooks (not wired)',
          'Payer metadata fields included for future integrations',
          'Ledger-style history of claims/payments (mocked)'
        ]
      }
    ]
  },
  reporting: {
    title: 'Reporting',
    lede: 'At-a-glance appointments, utilization, revenue placeholders, and upcoming bookings.',
    sections: [
      {
        title: 'Clinic admin dashboard',
        points: [
          'Total appointments and utilization metrics',
          'Revenue summaries (mocked until Stripe is added)',
          'Upcoming bookings and cancellations overview'
        ]
      },
      {
        title: 'Super admin dashboard',
        points: [
          'Total clinics onboarded',
          'Active subscriptions and MRR placeholders',
          'Engagement indicators for clinics and patients'
        ]
      }
    ]
  },
};

// Helper to render inside app/features/[slug]/page.tsx
export function renderFeatureDetail(slug: string) {
  const detail = featureDetails[slug];
  if (!detail) return null;
  return <FeatureDetailPage {...detail} />;
}
