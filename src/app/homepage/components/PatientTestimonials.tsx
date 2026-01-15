import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  condition: string;
  quote: string;
  image: string;
  alt: string;
  treatment: string;
}

interface PatientTestimonialsProps {
  className?: string;
}

const PatientTestimonials = ({ className = '' }: PatientTestimonialsProps) => {
  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    age: 34,
    condition: "Anxiety & Depression",
    quote: "The team at NovaCare helped me find hope again. Their integrated approach addressed not just my symptoms, but the whole person. I finally feel like myself again.",
    image: "https://images.unsplash.com/photo-1709980699748-c712896e2148",
    alt: "Smiling young woman with brown hair in casual sweater sitting outdoors in natural lighting",
    treatment: "Individual Therapy & Medication Management"
  },
  {
    id: 2,
    name: "Michael R.",
    age: 28,
    condition: "PTSD & Substance Use",
    quote: "I was skeptical about therapy, but the compassionate care I received here changed my life. They met me where I was and helped me build the tools I needed to heal.",
    image: "https://images.unsplash.com/photo-1616479067214-a435e6ba6773",
    alt: "Professional young man with beard in button-down shirt smiling confidently in office setting",
    treatment: "Trauma Therapy & Group Support"
  },
  {
    id: 3,
    name: "Lisa & Family",
    age: 42,
    condition: "Family Therapy",
    quote: "NovaCare helped our family communicate better and heal together. The family therapy sessions gave us tools we use every day. Our relationships are stronger than ever.",
    image: "https://images.unsplash.com/flagged/photo-1576943416237-4ed0ce3416de",
    alt: "Warm portrait of middle-aged woman with gentle smile in comfortable home environment",
    treatment: "Family Counseling & Communication Skills"
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Stories of Hope & Healing
          </h2>
          <p className="font-value-prop text-xl text-text-secondary max-w-3xl mx-auto">
            Real stories from real people who have found their path to wellness through compassionate, integrated care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) =>
          <div
            key={testimonial.id}
            className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-healing transition-healing">

              {/* Quote */}
              <div className="mb-6">
                <Icon name="ChatBubbleLeftIcon" size={32} className="text-primary/20 mb-4" />
                <blockquote className="font-accent text-text-secondary leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Patient Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div>
                  <h4 className="font-headline font-semibold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="font-content text-sm text-text-secondary">
                    Age {testimonial.age} • {testimonial.condition}
                  </p>
                </div>
              </div>

              {/* Treatment Info */}
              <div className="bg-muted rounded-lg p-3">
                <p className="font-content text-sm font-medium text-text-secondary mb-1">
                  Treatment Received:
                </p>
                <p className="font-content text-sm text-primary font-semibold">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="bg-muted rounded-lg p-6 text-center">
          <Icon name="ShieldCheckIcon" size={24} className="text-success mx-auto mb-3" />
          <p className="font-content text-sm text-text-secondary">
            <strong>Patient Privacy Protected:</strong> All testimonials shared with written consent. Names have been changed to protect patient confidentiality in accordance with HIPAA regulations.
          </p>
        </div>
      </div>
    </section>);

};

export default PatientTestimonials;