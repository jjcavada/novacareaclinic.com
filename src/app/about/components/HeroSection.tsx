import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-healing-gradient py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Compassionate Innovation in 
                <span className="text-primary block">Behavioral Health</span>
              </h1>
              <p className="font-body text-lg text-text-secondary leading-relaxed">
                Where clinical expertise meets human understanding. We see patients as whole people, 
                not just symptoms, creating a new paradigm in healthcare that transforms lives through 
                integrated, accessible care.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-healing-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1628390707616-3940b65c686d"
                alt="Modern healthcare facility exterior with glass windows and welcoming entrance surrounded by desert landscaping"
                className="w-full h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;