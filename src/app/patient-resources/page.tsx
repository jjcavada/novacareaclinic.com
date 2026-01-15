import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PatientResourcesInteractive from './components/PatientResourcesInteractive';

export const metadata: Metadata = {
  title: 'Mental Health Resources - NovaCare Clinic',
  description: 'Access trusted mental health resources from NIMH, NAMI, CDC, and SAMHSA. Find information about depression, anxiety, ADHD, bipolar disorder, and PTSD in English and Spanish.',
};

export default function PatientResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-6">
            Mental Health Resources
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access trusted information from authoritative sources including NIMH, NAMI, CDC, and SAMHSA.
            Find resources about depression, anxiety, ADHD, bipolar disorder, and PTSD in English and Spanish.
          </p>
        </div>
      </section>

      <PatientResourcesInteractive />
    </main>
  );
}