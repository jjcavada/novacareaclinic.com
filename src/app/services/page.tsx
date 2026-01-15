import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - NovaCare Clinic',
  description: 'Comprehensive mental health services including individual therapy, group therapy, psychiatric evaluation, family therapy, crisis intervention, and substance abuse treatment with integrated care approach.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesInteractive />
    </main>
  );
}