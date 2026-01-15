import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Team',
  description: 'Learn about NovaCare Clinic\'s mission-driven approach to behavioral health, our founding story, community impact, and compassionate team of licensed clinicians serving Phoenix with integrated care.',
  keywords: ['NovaCare Clinic team', 'behavioral health mission', 'Phoenix mental health providers', 'community healthcare'],
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutInteractive />
    </main>
  );
}