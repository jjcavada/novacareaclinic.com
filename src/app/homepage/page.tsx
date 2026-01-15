import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Homepage - NovaCare Clinic',
  description: 'Compassionate behavioral health care in Phoenix, Arizona. Quality mental health services regardless of your ability to pay. Crisis support available 24/7.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HomepageInteractive />
    </main>
  );
}