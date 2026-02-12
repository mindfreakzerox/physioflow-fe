import { ScheduleTable } from '../../components/ScheduleTable';
import { PatientList } from '../../components/PatientList';
import { TaskList } from '../../components/TaskList';
import { mockAppointments, mockPatients, mockTasks } from '../../lib/mock-data';

export const dynamic = 'force-dynamic'; // SSR each request

export default function DashboardPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="grid dashboard-grid">
          <div className="card">
            <div className="card-header">
              <h2>Today&apos;s Schedule</h2>
              <span className="pill">SSR</span>
            </div>
            <ScheduleTable appointments={mockAppointments} />
          </div>
          <div className="card">
            <div className="card-header">
              <h2>Patients</h2>
              <span className="pill">Demo</span>
            </div>
            <PatientList patients={mockPatients} />
          </div>
          <div className="card">
            <div className="card-header">
              <h2>Tasks</h2>
              <span className="pill">Demo</span>
            </div>
            <TaskList tasks={mockTasks} />
          </div>
        </div>
      </div>
    </main>
  );
}
