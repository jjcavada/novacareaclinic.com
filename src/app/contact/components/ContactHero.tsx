import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`bg-healing-gradient py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Contact NovaCare Clinic
          </h1>
          <p className="font-body text-xl text-text-secondary mb-8 leading-relaxed">
            We're here to help you on your journey to wellness. Reach out to us through any of the methods below, and we'll respond promptly to assist you with scheduling, questions, or immediate support needs.
          </p>

          {/* Crisis Support Highlight */}
          <div className="bg-gray-100 border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Icon name="ExclamationTriangleIcon" size={24} className="text-foreground" />
              <h2 className="font-headline text-lg font-semibold text-foreground">
                Crisis Support Available 24/7
              </h2>
            </div>
            <p className="font-body text-text-secondary mb-4">
              If you're experiencing a mental health crisis, immediate help is available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:988"
                className="bg-accent text-white px-6 py-3 rounded-lg font-cta font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
              >
                <Icon name="PhoneIcon" size={20} />
                Call 988 - Suicide & Crisis Lifeline
              </a>
              <a
                href="tel:911"
                className="bg-error text-error-foreground px-6 py-3 rounded-lg font-cta font-semibold hover:bg-error/90 transition-healing flex items-center justify-center gap-2"
              >
                <Icon name="PhoneIcon" size={20} />
                Call 911 - Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;