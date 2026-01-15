'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Provider {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  alt: string;
  availability: string;
  rating: number;
  languages: string[];
}

interface ProviderSelectorProps {
  selectedProvider: string;
  onProviderSelect: (providerId: string) => void;
  appointmentType: string;
}

const ProviderSelector = ({ selectedProvider, onProviderSelect, appointmentType }: ProviderSelectorProps) => {
  const providers: Provider[] = [
    {
      id: 'any-provider',
      name: 'Any Available Provider',
      title: 'First Available',
      specialties: ['General Care'],
      image: "https://images.unsplash.com/photo-1592392821486-71f028a00581",
      alt: 'Diverse group of healthcare professionals in medical scrubs standing together',
      availability: 'Earliest availability',
      rating: 4.8,
      languages: ['English', 'Spanish']
    },
    {
      id: 'dr-leticia-jacinto',
      name: 'Dr. Leticia Jacinto',
      title: 'Psychiatrist',
      specialties: ['Psychiatric Evaluations', 'Medication Management', 'Mental Health Treatment'],
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_177d293e3-1762273902288.png",
      alt: 'Professional Hispanic woman doctor with dark hair in white medical coat',
      availability: 'Available this week',
      rating: 4.9,
      languages: ['English', 'Spanish']
    },
    {
      id: 'anne-vargas-leveriza',
      name: 'Anne Vargas-Leveriza',
      title: 'Behavioral Health Professional',
      specialties: ['Individual Therapy', 'Behavioral Health Counseling', 'Care Coordination'],
      image: "https://images.unsplash.com/photo-1704159595056-1ba2a7448dc6",
      alt: 'Professional woman with curly hair in teal blouse smiling confidently in clinical setting',
      availability: 'Available this week',
      rating: 4.9,
      languages: ['English']
    },
    {
      id: 'anna-manalo-fnp',
      name: 'Anna Manalo, FNP',
      title: 'Primary Care Physician',
      specialties: ['Primary Care Integration', 'Medical Services', 'Preventive Care'],
      image: "https://images.unsplash.com/photo-1706799191377-96a80beaee24",
      alt: 'Professional Filipino woman nurse practitioner in medical scrubs with stethoscope',
      availability: 'Available next week',
      rating: 4.8,
      languages: ['English', 'Tagalog']
    }];

  const filteredProviders = appointmentType === 'crisis-consultation' ?
    providers.filter((p) => p.specialties.some((s) => s.includes('Crisis') || s.includes('General'))) :
    providers;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {filteredProviders.map((provider) =>
          <div
            key={provider.id}
            onClick={() => onProviderSelect(provider.id)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-sm ${selectedProvider === provider.id ?
                'border-primary bg-bg-light' : 'border-border hover:border-primary/50'}`
            }>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AppImage
                  src={provider.image}
                  alt={provider.alt}
                  className="w-16 h-16 rounded-full object-cover" />

              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-headline font-semibold text-foreground">
                      {provider.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {provider.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="StarIcon" size={16} className="text-warning fill-current" />
                    <span>{provider.rating}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {provider.specialties.slice(0, 3).map((specialty, index) =>
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">

                        {specialty}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Icon name="CalendarIcon" size={12} />
                      {provider.availability}
                    </span>
                    <span className="flex items-center gap-1 mt-1 sm:mt-0">
                      <Icon name="LanguageIcon" size={12} />
                      {provider.languages.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default ProviderSelector;