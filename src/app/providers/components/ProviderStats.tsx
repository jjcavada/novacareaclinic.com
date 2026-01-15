import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProviderStatsProps {
  totalProviders: number;
  availableProviders: number;
  specialties: number;
  languages: number;
}

const ProviderStats = ({ totalProviders, availableProviders, specialties, languages }: ProviderStatsProps) => {
  const stats = [
    {
      icon: 'UserGroupIcon' as const,
      label: 'Total Providers',
      value: totalProviders,
      color: 'text-primary'
    },
    {
      icon: 'CheckCircleIcon' as const,
      label: 'Available Now',
      value: availableProviders,
      color: 'text-success'
    },
    {
      icon: 'AcademicCapIcon' as const,
      label: 'Specialties',
      value: specialties,
      color: 'text-accent'
    },
    {
      icon: 'LanguageIcon' as const,
      label: 'Languages',
      value: languages,
      color: 'text-secondary'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <Icon 
              name={stat.icon} 
              size={24} 
              className={stat.color}
            />
          </div>
          <div className="font-headline font-bold text-2xl text-foreground mb-1">
            {stat.value}
          </div>
          <div className="font-body text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProviderStats;