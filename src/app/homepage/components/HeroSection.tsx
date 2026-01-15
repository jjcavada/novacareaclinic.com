'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative py-16 lg:py-24 overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-healing-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-warm-800 leading-tight mb-6">
              Your Mental Health
              <span className="block text-gradient">Matters</span>
            </h1>

            <p className="font-body text-lg text-warm-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Compassionate, integrated behavioral health care for the whole person. Quality treatment regardless of your ability to pay.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/schedule-appointment"
                className="btn-organic btn-organic-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-glow"
              >
                <Icon name="CalendarIcon" size={20} className="mr-2" />
                Schedule Appointment
              </Link>
              <Link
                href="/services"
                className="btn-organic btn-organic-secondary px-8 py-4 text-lg font-semibold"
              >
                <Icon name="HeartIcon" size={20} className="mr-2" />
                Our Services
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 pt-8 border-t border-warm-200/50">
              <p className="font-body text-sm text-warm-400 mb-4">Trusted by the community</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={18} className="text-emerald-600" />
                  </div>
                  <span className="font-body text-sm text-warm-600">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon name="CheckBadgeIcon" size={18} className="text-blue-600" />
                  </div>
                  <span className="font-body text-sm text-warm-600">Arizona Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Icon name="CreditCardIcon" size={18} className="text-violet-600" />
                  </div>
                  <span className="font-body text-sm text-warm-600">Medicaid/Medicare</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-lift">
              <AppImage
                src="/assets/images/hero-professional-team-branded.png"
                alt="Diverse group of healthcare professionals in modern clinic setting with warm lighting"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:left-auto lg:-right-4">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lift border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="HeartIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-headline text-2xl text-warm-800">15+</p>
                    <p className="font-body text-sm text-warm-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
