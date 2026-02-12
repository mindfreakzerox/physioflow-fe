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
