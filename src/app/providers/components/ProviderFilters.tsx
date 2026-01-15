'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOptions {
  specialties: string[];
  languages: string[];
  availability: string[];
  acceptingNew: boolean;
  telehealth: boolean;
}

interface ProviderFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void;
}

const ProviderFilters = ({ onFiltersChange }: ProviderFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    specialties: [],
    languages: [],
    availability: [],
    acceptingNew: false,
    telehealth: false,
  });

  const specialtyOptions = [
    'Depression & Anxiety',
    'Trauma & PTSD',
    'Substance Use',
    'Bipolar Disorder',
    'ADHD',
    'Eating Disorders',
    'Grief & Loss',
    'Relationship Issues',
    'Family Therapy',
    'Group Therapy'
  ];

  const languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
    'Mandarin'
  ];

  const availabilityOptions = [
    'Available',
    'Limited',
    'Waitlist'
  ];

  const handleSpecialtyChange = (specialty: string) => {
    const newSpecialties = filters.specialties.includes(specialty)
      ? filters.specialties.filter(s => s !== specialty)
      : [...filters.specialties, specialty];
    
    const newFilters = { ...filters, specialties: newSpecialties };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleLanguageChange = (language: string) => {
    const newLanguages = filters.languages.includes(language)
      ? filters.languages.filter(l => l !== language)
      : [...filters.languages, language];
    
    const newFilters = { ...filters, languages: newLanguages };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleAvailabilityChange = (availability: string) => {
    const newAvailability = filters.availability.includes(availability)
      ? filters.availability.filter(a => a !== availability)
      : [...filters.availability, availability];
    
    const newFilters = { ...filters, availability: newAvailability };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleCheckboxChange = (field: 'acceptingNew' | 'telehealth') => {
    const newFilters = { ...filters, [field]: !filters[field] };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterOptions = {
      specialties: [],
      languages: [],
      availability: [],
      acceptingNew: false,
      telehealth: false,
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = 
    filters.specialties.length > 0 ||
    filters.languages.length > 0 ||
    filters.availability.length > 0 ||
    filters.acceptingNew ||
    filters.telehealth;

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline font-semibold text-lg text-foreground">
          Filter Providers
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-micro"
        >
          <Icon 
            name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"} 
            size={20} 
          />
        </button>
      </div>

      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        {/* Quick Filters */}
        <div>
          <h4 className="font-headline font-medium text-sm text-foreground mb-3">
            Quick Filters
          </h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.acceptingNew}
                onChange={() => handleCheckboxChange('acceptingNew')}
                className="rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-foreground">Accepting new patients</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.telehealth}
                onChange={() => handleCheckboxChange('telehealth')}
                className="rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-foreground">Offers telehealth</span>
            </label>
          </div>
        </div>

        {/* Availability */}
        <div>
          <h4 className="font-headline font-medium text-sm text-foreground mb-3">
            Availability
          </h4>
          <div className="space-y-2">
            {availabilityOptions.map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.availability.includes(option)}
                  onChange={() => handleAvailabilityChange(option)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-sm text-foreground">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="font-headline font-medium text-sm text-foreground mb-3">
            Specialties
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {specialtyOptions.map((specialty) => (
              <label key={specialty} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.specialties.includes(specialty)}
                  onChange={() => handleSpecialtyChange(specialty)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-sm text-foreground">{specialty}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h4 className="font-headline font-medium text-sm text-foreground mb-3">
            Languages
          </h4>
          <div className="space-y-2">
            {languageOptions.map((language) => (
              <label key={language} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.languages.includes(language)}
                  onChange={() => handleLanguageChange(language)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-sm text-foreground">{language}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="w-full bg-muted text-muted-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted/80 transition-micro"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default ProviderFilters;