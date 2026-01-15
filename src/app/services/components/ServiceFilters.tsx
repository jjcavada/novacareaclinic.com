'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceFiltersProps {
  selectedCategory: string;
  selectedCondition: string;
  selectedProvider: string;
  onCategoryChange: (category: string) => void;
  onConditionChange: (condition: string) => void;
  onProviderChange: (provider: string) => void;
  categories: string[];
  conditions: string[];
  providers: string[];
}

const ServiceFilters = ({
  selectedCategory,
  selectedCondition,
  selectedProvider,
  onCategoryChange,
  onConditionChange,
  onProviderChange,
  categories,
  conditions,
  providers
}: ServiceFiltersProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="FunnelIcon" size={20} className="text-primary" />
        <h3 className="font-headline font-semibold text-lg text-foreground">
          Filter Services
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Service Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Condition/Symptom
          </label>
          <select
            value={selectedCondition}
            onChange={(e) => onConditionChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Conditions</option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Provider Specialty
          </label>
          <select
            value={selectedProvider}
            onChange={(e) => onProviderChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Specialties</option>
            {providers.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilters;