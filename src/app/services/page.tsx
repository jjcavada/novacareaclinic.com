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

// Services structured data for rich snippets
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NovaCare Clinic Mental Health Services',
  description: 'Comprehensive mental health services in Phoenix, Arizona',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Psychiatric Evaluations',
        description: 'Comprehensive diagnostic assessments for adults and children to identify mental health conditions and develop tailored treatment plans.',
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Psychiatry'
        },
        medicineSystem: 'WesternConventional',
        availableService: {
          '@type': 'MedicalProcedure',
          procedureType: 'Diagnostic',
          howPerformed: 'In-person or via telehealth'
        },
        provider: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Medication Management',
        description: 'Ongoing monitoring and support for patients prescribed psychotropic medications to ensure safety and effectiveness.',
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Psychiatry'
        },
        drugClass: 'Psychotropic medications',
        provider: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Counseling & Therapy',
        description: 'Evidence-based individual, group, and family therapy to address behavioral health challenges and improve coping skills.',
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Psychology'
        },
        recognizingAuthority: 'American Psychological Association',
        provider: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Primary Care Services',
        description: 'Integrated medical care for physical health needs, wellness exams, and chronic disease management.',
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Primary Care'
        },
        provider: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Case Management',
        description: 'Coordinate care, advocate for patient needs, and link individuals to community resources for holistic support.',
        provider: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Crisis Intervention',
        description: 'Immediate support and stabilization for individuals experiencing acute mental health crises.',
        relevantSpecialty: {
          '@type': 'MedicalSpecialty',
          name: 'Emergency Psychiatry'
        },
        provider: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        }
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesInteractive />

      {/* Services structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </main>
  );
}