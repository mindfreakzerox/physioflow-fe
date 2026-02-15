import { AvailabilityGlance } from '../../components/AvailabilityGlance';
import { BookingForm } from '../../components/BookingForm';
import { BookingSignals } from '../../components/BookingSignals';
import { BillingSummary } from '../../components/BillingSummary';
import { CalendarRibbon } from '../../components/CalendarRibbon';
import { IntakeNotes } from '../../components/IntakeNotes';
import { InsuranceEligibilityCard } from '../../components/InsuranceEligibilityCard';
import { IntakeFormWizard } from '../../components/IntakeFormWizard';
import { PatientList } from '../../components/PatientList';
import { PortalSnapshot } from '../../components/PortalSnapshot';
import { ReminderCenter } from '../../components/ReminderCenter';
import { ScheduleTable } from '../../components/ScheduleTable';
import { TaskList } from '../../components/TaskList';
import { TelehealthStub } from '../../components/TelehealthStub';
import { mockAppointments, mockPatients, mockTasks } from '../../lib/mock-data';

export const dynamic = 'force-static';

export default function DashboardPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ marginBottom: '16px' }}>
          <div className="card-header">
            <div>
              <p className="eyebrow">PhysioFlow dashboard</p>
              <h2>Keep today on track</h2>
              <p className="muted">Bookings, holds, and billing cues now mirror the /pricing and /contact flows with clear CTA copy.</p>
            </div>
            <div className="actions">
              <a className="btn" href="/contact">Share booking link</a>
              <a className="btn ghost" href="/pricing">View pricing</a>
            </div>
          </div>
          <p className="muted small">Empty states stay visible so the static export and portal preview never feel broken during demos.</p>
        </div>

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

          <div className="card">
            <ReminderCenter />
          </div>

          <div className="card">
            <InsuranceEligibilityCard />
          </div>

          <div className="card">
            <IntakeFormWizard />
          </div>
        </div>
      </div>
    </main>
  );
}
