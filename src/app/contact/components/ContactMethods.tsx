import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: string;
  primary: string;
  secondary?: string;
  action: string;
  href: string;
  available: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      title: 'Phone',
      description: 'Speak directly with our care coordinators',
      icon: 'PhoneIcon',
      primary: '(602) 556-8120',
      secondary: 'Main Line',
      action: 'Call Now',
      href: 'tel:+16023991404',
      available: 'Monday - Friday: 9:00 AM - 5:00 PM'
    },
    {
      id: 'email',
      title: 'Email',
      description: 'Send us your questions or concerns',
      icon: 'EnvelopeIcon',
      primary: 'info@novacareclinic.health',
      secondary: 'General Inquiries',
      action: 'Send Email',
      href: 'mailto:info@novacareclinic.health',
      available: 'Response within 24 hours'
    },
    {
      id: 'appointment',
      title: 'Schedule Appointment',
      description: 'Book your visit online or by phone',
      icon: 'CalendarDaysIcon',
      primary: 'Online Scheduling',
      secondary: 'Same-day available',
      action: 'Schedule Now',
      href: '/schedule-appointment',
      available: 'Book online anytime'
    }
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the contact method that works best for you. We're committed to responding promptly and providing the support you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-healing transition-healing group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-healing">
                  <Icon
                    name={method.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>

                <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                  {method.title}
                </h3>

                <p className="font-body text-sm text-text-secondary mb-4">
                  {method.description}
                </p>

                <div className="mb-4">
                  <div className="font-cta font-semibold text-text-primary">
                    {method.primary}
                  </div>
                  {method.secondary && (
                    <div className="font-body text-sm text-text-secondary">
                      {method.secondary}
                    </div>
                  )}
                </div>

                <div className="text-xs text-text-secondary mb-4">
                  {method.available}
                </div>

                <a
                  href={method.href}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-cta font-medium hover:bg-primary/90 transition-healing text-sm w-full text-center"
                >
                  {method.action}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12 bg-muted rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="ClockIcon" size={24} className="text-foreground mx-auto mb-3" />
              <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                Office Hours
              </h3>
              <div className="font-body text-sm text-text-secondary space-y-1">
                <div><strong>Clinic Hours:</strong></div>
                <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                <div>Saturday - Sunday: Closed</div>
                <div className="mt-2"><strong>Administrative Hours:</strong></div>
                <div>Monday - Friday: 9:00 AM - 4:00 PM</div>
                <div>Saturday - Sunday: Closed</div>
              </div>
            </div>

            <div>
              <Icon name="LanguageIcon" size={24} className="text-foreground mx-auto mb-3" />
              <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                Language Services
              </h3>
              <div className="font-body text-sm text-text-secondary space-y-1">
                <div>English & Spanish spoken</div>
                <div>Professional interpreters available</div>
                <div>ASL interpretation upon request</div>
                <div className="text-xs mt-2">*48-hour notice preferred</div>
              </div>
            </div>

            <div>
              <Icon name="ShieldCheckIcon" size={24} className="text-foreground mx-auto mb-3" />
              <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                Privacy & Security
              </h3>
              <div className="font-body text-sm text-text-secondary space-y-1">
                <div>HIPAA-compliant communications</div>
                <div>Secure patient portal</div>
                <div>Confidential consultations</div>
                <div className="text-xs mt-2">*Your privacy is our priority</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;