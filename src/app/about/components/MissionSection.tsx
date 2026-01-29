import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const coreValues = [
    {
      icon: 'HeartIcon',
      title: 'Patient-Centered Care',
      description: 'Patient-centered, compassionate care that honors the dignity of every individual.'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Integrated Approach',
      description: 'Integrated behavioral and physical health approach treating the whole person.'
    },
    {
      icon: 'HandThumbUpIcon',
      title: 'Accessible Care',
      description: 'Accessibility for underserved populations including Medicaid and Medicare patients.'
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Evidence-Based',
      description: 'Evidence-based treatment methods grounded in the latest research.'
    },
    {
      icon: 'GlobeAmericasIcon',
      title: 'Social Determinants',
      description: 'Focus on social determinants of health like housing and food security.'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-secondary mb-6">
            Our Mission & Values
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
              <blockquote className="font-accent text-xl lg:text-2xl text-text-primary italic leading-relaxed mb-6">
                "To deliver integrated, accessible, and high-quality outpatient care—combining psychiatry, behavioral health, primary care, and case management—that improves outcomes through compassionate, evidence-based, patient-centered treatment, strong care coordination, and timely follow-through."
              </blockquote>
              <p className="font-body text-text-secondary">
                — NovaCare Clinic Mission
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-secondary/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
              <blockquote className="font-accent text-xl lg:text-2xl text-text-primary italic leading-relaxed mb-6">
                "To become Arizona's most trusted, referral-ready integrated clinic, known for rapid access, safe and coordinated whole-person care, and measurable improvement in patients' mental and physical health—setting the standard for outpatient quality, professionalism, and reliability."
              </blockquote>
              <p className="font-body text-text-secondary">
                — NovaCare Clinic Vision
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-healing transition-healing border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  name={value.icon as any}
                  size={24}
                  className="text-primary"
                />
              </div>
              <h3 className="font-headline text-lg font-semibold text-secondary mb-3">
                {value.title}
              </h3>
              <p className="font-body text-text-secondary leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-bg-light rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-headline text-2xl lg:text-3xl font-bold text-secondary mb-4">
                Safe Transformation
              </h3>
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                We believe seeking help should feel empowering, not stigmatizing. Our approach
                creates a safe space where transformation happens naturally through trust,
                understanding, and evidence-based care.{' '}
                <Link href="/services" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Explore our treatment approaches
                </Link>.
              </p>
              <div className="flex items-center gap-3 text-primary">
                <Icon name="CheckCircleIcon" size={20} />
                <span className="font-headline font-medium">Trauma-Informed Care</span>
              </div>
              <div className="flex items-center gap-3 text-primary mt-2">
                <Icon name="CheckCircleIcon" size={20} />
                <span className="font-headline font-medium">Culturally Responsive Treatment</span>
              </div>
              <div className="flex items-center gap-3 text-primary mt-2">
                <Icon name="CheckCircleIcon" size={20} />
                <span className="font-headline font-medium">Whole-Person Wellness</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-healing">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="SparklesIcon" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-headline text-lg font-semibold text-secondary mb-2">
                    Empowerment Through Care
                  </h4>
                  <p className="font-body text-text-secondary text-sm">
                    Every step of your journey is designed to build confidence,
                    resilience, and lasting wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;