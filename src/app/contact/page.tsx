import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact NovaCare Clinic through multiple channels including phone (602) 399-1404, email, secure messaging, and our contact form. Find our location, accessibility information, and 24/7 crisis support resources.',
  keywords: ['contact NovaCare', 'Phoenix clinic address', 'mental health appointment', 'crisis support'],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactInteractive />
    </main>
  );
}