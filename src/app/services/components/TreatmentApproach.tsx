import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface TreatmentStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface TreatmentApproachProps {
  steps: TreatmentStep[];
}

const TreatmentApproach = ({ steps }: TreatmentApproachProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl text-foreground mb-4">
            Our Treatment Approach
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We believe in integrated, evidence-based care that treats the whole person, not just symptoms.
            Our approach combines clinical expertise with compassionate understanding.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon name={step.icon as any} size={24} />
                </div>
                <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
                  <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-primary font-medium">
                    <Icon name="ClockIcon" size={14} />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-bg-light border border-border rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-headline font-semibold text-xl text-foreground mb-3">
              Integrated Care Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every treatment plan is personalized to address your unique needs, circumstances, and goals.
              We coordinate with your primary care provider and other specialists to ensure comprehensive,
              seamless care that supports your overall wellness journey.
            </p>
            <Link
              href="/schedule-appointment"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Schedule your initial assessment
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;