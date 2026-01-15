'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Provider {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  alt: string;
  quote: string;
  credentials: string;
}

interface ProviderSpotlightProps {
  className?: string;
}

const ProviderSpotlight = ({ className = '' }: ProviderSpotlightProps) => {
  const refreshKey = Date.now();

  const providers: Provider[] = [
    {
      id: 1,
      name: "Dr. Leticia Jacinto",
      title: "Psychiatrist",
      specialties: ["Psychiatric Evaluations", "Medication Management", "Mental Health Treatment"],
      image: "https://images.unsplash.com/photo-1663664971647-59de765183c1?v=" + refreshKey,
      alt: "Professional Hispanic woman doctor in white coat with stethoscope smiling warmly in medical office",
      quote: "Every person deserves compassionate, evidence-based psychiatric care that honors their unique journey toward mental wellness.",
      credentials: "MD, Board Certified Psychiatrist"
    },
    {
      id: 2,
      name: "Anne Vargas-Leveriza",
      title: "Behavioral Health Professional",
      specialties: ["Individual Therapy", "Behavioral Health Counseling", "Care Coordination"],
      image: "https://images.unsplash.com/photo-1714976694468-1dab37879a76?v=" + refreshKey,
      alt: "Professional woman therapist in business attire sitting in comfortable counseling office with warm lighting",
      quote: "Healing happens in relationship. I'm here to walk alongside you as you discover your own strength and resilience.",
      credentials: "Licensed Behavioral Health Professional"
    },
    {
      id: 3,
      name: "Anna Manalo, FNP",
      title: "Primary Care Physician",
      specialties: ["Primary Care Integration", "Medical Services", "Preventive Care"],
      image: "https://images.unsplash.com/photo-1731484635501-71f97d8e998f?v=" + refreshKey,
      alt: "Professional Asian American female nurse practitioner with glasses in medical coat sitting in modern medical office",
      quote: "Integrating primary care with behavioral health creates a comprehensive approach to whole-person wellness.",
      credentials: "FNP, Family Nurse Practitioner"
    }
  ];

  const getRoleColor = (title: string) => {
    if (title.toLowerCase().includes('psychiatrist')) return 'text-primary';
    if (title.toLowerCase().includes('behavioral')) return 'text-accent';
    return 'text-secondary';
  };

  return (
    <section key={refreshKey} className={`py-16 lg:py-24 bg-warm-50/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-warm-200/50 shadow-soft mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-soft-pulse"></span>
            <span className="font-body text-sm font-medium text-warm-600">Our Care Team</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-warm-800 mb-4">
            Our Staff
          </h2>
          <p className="font-body text-lg text-warm-500 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of three healthcare professionals who provide comprehensive care for your mental health and medical needs.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {providers.slice(0, 3).map((provider, index) => (
            <div
              key={`provider-${provider.id}-${refreshKey}`}
              className="group card-organic animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Provider Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <AppImage
                  src={provider.image}
                  alt={provider.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Provider Info */}
              <div className="p-6">
                <h3 className="font-headline text-xl text-warm-800 mb-1 group-hover:text-primary transition-colors">
                  {provider.name}
                </h3>
                <p className={`font-body font-semibold text-sm mb-2 ${getRoleColor(provider.title)}`}>
                  {provider.title}
                </p>
                <p className="font-body text-sm text-warm-500 mb-4">
                  {provider.credentials}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {provider.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-headline italic text-warm-500 text-sm leading-relaxed mb-4 border-l-2 border-primary/20 pl-3">
                  "{provider.quote}"
                </blockquote>

                {/* View Profile Link */}
                <Link
                  href="/providers"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all"
                >
                  View Full Profile
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
          <Link
            href="/providers"
            className="btn-organic btn-organic-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-glow"
          >
            Meet Our Full Staff
            <Icon name="UsersIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProviderSpotlight;
