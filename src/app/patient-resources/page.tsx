import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PatientResourcesInteractive from './components/PatientResourcesInteractive';

export const metadata: Metadata = {
  title: 'Patient Resources - NovaCare Clinic',
  description: 'Access comprehensive patient resources including pre-visit preparation guides, treatment timelines, family support materials, crisis resources, and educational workshops for mental health and wellness.',
};

export default function PatientResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-6">
            Patient Resources & Support
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering your mental health journey with comprehensive resources, educational materials,
            and community support tools designed to help you and your family navigate treatment and recovery.
          </p>
        </div>
      </section>

      <PatientResourcesInteractive />
    </main>
  );
}