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

// Provider structured data for rich snippets
const providersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NovaCare Clinic Healthcare Providers',
  description: 'Our team of experienced mental health professionals in Phoenix, Arizona',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Physician',
        name: 'Dr. Leticia Jacinto',
        jobTitle: 'Medical Director & Psychiatrist',
        description: 'Board Certified Psychiatrist specializing in psychiatric evaluations, medication management, and treatment planning with over 15 years of experience.',
        medicalSpecialty: ['Psychiatry', 'Mental Health'],
        knowsLanguage: ['English', 'Spanish'],
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4523 W Glendale Ave, Suite 102',
          addressLocality: 'Phoenix',
          addressRegion: 'AZ',
          postalCode: '85301',
          addressCountry: 'US'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Physician',
        name: 'Anna Manalo',
        jobTitle: 'Primary Care Physician',
        description: 'Family Nurse Practitioner providing primary care integration and holistic healthcare services.',
        medicalSpecialty: ['Primary Care', 'Family Medicine'],
        knowsLanguage: ['English', 'Tagalog'],
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4523 W Glendale Ave, Suite 102',
          addressLocality: 'Phoenix',
          addressRegion: 'AZ',
          postalCode: '85301',
          addressCountry: 'US'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Person',
        name: 'Anne Leveriza, LPC and BHP',
        jobTitle: 'Behavioral Health Professional',
        description: 'Licensed Behavioral Health Professional specializing in individual therapy, behavioral health counseling, and crisis intervention.',
        knowsLanguage: ['English'],
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'NovaCare Clinic',
          url: 'https://novacareclinicllc.com'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4523 W Glendale Ave, Suite 102',
          addressLocality: 'Phoenix',
          addressRegion: 'AZ',
          postalCode: '85301',
          addressCountry: 'US'
        }
      }
    }
  ]
};

export default function ProvidersPage() {
  return (
    <>
      <Header />
      <ProvidersInteractive />

      {/* Provider structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(providersJsonLd) }}
      />
    </>
  );
}