export type Appointment = {
  id: string;
  time: string;
  patient: string;
  kind: string;
  location: string;
  status: 'scheduled' | 'checked-in' | 'completed';
};

export type Patient = {
  id: string;
  name: string;
  email: string;
  lastVisit: string;
};

export type Task = {
  id: string;
  title: string;
  status: 'todo' | 'doing' | 'done';
  due: string;
};

export type CalendarEvent = {
  id: string;
  day: string;
  start: string;
  end: string;
  patient: string;
  therapist: string;
  visit: string;
  mode: 'In person' | 'Telehealth';
  room?: string;
  status: 'scheduled' | 'checked-in' | 'completed' | 'canceled';
  note?: string;
};

export type AvailabilityDay = {
  day: string;
  open: string;
  close: string;
  booked: number;
  slots: number;
  holds?: number;
};

export type BookingSignal = {
  id: string;
  label: string;
  status: string;
  note?: string;
};

export const mockAppointments: Appointment[] = [
  { id: '1', time: '09:00', patient: 'Alex Kim', kind: 'Initial consult', location: 'Room 1', status: 'scheduled' },
  { id: '2', time: '11:00', patient: 'Priya Nair', kind: 'Follow-up', location: 'Room 2', status: 'checked-in' },
  { id: '3', time: '14:00', patient: 'Omar Rahman', kind: 'Telehealth', location: 'Online', status: 'scheduled' },
  { id: '4', time: '16:00', patient: 'Sam Lee', kind: 'Manual therapy', location: 'Room 3', status: 'completed' }
];

export const mockPatients: Patient[] = [
  { id: 'p1', name: 'Alex Kim', email: 'alex@example.com', lastVisit: 'Last visit: Today' },
  { id: 'p2', name: 'Priya Nair', email: 'priya@example.com', lastVisit: 'Last visit: Today' },
  { id: 'p3', name: 'Omar Rahman', email: 'omar@example.com', lastVisit: 'Last visit: Yesterday' },
  { id: 'p4', name: 'Sam Lee', email: 'sam@example.com', lastVisit: 'Last visit: 1 week ago' }
];

export const mockTasks: Task[] = [
  { id: 't1', title: 'Send exercise plan to Alex', status: 'doing', due: 'Due today' },
  { id: 't2', title: 'Submit Priya billing', status: 'todo', due: 'Due today' },
  { id: 't3', title: 'Prep Omar telehealth link', status: 'todo', due: 'Due in 2h' }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: 'mon-0900',
    day: 'Mon',
    start: '09:00',
    end: '09:45',
    patient: 'Alex Kim',
    therapist: 'Dr. Priya Nair',
    visit: 'Initial consult',
    mode: 'In person',
    room: 'Room 1',
    status: 'checked-in',
    note: 'Arrived early; needs ankle rehab plan'
  },
  {
    id: 'mon-1115',
    day: 'Mon',
    start: '11:15',
    end: '12:00',
    patient: 'Priya Nair',
    therapist: 'Dr. Sam Lee',
    visit: 'Follow-up',
    mode: 'In person',
    room: 'Room 2',
    status: 'scheduled',
    note: 'Add 10 min buffer for manual therapy'
  },
  {
    id: 'mon-1400',
    day: 'Mon',
    start: '14:00',
    end: '14:45',
    patient: 'Omar Rahman',
    therapist: 'Dr. Priya Nair',
    visit: 'Telehealth',
    mode: 'Telehealth',
    status: 'scheduled',
    note: 'Send join link from portal; confirm audio'
  },
  {
    id: 'tue-0930',
    day: 'Tue',
    start: '09:30',
    end: '10:15',
    patient: 'Sam Lee',
    therapist: 'Dr. Priya Nair',
    visit: 'Manual therapy',
    mode: 'In person',
    room: 'Room 3',
    status: 'completed',
    note: 'Marked complete; add progress note'
  },
  {
    id: 'tue-1200',
    day: 'Tue',
    start: '12:00',
    end: '12:30',
    patient: 'Waitlist slot',
    therapist: 'Open',
    visit: 'Hold slot',
    mode: 'In person',
    room: 'Flex',
    status: 'scheduled',
    note: 'Held for urgent add-on; can release'
  },
  {
    id: 'wed-1600',
    day: 'Wed',
    start: '16:00',
    end: '16:30',
    patient: 'Telehealth buffer',
    therapist: 'Shared',
    visit: 'Buffer window',
    mode: 'Telehealth',
    status: 'canceled',
    note: 'Canceled yesterday; keep buffer for overrun'
  }
];

export const weeklyAvailability: AvailabilityDay[] = [
  { day: 'Mon', open: '08:30', close: '17:30', booked: 10, slots: 12 },
  { day: 'Tue', open: '09:00', close: '17:00', booked: 8, slots: 12, holds: 1 },
  { day: 'Wed', open: '10:00', close: '18:00', booked: 9, slots: 12 },
  { day: 'Thu', open: '09:00', close: '17:00', booked: 7, slots: 12 },
  { day: 'Fri', open: '08:00', close: '14:00', booked: 5, slots: 8 }
];

export const bookingSignals: BookingSignal[] = [
  { id: 'waitlist', label: 'Waitlist', status: '3 patients', note: 'Match to Tue/Thu afternoons' },
  { id: 'buffers', label: 'Buffers', status: '10–15 min', note: 'Auto-padded between visits (mock)' },
  { id: 'overbook', label: 'Overbook guard', status: 'On', note: 'Blocks double-book in same room' }
];

export type PortalPreview = {
  patientName: string;
  patientEmail: string;
  accessCode: string;
  birthDate: string;
  nextVisit: {
    date: string;
    mode: 'In person' | 'Telehealth';
    clinician: string;
    location: string;
    reason: string;
  };
  exercises: { name: string; dosage: string; note: string }[];
  documents: { title: string; status: 'draft' | 'shared' | 'pending'; note?: string }[];
  messages: { from: string; time: string; text: string }[];
  checklist: string[];
  billing: {
    balance: string;
    due: string;
    coverage: string;
    method: string;
    lastPaid: string;
  };
  forms: { title: string; status: 'pending' | 'submitted' | 'signed'; note?: string }[];
};

export const portalPreview: PortalPreview = {
  patientName: 'Alex Kim',
  patientEmail: 'alex@example.com',
  accessCode: 'AK-2841',
  birthDate: '1992-07-14',
  nextVisit: {
    date: 'Thu, Feb 19 · 11:30 AM',
    mode: 'Telehealth',
    clinician: 'Dr. Priya Nair',
    location: 'Online (link shared on unlock)',
    reason: 'Post-op ankle rehab progress check'
  },
  exercises: [
    { name: 'Ankle pumps', dosage: '3 x 12 daily', note: 'Light resistance band' },
    { name: 'Single-leg balance', dosage: '3 x 30s', note: 'Eyes forward, kitchen counter nearby' },
    { name: 'Heel raises', dosage: '3 x 10', note: 'Slow tempo, hold top for 2s' }
  ],
  documents: [
    { title: 'Invoice draft #1024', status: 'draft', note: 'Mark as paid once processed' },
    { title: 'Care plan v2', status: 'shared', note: 'Visible to patient portal' },
    { title: 'Telehealth guide PDF', status: 'shared' }
  ],
  messages: [
    { from: 'Priya', time: 'Today 9:10 AM', text: 'See you tomorrow. Use the portal link to join.' },
    { from: 'Front desk', time: 'Yesterday', text: 'Parking validation available for in-person visits.' },
    { from: 'Billing', time: 'Yesterday', text: 'Balance will clear on card ending •4242 (mock).' }
  ],
  checklist: [
    'Verify consent before telehealth',
    'Share exercise progress after each visit',
    'Portal access resets weekly (mock)'
  ],
  billing: {
    balance: '$82.00',
    due: 'Due in 5 days',
    coverage: 'Insurance: 80% covered',
    method: 'Card •4242 on file',
    lastPaid: 'Last payment: Jan 28'
  },
  forms: [
    { title: 'Consent & intake', status: 'signed', note: 'Signed Jan 12' },
    { title: 'Telehealth policy', status: 'submitted', note: 'Ready for next visit' },
    { title: 'Payment authorization', status: 'pending', note: 'Collect on unlock (mock)' }
  ]
};
