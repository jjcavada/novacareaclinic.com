'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface TeamIntroSectionProps {
  className?: string;
}

const TeamIntroSection = ({ className = '' }: TeamIntroSectionProps) => {
  // Updated with actual staff from Our Staff Section
  const leadershipTeam = [
    {
      name: 'Dr. Leticia Jacinto',
      role: 'Psychiatrist',
      specialty: 'Psychiatric Evaluations & Medication Management',
      image: "/assets/images/latecia jacintofinal.jpeg",
      alt: 'Professional Hispanic woman doctor with dark hair in white medical coat',
      credentials: 'MD, Board Certified Psychiatrist',
      experience: '15+ years in psychiatry'
    },
    {
      name: 'Anne Leveriza',
      role: 'Behavioral Health Professional',
      specialty: 'Individual Therapy & Behavioral Health Counseling',
      image: "/assets/images/Anne Leverizafinal.jpeg",
      alt: 'Professional woman with curly hair in teal blouse smiling confidently in clinical setting',
      credentials: 'Licensed Behavioral Health Professional',
      experience: '10+ years in behavioral health'
    },
    {
      name: 'Anna Manalo, FNP',
      role: 'Primary Care Physician',
      specialty: 'Primary Care Integration & Medical Services',
      image: "/assets/images/ann manalofinals.jpeg",
      alt: 'Professional Filipino woman nurse practitioner in medical scrubs with stethoscope',
      credentials: 'FNP, Family Nurse Practitioner',
      experience: '12+ years in primary care',
      imagePosition: 'center'
    }];

  const teamStats = [
    {
      number: '3',
      label: 'Staff Members',
      icon: 'UserGroupIcon'
    },
    {
      number: '3',
      label: 'Languages Spoken',
      icon: 'GlobeAltIcon'
    },
    {
      number: '37+',
      label: 'Years Combined Experience',
      icon: 'AcademicCapIcon'
    },
    {
      number: '100%',
      label: 'Licensed & Certified',
      icon: 'ShieldCheckIcon'
    }];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-secondary mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of licensed professionals brings decades of combined experience
            in behavioral health, primary care, and community wellness to serve Phoenix's most vulnerable populations.
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) =>
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-healing transition-healing border border-border">

              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className="text-primary" />

              </div>
              <div className="font-headline text-2xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="font-headline font-semibold text-secondary">
                {stat.label}
              </p>
            </div>
          )}
        </div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leadershipTeam.map((member, index) =>
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-healing transition-healing border border-border">

              <div className="aspect-square overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.alt}
                  className={`w-full h-full object-cover hover:scale-105 transition-all duration-300 ${
                    (member as any).imagePosition === 'center' ? 'object-center' : 'object-top'
                  }`} />

              </div>

              <div className="p-6">
                <h3 className="font-headline text-lg font-semibold text-secondary mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="font-body text-text-secondary text-sm mb-3">
                  {member.specialty}
                </p>

                <div className="space-y-1 mb-4">
                  <p className="font-body text-xs text-text-secondary">
                    {member.credentials}
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    {member.experience}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Icon name="CheckBadgeIcon" size={16} className="text-success" />
                  <span className="font-body text-xs text-success">Licensed & Certified</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-bg-light rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-secondary mb-6">
            Experience Our Comprehensive Care Team
          </h3>
          <p className="font-body text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Our clinical team works together to provide integrated, culturally competent care
            tailored to your unique needs. From psychiatric services to primary care integration,
            we're here to support your wellness journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/providers"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing shadow-sm hover:shadow-healing inline-flex items-center justify-center gap-2">

              <Icon name="UserGroupIcon" size={20} />
              Meet All Our Staff
            </Link>

            <Link
              href="/schedule-appointment"
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-cta font-semibold hover:bg-primary hover:text-primary-foreground transition-healing inline-flex items-center justify-center gap-2">

              <Icon name="CalendarIcon" size={20} />
              Schedule Consultation
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Icon name="ClockIcon" size={16} className="text-primary" />
              <span>Same-day appointments available</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="PhoneIcon" size={16} className="text-primary" />
              <span>24/7 crisis support</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamIntroSection;