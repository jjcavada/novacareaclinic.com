'use client';

import React, { useState, useEffect } from 'react';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import LocationInfo from './LocationInfo';
import ContactForm from './ContactForm';
import DepartmentContacts from './DepartmentContacts';
import OurTeamSection from './OurTeamSection';

interface ContactInteractiveProps {
  className?: string;
}

const ContactInteractive = ({ className = '' }: ContactInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <div className="animate-pulse">
          <div className="bg-healing-gradient h-96"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <ContactHero />
      <ContactMethods />
      <OurTeamSection />
      <LocationInfo />
      <DepartmentContacts />
      <ContactForm />
    </div>
  );
};

export default ContactInteractive;