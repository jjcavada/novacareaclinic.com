import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
}

interface CommunityImpactProps {
  className?: string;
}

const CommunityImpact = ({ className = '' }: CommunityImpactProps) => {
  const metrics: Metric[] = [
    {
      id: 1,
      value: "500+",
      label: "Patients Served",
      description: "Individuals and families who have found healing and hope through our integrated care approach",
      icon: "HeartIcon"
    },
    {
      id: 2,
      value: "95%",
      label: "Patient Satisfaction",
      description: "Of our patients report feeling heard, understood, and supported throughout their treatment journey",
      icon: "StarIcon"
    },
    {
      id: 3,
      value: "24/7",
      label: "Crisis Support",
      description: "Round-the-clock access to mental health crisis intervention and emergency support services",
      icon: "PhoneIcon"
    },
    {
      id: 4,
      value: "85%",
      label: "Accept Insurance",
      description: "Including Medicaid, Medicare, and most major insurance plans to ensure accessible care for all",
      icon: "ShieldCheckIcon"
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-primary text-primary-foreground ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold mb-4">
            Your Mental Health Matters
          </h2>
          <p className="font-value-prop text-xl opacity-90 max-w-3xl mx-auto">
            At NovaCare Clinic, we believe that quality mental health care should be accessible to everyone, regardless of their financial situation or background. We're here to support you on your journey to wellness.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-healing">
                <Icon name={metric.icon as any} size={32} className="text-primary-foreground" />
              </div>

              {/* Metric */}
              <div className="font-brand-headline text-4xl lg:text-5xl font-bold mb-2">
                {metric.value}
              </div>
              <h3 className="font-headline text-xl font-semibold mb-3">
                {metric.label}
              </h3>
              <p className="font-content text-sm opacity-90 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community Message */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="HeartIcon" size={48} className="text-primary-foreground mx-auto mb-6 opacity-80" />
          <h3 className="font-headline text-2xl lg:text-3xl font-bold mb-4">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="font-value-prop text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Join hundreds of patients who have found hope and healing through our compassionate, evidence-based mental health care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-appointment"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-cta font-semibold hover:bg-primary-foreground/90 transition-healing"
            >
              Schedule Your First Appointment
            </Link>
            <Link
              href="/contact"
              className="bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-cta font-semibold hover:bg-primary-foreground/30 transition-healing border border-primary-foreground/30"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;