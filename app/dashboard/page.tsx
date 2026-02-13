import { AvailabilityGlance } from '../../components/AvailabilityGlance';
import { BookingForm } from '../../components/BookingForm';
import { BookingSignals } from '../../components/BookingSignals';
import { BillingSummary } from '../../components/BillingSummary';
import { CalendarRibbon } from '../../components/CalendarRibbon';
import { IntakeNotes } from '../../components/IntakeNotes';
import { PatientList } from '../../components/PatientList';
import { PortalSnapshot } from '../../components/PortalSnapshot';
import { ScheduleTable } from '../../components/ScheduleTable';
import { TaskList } from '../../components/TaskList';
import { TelehealthStub } from '../../components/TelehealthStub';
import { mockAppointments, mockPatients, mockTasks } from '../../lib/mock-data';

export const dynamic = 'force-static';

export default function DashboardPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="grid dashboard-grid">
          <div className="card">
            <div className="card-header">
              <h2>Calendar snapshot</h2>
              <span className="pill">Week</span>
            </div>
            <CalendarRibbon />
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Availability</h2>
              <span className="pill">Mock data</span>
            </div>
            <AvailabilityGlance />
          </div>

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

          <div className="card">
            <div className="card-header">
              <h2>Book appointment</h2>
              <span className="pill">Mock</span>
            </div>
            <BookingForm />
          </div>

          <div className="card">
            <BookingSignals />
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Intake & notes</h2>
              <span className="pill">Mock</span>
            </div>
            <IntakeNotes />
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Billing</h2>
              <span className="pill">Mock</span>
            </div>
            <BillingSummary />
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Telehealth</h2>
              <span className="pill">Mock</span>
            </div>
            <TelehealthStub />
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Patient portal</h2>
              <span className="pill">New</span>
            </div>
            <PortalSnapshot />
          </div>
        </div>
      </div>
    </main>
  );
}
