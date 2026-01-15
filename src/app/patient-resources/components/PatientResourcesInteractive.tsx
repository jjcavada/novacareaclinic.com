'use client';

import React, { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import CrisisResourcesSection from './CrisisResourcesSection';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  externalUrl: string;
  category: string;
  language: string;
  source: string; // "NIMH", "NAMI", "CDC", "SAMHSA"
  tags: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CrisisResource {
  id: string;
  name: string;
  description: string;
  phone: string;
  website?: string;
  available: string;
  type: 'hotline' | 'text' | 'chat' | 'emergency';
}

const PatientResourcesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Real authoritative mental health resources from NIMH, NAMI, CDC, and SAMHSA
  const resources: Resource[] = [
    // DEPRESSION RESOURCES
    {
      id: 'dep-1',
      title: 'Understanding Depression',
      description: 'Comprehensive guide from the National Institute of Mental Health covering symptoms, causes, diagnosis, and treatment options for depression.',
      icon: 'CloudIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/depression',
      category: 'depression',
      language: 'English',
      source: 'NIMH',
      tags: ['depression', 'symptoms', 'treatment', 'diagnosis', 'mental health']
    },
    {
      id: 'dep-2',
      title: 'Depresion - Guia Completa',
      description: 'Informacion del Instituto Nacional de Salud Mental sobre la depresion, incluyendo sintomas, causas, y opciones de tratamiento.',
      icon: 'CloudIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/espanol/depression-listing',
      category: 'depression',
      language: 'Espanol',
      source: 'NIMH',
      tags: ['depresion', 'sintomas', 'tratamiento', 'salud mental']
    },
    {
      id: 'dep-3',
      title: 'Depression - NAMI Guide',
      description: 'Learn about depression from the National Alliance on Mental Illness, including warning signs, treatment approaches, and how to support loved ones.',
      icon: 'CloudIcon',
      externalUrl: 'https://www.nami.org/about-mental-illness/mental-health-conditions/depression/',
      category: 'depression',
      language: 'English',
      source: 'NAMI',
      tags: ['depression', 'support', 'family', 'treatment', 'recovery']
    },

    // ANXIETY RESOURCES
    {
      id: 'anx-1',
      title: 'Anxiety Disorders Overview',
      description: 'Detailed information from NIMH about different types of anxiety disorders, including generalized anxiety, panic disorder, and social anxiety.',
      icon: 'ExclamationCircleIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
      category: 'anxiety',
      language: 'English',
      source: 'NIMH',
      tags: ['anxiety', 'panic', 'social anxiety', 'treatment', 'symptoms']
    },
    {
      id: 'anx-2',
      title: 'Trastornos de Ansiedad',
      description: 'Informacion del NIMH sobre los diferentes tipos de trastornos de ansiedad, incluyendo ansiedad generalizada, panico y ansiedad social.',
      icon: 'ExclamationCircleIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/espanol/anxiety-disorders-listing',
      category: 'anxiety',
      language: 'Espanol',
      source: 'NIMH',
      tags: ['ansiedad', 'panico', 'tratamiento', 'sintomas']
    },
    {
      id: 'anx-3',
      title: 'Anxiety Disorders - NAMI',
      description: 'Comprehensive NAMI resource covering all anxiety disorders, coping strategies, and how to find help and support.',
      icon: 'ExclamationCircleIcon',
      externalUrl: 'https://www.nami.org/about-mental-illness/mental-health-conditions/anxiety-disorders/',
      category: 'anxiety',
      language: 'English',
      source: 'NAMI',
      tags: ['anxiety', 'coping', 'support', 'treatment', 'help']
    },

    // ADHD RESOURCES
    {
      id: 'adhd-1',
      title: 'ADHD: What You Need to Know',
      description: 'Essential information from NIMH about Attention-Deficit/Hyperactivity Disorder, including symptoms in children and adults, and treatment options.',
      icon: 'BoltIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-what-you-need-to-know',
      category: 'adhd',
      language: 'English',
      source: 'NIMH',
      tags: ['adhd', 'attention', 'hyperactivity', 'children', 'adults', 'treatment']
    },
    {
      id: 'adhd-2',
      title: 'TDAH - Guia Informativa',
      description: 'Informacion esencial del NIMH sobre el Trastorno por Deficit de Atencion e Hiperactividad, incluyendo sintomas y tratamiento.',
      icon: 'BoltIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/espanol/adhd-listing',
      category: 'adhd',
      language: 'Espanol',
      source: 'NIMH',
      tags: ['tdah', 'atencion', 'hiperactividad', 'ninos', 'tratamiento']
    },
    {
      id: 'adhd-3',
      title: 'About ADHD - CDC',
      description: 'CDC resource providing facts about ADHD, including how it is diagnosed, treatment recommendations, and tips for managing symptoms.',
      icon: 'BoltIcon',
      externalUrl: 'https://www.cdc.gov/adhd/about/index.html',
      category: 'adhd',
      language: 'English',
      source: 'CDC',
      tags: ['adhd', 'diagnosis', 'children', 'management', 'facts']
    },
    {
      id: 'adhd-4',
      title: 'ADHD in Adults - CDC',
      description: 'Specialized CDC information about ADHD in adults, including unique symptoms, workplace challenges, and treatment approaches.',
      icon: 'BoltIcon',
      externalUrl: 'https://www.cdc.gov/adhd/php/adults/index.html',
      category: 'adhd',
      language: 'English',
      source: 'CDC',
      tags: ['adhd', 'adults', 'workplace', 'symptoms', 'treatment']
    },

    // BIPOLAR RESOURCES
    {
      id: 'bip-1',
      title: 'Bipolar Disorder Overview',
      description: 'NIMH publication explaining bipolar disorder, including types, symptoms, causes, and evidence-based treatment approaches.',
      icon: 'ArrowsRightLeftIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/bipolar-disorder',
      category: 'bipolar',
      language: 'English',
      source: 'NIMH',
      tags: ['bipolar', 'mood', 'mania', 'depression', 'treatment']
    },
    {
      id: 'bip-2',
      title: 'Trastorno Bipolar',
      description: 'Publicacion del NIMH que explica el trastorno bipolar, incluyendo tipos, sintomas, causas y enfoques de tratamiento.',
      icon: 'ArrowsRightLeftIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/espanol/bipolar-disorder-listing',
      category: 'bipolar',
      language: 'Espanol',
      source: 'NIMH',
      tags: ['bipolar', 'animo', 'mania', 'depresion', 'tratamiento']
    },
    {
      id: 'bip-3',
      title: 'Bipolar Disorder - NAMI',
      description: 'NAMI guide to understanding bipolar disorder, living with the condition, and supporting family members affected by it.',
      icon: 'ArrowsRightLeftIcon',
      externalUrl: 'https://www.nami.org/about-mental-illness/mental-health-conditions/bipolar-disorder/',
      category: 'bipolar',
      language: 'English',
      source: 'NAMI',
      tags: ['bipolar', 'family', 'support', 'living', 'treatment']
    },

    // PTSD RESOURCES
    {
      id: 'ptsd-1',
      title: 'Post-Traumatic Stress Disorder',
      description: 'NIMH resource about PTSD including who develops it, symptoms, how it is diagnosed, and effective treatments.',
      icon: 'ShieldExclamationIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/post-traumatic-stress-disorder-ptsd',
      category: 'ptsd',
      language: 'English',
      source: 'NIMH',
      tags: ['ptsd', 'trauma', 'stress', 'treatment', 'symptoms']
    },
    {
      id: 'ptsd-2',
      title: 'Trastorno de Estres Postraumatico',
      description: 'Recurso del NIMH sobre el TEPT, incluyendo quien lo desarrolla, sintomas, diagnostico y tratamientos efectivos.',
      icon: 'ShieldExclamationIcon',
      externalUrl: 'https://www.nimh.nih.gov/health/publications/espanol/ptsd-listing',
      category: 'ptsd',
      language: 'Espanol',
      source: 'NIMH',
      tags: ['tept', 'trauma', 'estres', 'tratamiento', 'sintomas']
    },
    {
      id: 'ptsd-3',
      title: 'PTSD - SAMHSA',
      description: 'SAMHSA information on PTSD, trauma-informed care, and finding treatment services for trauma-related conditions.',
      icon: 'ShieldExclamationIcon',
      externalUrl: 'https://www.samhsa.gov/mental-health/what-is-mental-health/conditions/ptsd',
      category: 'ptsd',
      language: 'English',
      source: 'SAMHSA',
      tags: ['ptsd', 'trauma', 'care', 'treatment', 'services']
    },
    {
      id: 'ptsd-4',
      title: 'PTSD - NAMI',
      description: 'NAMI guide to PTSD covering causes, symptoms, treatment options, and how to support someone with PTSD.',
      icon: 'ShieldExclamationIcon',
      externalUrl: 'https://www.nami.org/about-mental-illness/mental-health-conditions/ptsd/',
      category: 'ptsd',
      language: 'English',
      source: 'NAMI',
      tags: ['ptsd', 'support', 'family', 'treatment', 'recovery']
    }
  ];

  // Calculate category counts dynamically
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return resources.length;
    return resources.filter(r => r.category === categoryId).length;
  };

  const categories: Category[] = [
    { id: 'all', name: 'All Resources', icon: 'RectangleStackIcon', count: getCategoryCount('all') },
    { id: 'depression', name: 'Depression', icon: 'CloudIcon', count: getCategoryCount('depression') },
    { id: 'anxiety', name: 'Anxiety Disorders', icon: 'ExclamationCircleIcon', count: getCategoryCount('anxiety') },
    { id: 'adhd', name: 'ADHD', icon: 'BoltIcon', count: getCategoryCount('adhd') },
    { id: 'bipolar', name: 'Bipolar Disorder', icon: 'ArrowsRightLeftIcon', count: getCategoryCount('bipolar') },
    { id: 'ptsd', name: 'PTSD', icon: 'ShieldExclamationIcon', count: getCategoryCount('ptsd') }
  ];

  const mockCrisisResources: CrisisResource[] = [
    {
      id: '1',
      name: '988 Suicide & Crisis Lifeline',
      description: 'Free and confidential emotional support for people in suicidal crisis or emotional distress.',
      phone: '988',
      website: 'https://988lifeline.org',
      available: '24/7',
      type: 'hotline'
    },
    {
      id: '2',
      name: 'Crisis Text Line',
      description: 'Text-based crisis support for anyone in crisis. Text HOME to connect with a crisis counselor.',
      phone: '741741',
      website: 'https://crisistextline.org',
      available: '24/7',
      type: 'text'
    },
    {
      id: '3',
      name: 'NAMI Phoenix Crisis Support',
      description: 'Local crisis intervention and support services for individuals and families in the Phoenix area.',
      phone: '(602) 244-8166',
      available: 'Mon-Fri 9AM-5PM',
      type: 'hotline'
    },
    {
      id: '4',
      name: 'Emergency Services',
      description: 'For immediate medical emergencies or if someone is in immediate danger.',
      phone: '911',
      available: '24/7',
      type: 'emergency'
    }
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="h-64 bg-muted rounded"></div>
              <div className="lg:col-span-3 space-y-4">
                <div className="h-12 bg-muted rounded"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-48 bg-muted rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = searchTerm === '' ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Crisis Resources - Always Visible */}
        <div className="mb-12">
          <CrisisResourcesSection resources={mockCrisisResources} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search Bar */}
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search resources, guides, and tools..."
            />

            {/* Resources Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-2xl text-foreground">
                  {activeCategory === 'all' ? 'All Resources' : categories.find((cat) => cat.id === activeCategory)?.name}
                </h2>
                <span className="text-muted-foreground text-sm">
                  {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
                </span>
              </div>

              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      title={resource.title}
                      description={resource.description}
                      icon={resource.icon}
                      image={resource.image}
                      imageAlt={resource.imageAlt}
                      externalUrl={resource.externalUrl}
                      category={resource.category}
                      language={resource.language}
                      source={resource.source}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-muted-foreground text-2xl">📚</span>
                  </div>
                  <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                    No resources found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or selecting a different category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientResourcesInteractive;