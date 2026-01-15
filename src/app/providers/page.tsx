import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProvidersInteractive from './components/ProvidersInteractive';

export const metadata: Metadata = {
  title: 'Our Staff - NovaCare Clinic',
  description: 'Meet our experienced team of healthcare professionals. Find the right staff member for your needs with detailed profiles and specialties.',
};

export default function ProvidersPage() {
  return (
    <>
      <Header />
      <ProvidersInteractive />
    </>
  );
}