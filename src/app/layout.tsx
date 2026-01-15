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

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fnovacarec5032back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.10" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  );
}