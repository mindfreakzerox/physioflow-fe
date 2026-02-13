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
    { from: 'Front desk', time: 'Yesterday', text: 'Parking validation available for in-person visits.' }
  ],
  checklist: [
    'Verify consent before telehealth',
    'Share exercise progress after each visit',
    'Portal access resets weekly (mock)'
  ]
};
