import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  icon: string;
}

interface OurTeamSectionProps {
  className?: string;
}

const OurTeamSection = ({ className = '' }: OurTeamSectionProps) => {
  const teamMembers: TeamMember[] = [
    {
      id: 'dr-leticia-jacinto',
      name: 'Dr. Leticia Jacinto',
      title: 'Psychiatrist',
      specialty: 'Mental Health & Psychiatric Care',
      icon: 'UserIcon'
    },
    {
      id: 'anne-leveriza',
      name: 'Anne Leveriza, LPC and BHP',
      title: 'Behavioral Health Professional',
      specialty: 'Behavioral Health & Counseling',
      icon: 'HeartIcon'
    },
    {
      id: 'anna-manalo',
      name: 'Anna Manalo, FNP',
      title: 'Primary Care Physician',
      specialty: 'Family Medicine & Primary Care',
      icon: 'UserGroupIcon'
    }
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Team
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Meet our dedicated healthcare professionals who are committed to providing exceptional care and support for your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-healing transition-healing text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-healing">
                  <Icon
                    name={member.icon as any}
                    size={36}
                    className="text-primary"
                  />
                </div>

                <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                  {member.name}
                </h3>

                <div className="font-cta font-medium text-primary mb-2">
                  {member.title}
                </div>

                <p className="font-body text-sm text-text-secondary">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted rounded-lg p-8 text-center">
          <Icon name="PhoneIcon" size={32} className="text-foreground mx-auto mb-4" />
          <h3 className="font-headline text-xl font-semibold text-text-primary mb-3">
            Connect with Our Team
          </h3>
          <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
            Our healthcare professionals are here to provide personalized care tailored to your individual needs. Contact us to schedule an appointment or consultation.
          </p>
          <a
            href="/schedule-appointment"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-cta font-medium hover:bg-primary/90 transition-healing inline-flex items-center gap-2"
          >
            <Icon name="CalendarDaysIcon" size={20} />
            Schedule an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;