'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  symptoms: string[];
  href: string;
}

interface ServicesOverviewProps {
  className?: string;
}

const ServicesOverview = ({ className = '' }: ServicesOverviewProps) => {
  const services: Service[] = [
    {
      id: 1,
      title: "Psychiatric evaluations",
      description: "Comprehensive mental health assessment and diagnostic evaluation services.",
      icon: "ClipboardDocumentCheckIcon",
      symptoms: ["Bipolar Disorder", "Depression", "ADHD", "Anxiety"],
      href: "/services"
    },
    {
      id: 2,
      title: "Medication management",
      description: "Professional psychiatric medication monitoring and adjustment services.",
      icon: "BeakerIcon",
      symptoms: ["Bipolar Disorder", "Depression", "ADHD", "Anxiety", "Schizophrenia"],
      href: "/services"
    },
    {
      id: 3,
      title: "Individual therapy",
      description: "One-on-one counseling sessions tailored to your specific mental health needs and goals.",
      icon: "UserIcon",
      symptoms: ["Depression", "Anxiety", "PTSD", "Grief"],
      href: "/services"
    },
    {
      id: 4,
      title: "Care coordination",
      description: "Integrated care coordination services to ensure comprehensive treatment planning.",
      icon: "UsersIcon",
      symptoms: ["Complex Cases", "Multiple Diagnoses", "Treatment Planning"],
      href: "/services"
    },
    {
      id: 5,
      title: "Primary care integration",
      description: "Integrated primary and mental health care services for comprehensive wellness.",
      icon: "HeartIcon",
      symptoms: ["Diabetes", "Hypertension", "Chronic Pain", "Depression"],
      href: "/services"
    }
  ];

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-headline text-3xl lg:text-4xl text-warm-800 mb-4">
            Comprehensive Mental Health Services
          </h2>
          <p className="font-body text-lg text-warm-500 max-w-3xl mx-auto leading-relaxed">
            Evidence-based treatments delivered with compassion and cultural sensitivity. We provide integrated care that addresses your whole-person wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/60 backdrop-blur-sm border border-warm-200/50 rounded-2xl p-6 hover:bg-white hover:shadow-lift hover:-translate-y-1 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Icon name={service.icon as any} size={24} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-headline text-xl text-warm-800 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-warm-500 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Symptoms/Conditions */}
              <div className="mb-5">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-warm-400 mb-2">Common concerns:</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.symptoms.slice(0, 3).map((symptom, idx) => (
                    <span
                      key={idx}
                      className="bg-warm-100 text-warm-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {symptom}
                    </span>
                  ))}
                  {service.symptoms.length > 3 && (
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      +{service.symptoms.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Link
            href="/services"
            className="btn-organic bg-secondary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            View All Services
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
