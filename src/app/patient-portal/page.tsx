import type { Metadata } from 'next';
import PatientPortalInteractive from './components/PatientPortalInteractive';

export const metadata: Metadata = {
  title: 'Patient Portal - NovaCare Clinic',
  description: 'Secure access to your medical records, appointments, and telehealth services with HIPAA-compliant data protection and comprehensive patient management tools.',
};

export default function PatientPortalPage() {
  return (
    <PatientPortalInteractive />
  );
}