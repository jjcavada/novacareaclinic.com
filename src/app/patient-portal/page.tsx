import type { Metadata } from 'next';
import PatientPortalInteractive from './components/PatientPortalInteractive';

export const metadata: Metadata = {
  title: 'Patient Portal',
  description: 'Secure access to your medical records, appointments, and telehealth services with HIPAA-compliant data protection and comprehensive patient management tools.',
  keywords: ['patient portal', 'medical records', 'telehealth', 'appointment scheduling'],
  alternates: {
    canonical: '/patient-portal',
  },
};

export default function PatientPortalPage() {
  return (
    <PatientPortalInteractive />
  );
}