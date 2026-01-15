'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProviderCardProps {
  provider: {
    id: string;
    name: string;
    title: string;
    credentials: string[];
    specialties: string[];
    image: string;
    alt: string;
    languages: string[];
    bio: string;
    education: string[];
    experience: number;
    imagePosition?: string;
  };
  index?: number;
}

const ProviderCard = ({ provider, index = 0 }: ProviderCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="card-organic group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Decorative gradient orb */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-warm-200 to-warm-300 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
      />

      {/* Image Section */}
      <div className="relative overflow-hidden">
        {/* Organic shape overlay */}
        <div className="absolute inset-0 z-10">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
            style={{ height: '80px' }}
          >
            <path
              d="M0,80 L0,40 Q100,70 200,40 Q300,10 400,40 L400,80 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Experience badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="floating-badge bg-white/90 text-warm-700 border-warm-200">
            <Icon name="AcademicCapIcon" size={14} className="mr-1.5 opacity-70" />
            {provider.experience}+ years
          </div>
        </div>

        {/* Languages badge */}
        {provider.languages.length > 0 && (
          <div className="absolute top-4 right-4 z-20">
            <div className="floating-badge bg-white/90 backdrop-blur-sm border border-white/50">
              <Icon name="LanguageIcon" size={14} className="mr-1.5 text-warm-500" />
              {provider.languages.join(' · ')}
            </div>
          </div>
        )}

        {/* Provider Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-warm-100 to-warm-200">
          <AppImage
            src={provider.image}
            alt={provider.alt}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out-expo ${isHovered ? 'scale-105' : 'scale-100'} ${
              provider.imagePosition === 'center' ? 'object-center' : 'object-top'
            }`}
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative px-6 pb-6 -mt-6 z-20">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="font-headline text-2xl text-warm-800 mb-1 group-hover:text-warm-900 transition-colors duration-300">
            {provider.name}
          </h3>
          <p className="font-body font-medium text-sm text-warm-500">
            {provider.title}
          </p>
        </div>

        {/* Credentials */}
        {provider.credentials && provider.credentials.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {provider.credentials.map((credential, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-warm-100 text-warm-700 border border-warm-200/50"
              >
                {credential}
              </span>
            ))}
          </div>
        )}

        {/* Bio - Expandable */}
        <div className="mb-5">
          <p className={`font-body text-warm-600 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'
            }`}>
            {provider.bio}
          </p>
          {provider.bio.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-primary font-medium text-sm hover:text-primary-accessible transition-colors inline-flex items-center gap-1"
            >
              {isExpanded ? 'Show less' : 'Read more'}
              <Icon
                name="ChevronDownIcon"
                size={14}
                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

        {/* Specialties */}
        {provider.specialties && provider.specialties.length > 0 && (
          <div className="mb-5">
            <h4 className="font-body font-semibold text-xs uppercase tracking-wider text-warm-400 mb-2">
              Specialties
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {provider.specialties.slice(0, isExpanded ? undefined : 3).map((specialty, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-warm-50 text-warm-600 border border-warm-100 transition-all duration-200 hover:bg-warm-100 hover:border-warm-200"
                >
                  {specialty}
                </span>
              ))}
              {!isExpanded && provider.specialties.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-warm-100 text-warm-600 border border-warm-200">
                  +{provider.specialties.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button className="btn-organic btn-organic-primary w-full group/btn relative overflow-hidden bg-warm-800 text-white hover:bg-warm-900 border-none">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>View Full Profile</span>
            <Icon
              name="ArrowRightIcon"
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProviderCard;
