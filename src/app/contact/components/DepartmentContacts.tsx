import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Department {
  id: string;
  name: string;
  description: string;
  contact: string;
  email: string;
  hours: string;
  icon: string;
}

interface DepartmentContactsProps {
  className?: string;
}

const DepartmentContacts = ({ className = '' }: DepartmentContactsProps) => {
  const departments: Department[] = [
    {
      id: 'appointments',
      name: 'Appointments & Scheduling',
      description: 'New patient appointments, rescheduling, and availability',
      contact: '(602) 399-1404 ext. 1',
      email: 'appointments@novacareclinic.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      icon: 'CalendarDaysIcon'
    },
    {
      id: 'billing',
      name: 'Billing & Insurance',
      description: 'Payment questions, insurance verification, and financial assistance',
      contact: '(602) 399-1404 ext. 2',
      email: 'billing@novacareclinic.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      icon: 'CreditCardIcon'
    },
    {
      id: 'medical-records',
      name: 'Medical Records',
      description: 'Record requests, transfers, and patient portal support',
      contact: '(602) 399-1404 ext. 3',
      email: 'records@novacareclinic.com',
      hours: 'Mon-Fri: 8:30 AM - 4:30 PM',
      icon: 'DocumentTextIcon'
    },
    {
      id: 'patient-services',
      name: 'Patient Services',
      description: 'General inquiries, feedback, and patient advocacy',
      contact: '(602) 399-1404 ext. 4',
      email: 'patientservices@novacareclinic.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      icon: 'UserGroupIcon'
    },
    {
      id: 'crisis-support',
      name: 'Crisis Support Team',
      description: '24/7 mental health crisis intervention and emergency support',
      contact: '(602) 399-1404 ext. 911',
      email: 'crisis@novacareclinic.com',
      hours: 'Available 24/7',
      icon: 'ExclamationTriangleIcon'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy Services',
      description: 'Medication questions, refills, and prescription coordination',
      contact: '(602) 399-1404 ext. 5',
      email: 'pharmacy@novacareclinic.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      icon: 'BeakerIcon'
    }
  ];

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Department Contacts
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Connect directly with the right department for faster, more personalized assistance with your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`bg-card border border-border rounded-lg p-6 hover:shadow-healing transition-healing ${dept.id === 'crisis-support' ? 'border-border bg-gray-50' : ''
                }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${dept.id === 'crisis-support' ? 'bg-gray-100' : 'bg-gray-100'
                  }`}>
                  <Icon
                    name={dept.icon as any}
                    size={24}
                    className="text-foreground"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-lg font-semibold text-text-primary mb-1">
                    {dept.name}
                  </h3>
                  {dept.id === 'crisis-support' && (
                    <div className="inline-flex items-center gap-1 bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium mb-2">
                      <Icon name="ClockIcon" size={12} />
                      24/7 Available
                    </div>
                  )}
                </div>
              </div>

              <p className="font-body text-sm text-text-secondary mb-4">
                {dept.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="PhoneIcon" size={16} className="text-muted-foreground flex-shrink-0" />
                  <a
                    href={`tel:${dept.contact.replace(/[^\d]/g, '')}`}
                    className="font-cta font-medium text-text-primary hover:text-primary transition-micro"
                  >
                    {dept.contact}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Icon name="EnvelopeIcon" size={16} className="text-muted-foreground flex-shrink-0" />
                  <a
                    href={`mailto:${dept.email}`}
                    className="font-body text-sm text-text-secondary hover:text-primary transition-micro break-all"
                  >
                    {dept.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Icon name="ClockIcon" size={16} className="text-muted-foreground flex-shrink-0" />
                  <span className="font-body text-sm text-text-secondary">
                    {dept.hours}
                  </span>
                </div>
              </div>

              {dept.id === 'crisis-support' && (
                <div className="mt-4 pt-4 border-t border-accent/20">
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:988"
                      className="bg-accent text-white px-4 py-2 rounded-lg font-cta font-medium hover:bg-accent/90 transition-all text-center text-sm flex items-center justify-center gap-2"
                    >
                      <Icon name="PhoneIcon" size={16} />
                      Call 988 - Crisis Lifeline
                    </a>
                    <a
                      href="tel:911"
                      className="bg-error text-error-foreground px-4 py-2 rounded-lg font-cta font-medium hover:bg-error/90 transition-healing text-center text-sm flex items-center justify-center gap-2"
                    >
                      <Icon name="PhoneIcon" size={16} />
                      Call 911 - Emergency
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* After Hours Information */}
        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <div className="text-center">
            <Icon name="MoonIcon" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-headline text-xl font-semibold text-text-primary mb-3">
              After Hours & Emergency Support
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="font-body text-text-secondary">
                Outside of regular business hours, our crisis support team remains available 24/7 for mental health emergencies. For non-urgent matters, please leave a voicemail or send an email, and we'll respond first thing the next business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Icon name="PhoneIcon" size={16} />
                  <span>After-hours voicemail monitored</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Icon name="EnvelopeIcon" size={16} />
                  <span>Email responses within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Icon name="ShieldCheckIcon" size={16} />
                  <span>Crisis support always available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentContacts;