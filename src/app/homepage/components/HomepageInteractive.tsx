'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import ProviderSpotlight from './ProviderSpotlight';
import QuickAccess from './QuickAccess';

interface HomepageInteractiveProps {
  className?: string;
}

const HomepageInteractive = ({ className = '' }: HomepageInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        {/* Static content that matches server render */}
        <HeroSection />
        <ServicesOverview />
        <ProviderSpotlight />
        <QuickAccess />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <ServicesOverview />
      <ProviderSpotlight />
      <QuickAccess />
    </div>
  );
};

export default HomepageInteractive;