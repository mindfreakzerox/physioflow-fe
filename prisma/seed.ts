import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clinicData = {
  name: 'PhysioFlow Demo Clinic',
  slug: 'physioflow-demo',
  address: '123 Demo St, Vancouver, BC',
  phone: '+1 (555) 123-4567',
  email: 'hello@physioflow.demo',
  timezone: 'America/Vancouver'
};

const practitioners = [
  { name: 'Alex Kim', email: 'admin@physioflow.demo', role: 'admin', specialties: 'Clinic admin', password: 'demo123' },
  { name: 'Dr. Priya Nair', email: 'dr.smith@physioflow.demo', role: 'practitioner', specialties: 'Sports rehab', password: 'demo123' },
  { name: 'Dr. Omar Rahman', email: 'front@physioflow.demo', role: 'front-desk', specialties: 'Front desk', password: 'demo123' },
  { name: 'Dr. Sam Lee', email: 'sam@physioflow.demo', role: 'practitioner', specialties: 'Neuro', password: 'demo123' },
  { name: 'Dr. Jamie Chen', email: 'jamie@physioflow.demo', role: 'practitioner', specialties: 'Pelvic health', password: 'demo123' }
];

const patients = Array.from({ length: 20 }).map((_, idx) => ({
  name: `Patient ${idx + 1}`,
  email: `patient${idx + 1}@example.com`,
  phone: `+1 (555) 100-${(idx + 1).toString().padStart(4, '0')}`
}));

const services = [
  { name: 'Initial Consult (60m)', duration: 60, price: 120, description: 'Comprehensive assessment', color: '#0D9488' },
  { name: 'Follow-up (45m)', duration: 45, price: 90, description: 'Standard follow-up', color: '#0D9488' },
  { name: 'Manual Therapy (30m)', duration: 30, price: 75, description: 'Hands-on treatment', color: '#0D9488' },
  { name: 'Telehealth (30m)', duration: 30, price: 70, description: 'Virtual visit', color: '#0D9488' },
  { name: 'Exercise Therapy (30m)', duration: 30, price: 65, description: 'Guided exercise', color: '#0D9488' },
  { name: 'Post-op Rehab (60m)', duration: 60, price: 130, description: 'Surgery recovery plan', color: '#0D9488' },
  { name: 'Performance Tune-up (45m)', duration: 45, price: 95, description: 'Athlete-focused session', color: '#0D9488' },
  { name: 'Pelvic Health (45m)', duration: 45, price: 110, description: 'Pelvic health focused', color: '#0D9488' }
];

const addDays = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

async function main() {
  await prisma.document.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.service.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.practitioner.deleteMany();
  await prisma.clinic.deleteMany();

  const clinic = await prisma.clinic.create({ data: clinicData });

  const practitionerRecords = await Promise.all(
    practitioners.map((p) =>
      prisma.practitioner.create({ data: { ...p, clinicId: clinic.id } })
    )
  );

  const patientRecords = await Promise.all(
    patients.map((p) =>
      prisma.patient.create({ data: { ...p, clinicId: clinic.id } })
    )
  );

  const serviceRecords = await Promise.all(
    services.map((s) => prisma.service.create({ data: { ...s, clinicId: clinic.id } }))
  );

  const now = new Date();
  const apptsData = Array.from({ length: 50 }).map((_, idx) => {
    const dayOffset = (idx % 30) - 15; // past 15 days to next 14 days
    const start = addDays(now, dayOffset);
    start.setHours(8 + (idx % 8), (idx % 2) * 30, 0, 0);
    const service = serviceRecords[idx % serviceRecords.length];
    const end = new Date(start.getTime() + service.duration * 60000);
    const practitioner = practitionerRecords[idx % practitionerRecords.length];
    const patient = patientRecords[idx % patientRecords.length];
    return { start, end, service, practitioner, patient };
  });

  const appointments = await Promise.all(
    apptsData.map((item, idx) =>
      prisma.appointment.create({
        data: {
          clinicId: clinic.id,
          patientId: item.patient.id,
          practitionerId: item.practitioner.id,
          serviceId: item.service.id,
          startTime: item.start,
          endTime: item.end,
          status: idx % 5 === 0 ? 'completed' : idx % 3 === 0 ? 'checked-in' : 'scheduled',
          notes: 'Demo appointment'
        }
      })
    )
  );

  const invoices = await Promise.all(
    appointments.slice(0, 10).map((appt, idx) =>
      prisma.invoice.create({
        data: {
          appointmentId: appt.id,
          patientId: appt.patientId,
          amount: services[idx % services.length].price,
          status: idx % 3 === 0 ? 'paid' : idx % 3 === 1 ? 'pending' : 'overdue',
          paidAt: idx % 3 === 0 ? addDays(now, -1) : null
        }
      })
    )
  );

  await prisma.document.createMany({
    data: patientRecords.slice(0, 3).map((p, idx) => ({
      patientId: p.id,
      name: `Care plan ${idx + 1}`,
      type: 'pdf',
      filePath: `/uploads/care-plan-${idx + 1}.pdf`
    }))
  });

  console.log({
    clinic: clinic.slug,
    practitioners: practitionerRecords.length,
    patients: patientRecords.length,
    services: serviceRecords.length,
    appointments: appointments.length,
    invoices: invoices.length
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
