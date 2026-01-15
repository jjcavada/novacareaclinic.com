'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import FoundingStorySection from './FoundingStorySection';
import CommunityImpactSection from './CommunityImpactSection';
import TeamIntroSection from './TeamIntroSection';
import TargetPopulationSection from './TargetPopulationSection';

interface AboutInteractiveProps {
  className?: string;
}

const AboutInteractive = ({ className = '' }: AboutInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <HeroSection />
        <MissionSection />
        <TargetPopulationSection />
        <FoundingStorySection />
        <CommunityImpactSection />
        <TeamIntroSection />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <MissionSection />
      <TargetPopulationSection />
      <FoundingStorySection />
      <CommunityImpactSection />
      <TeamIntroSection />
    </div>
  );
};

export default AboutInteractive;