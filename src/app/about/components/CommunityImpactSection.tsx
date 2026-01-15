import React from 'react';
import Icon from '@/components/ui/AppIcon';


interface CommunityImpactSectionProps {
  className?: string;
}

const CommunityImpactSection = ({ className = '' }: CommunityImpactSectionProps) => {
  const impactStats = [
  {
    number: '5,200+',
    label: 'Patients Served Annually',
    icon: 'UserGroupIcon',
    description: 'Comprehensive behavioral health services'
  },
  {
    number: '78%',
    label: 'Medicaid/Medicare Patients',
    icon: 'HeartIcon',
    description: 'Serving underserved communities'
  },
  {
    number: '15+',
    label: 'Community Partnerships',
    icon: 'BuildingOfficeIcon',
    description: 'Local organizations and schools'
  }];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-secondary mb-6">
            Community Impact
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment extends beyond individual patient care to strengthening the entire 
            Phoenix community through comprehensive support services and community initiatives.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) =>
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-healing transition-healing border border-border">

              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                name={stat.icon as any}
                size={28}
                className="text-primary" />

              </div>
              <div className="font-headline text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="font-headline text-lg font-semibold text-secondary mb-2">
                {stat.label}
              </h3>
              <p className="font-body text-sm text-text-secondary">
                {stat.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CommunityImpactSection;