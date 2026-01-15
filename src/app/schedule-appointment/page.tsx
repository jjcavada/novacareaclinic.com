import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ScheduleAppointmentInteractive from './components/ScheduleAppointmentInteractive';

export const metadata: Metadata = {
  title: 'Schedule Appointment - NovaCare Clinic',
  description: 'Schedule your mental health appointment with our compassionate team. Multiple booking options, insurance verification, and immediate crisis support available 24/7.',
};

export default function ScheduleAppointmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ScheduleAppointmentInteractive />
      </main>
    </div>
  );
}