import React from 'react';
import Footer from '@/components/common/Footer';
import PageTransition from '@/components/common/PageTransition';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'NovaCare Clinic - Compassionate Behavioral Health Care',
  description: 'Quality mental health services in Phoenix, Arizona. Professional behavioral health care regardless of your ability to pay. Crisis support available 24/7.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
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