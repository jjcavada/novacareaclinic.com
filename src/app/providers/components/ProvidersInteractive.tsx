'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ProviderCard from './ProviderCard';
import Icon from '@/components/ui/AppIcon';

interface Provider {
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
}

type FilterCategory = 'all' | 'clinical' | 'support';

const ProvidersInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  /* Medical & Clinical Leadership */
  const mockProviders: Provider[] = [
    {
      id: 'dr-jacinto',
      name: 'Dr. Leticia Jacinto',
      title: 'Medical Director & Psychiatrist',
      credentials: ['MD', 'Board Certified Psychiatrist'],
      specialties: ['Psychiatric Evaluations', 'Medication Management', 'Treatment Planning', 'Mental Health Treatment'],
      image: "/assets/images/dr-leticia-jacinto-v2.png",
      alt: 'Dr. Leticia Jacinto - Medical Director and Psychiatrist',
      languages: ['English', 'Spanish'],
      bio: 'Dr. Jacinto provides comprehensive psychiatric evaluations and medication management services. With over 15 years of experience, she specializes in treating anxiety, depression, and other mental health conditions with evidence-based approaches.',
      education: ['MD - Medical School', 'Psychiatry Residency'],
      experience: 15
    },
    {
      id: 'anna-manalo',
      name: 'Anna Manalo',
      title: 'Primary Care Physician',
      credentials: ['FNP', 'Family Nurse Practitioner'],
      specialties: ['Primary Care Integration', 'Medical Services', 'Preventive Care', 'Physical Exams'],
      image: "/assets/images/anna-manalo-v2.png",
      alt: 'Anna Manalo, FNP - Primary Care Physician',
      languages: ['English', 'Tagalog'],
      bio: 'Anna provides primary care services and integrates medical care with behavioral health treatment. Her holistic approach ensures patients receive comprehensive care for both physical and mental health needs.',
      education: ['Masters in Nursing', 'Family Nurse Practitioner Certification'],
      experience: 12
    },
    {
      id: 'anne-leveriza',
      name: 'Anne Vargas-Leveriza',
      title: 'Behavioral Health Professional',
      credentials: ['Licensed Behavioral Health Professional'],
      specialties: ['Individual Therapy', 'Behavioral Health Counseling', 'Care Coordination', 'Crisis Intervention'],
      image: "/assets/images/anne-leveriza-v2.png",
      alt: 'Anne Vargas-Leveriza - Behavioral Health Professional',
      languages: ['English'],
      bio: 'Anne specializes in behavioral health counseling and individual therapy services. Her warm and empathetic approach helps patients feel comfortable while working through their mental health challenges.',
      education: ['Masters in Behavioral Health', 'Licensed Professional Counselor'],
      experience: 10
    },

    /* Support Staff */
    {
      id: 'meriam-arguillo',
      name: 'Meriam Arguillo',
      title: 'Clinic Administrator',
      credentials: ['Administrator'],
      specialties: ['Clinic Management', 'Patient Relations', 'Operations'],
      image: "/assets/images/no_image.png",
      alt: 'Meriam Arguillo - Clinic Administrator',
      languages: ['English'],
      bio: 'Meriam ensures the smooth daily operation of the clinic, managing administrative functions and ensuring every patient receives a warm welcome and efficient service.',
      education: ['Healthcare Administration'],
      experience: 8
    },
    {
      id: 'irene-gaccion',
      name: 'Irene Gaccion',
      title: 'Case Manager',
      credentials: ['Case Manager'],
      specialties: ['Care Coordination', 'Resource Navigation', 'Patient Support'],
      image: "/assets/images/no_image.png",
      alt: 'Irene Gaccion - Case Manager',
      languages: ['English'],
      bio: 'Irene assists patients in navigating their care journey, connecting them with community resources and ensuring they have the support systems needed for recovery.',
      education: ['Social Work'],
      experience: 5
    },
    {
      id: 'rae-ann-meneses',
      name: 'Rae Ann Meneses',
      title: 'Medical Assistant',
      credentials: ['CMA'],
      specialties: ['Vitals Monitoring', 'Patient Intake', 'Clinical Support'],
      image: "/assets/images/no_image.png",
      alt: 'Rae Ann Meneses - Medical Assistant',
      languages: ['English'],
      bio: 'Rae Ann provides essential clinical support, ensuring patient vitals are accurate and assisting providers during examinations and treatments.',
      education: ['Certified Medical Assistant'],
      experience: 6
    },
    {
      id: 'rodolfo-leveriza',
      name: 'Rodolfo Leveriza',
      title: 'Behavioral Health Technician',
      credentials: ['BHT'],
      specialties: ['Patient Monitoring', 'Group Support', 'Crisis Support'],
      image: "/assets/images/no_image.png",
      alt: 'Rodolfo Leveriza - Behavioral Health Technician',
      languages: ['English'],
      bio: 'Rodolfo works directly with patients to support their treatment goals, providing mentorship and monitoring in a therapeutic environment.',
      education: ['BHT Certification'],
      experience: 4
    },
    {
      id: 'ricardo-santana',
      name: 'Ricardo Santana',
      title: 'Behavioral Health Technician',
      credentials: ['BHT'],
      specialties: ['Patient Support', 'Safety Monitoring', 'Activity Coordination'],
      image: "/assets/images/no_image.png",
      alt: 'Ricardo Santana - Behavioral Health Technician',
      languages: ['English'],
      bio: 'Ricardo is dedicated to creating a safe and supportive environment for all patients, assisting with daily activities and therapeutic programs.',
      education: ['BHT Certification'],
      experience: 3
    }
  ];

  const isClinicalStaff = (provider: Provider) => {
    const clinicalTitles = ['director', 'psychiatrist', 'physician', 'behavioral health professional', 'fnp'];
    return clinicalTitles.some(title => provider.title.toLowerCase().includes(title));
  };

  const filteredProviders = useMemo(() => {
    let filtered = mockProviders;

    if (activeFilter === 'clinical') {
      filtered = filtered.filter(isClinicalStaff);
    } else if (activeFilter === 'support') {
      filtered = filtered.filter(p => !isClinicalStaff(p));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.title.toLowerCase().includes(query) ||
        p.specialties.some(s => s.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  const clinicalCount = mockProviders.filter(isClinicalStaff).length;
  const supportCount = mockProviders.filter(p => !isClinicalStaff(p)).length;

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-healing-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse space-y-12">
            <div className="text-center space-y-4">
              <div className="h-10 bg-warm-200 rounded-full w-1/3 mx-auto"></div>
              <div className="h-4 bg-warm-100 rounded-full w-2/3 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[500px] bg-warm-100 rounded-3xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-healing-pattern">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-warm-200 shadow-soft mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-soft-pulse"></span>
              <span className="font-body text-sm font-medium text-warm-600">
                Compassionate Care Team
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-warm-800 mb-6 leading-tight">
              Meet the People Behind{' '}
              <span className="text-gradient">Your Healing</span>
            </h1>

            <p className="font-body text-lg text-warm-500 leading-relaxed mb-8">
              Our experienced team of healthcare professionals is dedicated to providing compassionate,
              evidence-based care. Each member brings unique expertise and a genuine commitment
              to supporting your wellness journey.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="font-headline text-3xl sm:text-4xl text-primary mb-1">
                  {mockProviders.reduce((acc, p) => acc + p.experience, 0)}+
                </div>
                <div className="font-body text-sm text-warm-400">Combined Years</div>
              </div>
              <div className="w-px h-12 bg-warm-200"></div>
              <div className="text-center">
                <div className="font-headline text-3xl sm:text-4xl text-secondary mb-1">
                  {mockProviders.length}
                </div>
                <div className="font-body text-sm text-warm-400">Team Members</div>
              </div>
              <div className="w-px h-12 bg-warm-200"></div>
              <div className="text-center">
                <div className="font-headline text-3xl sm:text-4xl text-accent mb-1">
                  3
                </div>
                <div className="font-body text-sm text-warm-400">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-warm-50 border border-warm-100">
              {[
                { key: 'all', label: 'All Staff', count: mockProviders.length },
                { key: 'clinical', label: 'Clinical', count: clinicalCount },
                { key: 'support', label: 'Support', count: supportCount },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as FilterCategory)}
                  className={`px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-300 ${activeFilter === filter.key
                    ? 'bg-white text-warm-800 shadow-soft'
                    : 'text-warm-500 hover:text-warm-700'
                    }`}
                >
                  {filter.label}
                  <span className={`ml-1.5 text-xs ${activeFilter === filter.key ? 'text-primary' : 'text-warm-400'
                    }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search & View Toggle */}
            <div className="flex items-center gap-3">
              {/* Search Input */}
              <div className="relative">
                <Icon
                  name="MagnifyingGlassIcon"
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-400"
                />
                <input
                  type="text"
                  placeholder="Search by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-64 rounded-xl border border-warm-200 bg-white font-body text-sm text-warm-700 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-600 transition-colors"
                  >
                    <Icon name="XMarkIcon" size={16} />
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center p-1 rounded-xl bg-warm-50 border border-warm-100">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid'
                    ? 'bg-white text-primary shadow-soft'
                    : 'text-warm-400 hover:text-warm-600'
                    }`}
                  aria-label="Grid view"
                >
                  <Icon name="Squares2X2Icon" size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list'
                    ? 'bg-white text-primary shadow-soft'
                    : 'text-warm-400 hover:text-warm-600'
                    }`}
                  aria-label="List view"
                >
                  <Icon name="ListBulletIcon" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProviders.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warm-100 flex items-center justify-center">
              <Icon name="UserGroupIcon" size={32} className="text-warm-400" />
            </div>
            <h3 className="font-headline text-xl text-warm-700 mb-2">No team members found</h3>
            <p className="font-body text-warm-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div
            className={`${viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
              : 'flex flex-col gap-6 max-w-4xl mx-auto'
              }`}
          >
            {filteredProviders.map((provider, index) => (
              <div
                key={provider.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProviderCard provider={provider} index={index} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-800 to-warm-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body text-lg text-warm-300 mb-8 max-w-2xl mx-auto">
            Our team is here to support you every step of the way. Schedule a consultation
            and take the first step toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-organic bg-white text-warm-800 hover:bg-warm-50 px-8 py-4 font-semibold shadow-lift">
              <Icon name="CalendarDaysIcon" size={20} className="mr-2" />
              Schedule Appointment
            </button>
            <button className="btn-organic border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvidersInteractive;
