import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Mental Health Services',
  description: 'Comprehensive mental health services including individual therapy, group therapy, psychiatric evaluation, family therapy, crisis intervention, and substance abuse treatment with integrated care approach.',
  keywords: ['psychiatric evaluation', 'individual therapy', 'group therapy', 'medication management', 'telehealth therapy', 'crisis intervention'],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesInteractive />
    </main>
  );
}