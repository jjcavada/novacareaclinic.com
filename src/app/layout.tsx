import React from 'react';
import Footer from '@/components/common/Footer';
import PageTransition from '@/components/common/PageTransition';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://novacareclinic.com'),
  title: {
    default: 'NovaCare Clinic - Compassionate Behavioral Health Care',
    template: '%s | NovaCare Clinic',
  },
  description: 'Quality mental health services in Phoenix, Arizona. Professional behavioral health care regardless of your ability to pay. Crisis support available 24/7.',
  keywords: ['behavioral health clinic', 'mental health services', 'Phoenix psychiatrist', 'anxiety therapy', 'depression treatment', 'psychiatric care Phoenix AZ'],
  authors: [{ name: 'NovaCare Clinic' }],
  creator: 'NovaCare Clinic',
  publisher: 'NovaCare Clinic',
  icons: {
    icon: [
      { url: '/assets/favicon/favicon.ico' },
      { url: '/assets/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/assets/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/assets/favicon/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'NovaCare Clinic',
  description: 'Quality mental health services in Phoenix, Arizona. Professional behavioral health care regardless of your ability to pay. Crisis support available 24/7.',
  url: 'https://novacareclinic.com',
  telephone: '(602) 555-0123',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4523 W Glendale Ave, Suite 102',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85301',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '33.5387',
    longitude: '-112.1350',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  medicalSpecialty: ['Psychiatry', 'Psychology', 'MentalHealth'],
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Individual Therapy' },
    { '@type': 'MedicalTherapy', name: 'Group Therapy' },
    { '@type': 'MedicalTherapy', name: 'Psychiatric Evaluation' },
    { '@type': 'MedicalTherapy', name: 'Medication Management' },
    { '@type': 'MedicalTherapy', name: 'Crisis Intervention' },
    { '@type': 'MedicalTherapy', name: 'Family Counseling' },
  ],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fnovacarec5032back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.10" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  );
}