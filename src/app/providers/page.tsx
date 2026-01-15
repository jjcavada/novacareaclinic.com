import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProvidersInteractive from './components/ProvidersInteractive';

export const metadata: Metadata = {
  title: 'Our Healthcare Providers',
  description: 'Meet our experienced team of healthcare professionals. Find the right staff member for your needs with detailed profiles and specialties.',
  keywords: ['psychiatrist Phoenix', 'licensed therapist', 'behavioral health professional', 'mental health team'],
  alternates: {
    canonical: '/providers',
  },
};

export default function ProvidersPage() {
  return (
    <>
      <Header />
      <ProvidersInteractive />
    </>
  );
}