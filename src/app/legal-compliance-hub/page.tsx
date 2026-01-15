import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LegalComplianceHub from './components/LegalComplianceHub';

export const metadata: Metadata = {
  title: 'Legal & Compliance',
  description: 'NovaCare Clinic legal documentation including Anti-Kickback Compliance Policy, Privacy Policy, and HIPAA Notice of Privacy Practices. Healthcare law compliance information.',
  keywords: ['HIPAA', 'privacy policy', 'healthcare compliance', 'anti-kickback', 'patient rights', 'NovaCare Clinic legal'],
  alternates: {
    canonical: '/legal-compliance-hub',
  },
};

export default function LegalComplianceHubPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LegalComplianceHub />
    </main>
  );
}
