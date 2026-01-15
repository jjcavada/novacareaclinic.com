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
  downloadUrl?: string;
  externalUrl?: string;
  category: string;
  language: string;
  fileType?: string;
  fileSize?: string;
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

  const mockResources: Resource[] = [
    {
      id: '1',
      title: 'Pre-Visit Preparation Checklist',
      description: 'Complete guide to prepare for your first appointment, including what to bring and what to expect during your visit.',
      icon: 'ClipboardDocumentCheckIcon',
      image: "https://images.unsplash.com/photo-1666214280577-5f90bc36be92",
      imageAlt: 'Healthcare professional reviewing checklist with patient in bright medical office',
      downloadUrl: '/resources/pre-visit-checklist.pdf',
      category: 'preparation',
      language: 'English',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      tags: ['appointment', 'preparation', 'first-visit']
    },
    {
      id: '2',
      title: 'Lista de Preparación para la Visita',
      description: 'Guía completa para prepararse para su primera cita, incluyendo qué traer y qué esperar durante su visita.',
      icon: 'ClipboardDocumentCheckIcon',
      downloadUrl: '/resources/pre-visit-checklist-es.pdf',
      category: 'preparation',
      language: 'Spanish',
      fileType: 'PDF',
      fileSize: '2.3 MB',
      tags: ['cita', 'preparación', 'primera-visita']
    },
    {
      id: '3',
      title: 'Understanding Depression Treatment Timeline',
      description: 'Learn about the typical progression of depression treatment, from initial assessment to recovery milestones.',
      icon: 'ChartBarIcon',
      image: "https://images.unsplash.com/photo-1620302044818-4209fdb10e62",
      imageAlt: 'Mental health timeline chart showing treatment progress stages with colorful infographic elements',
      externalUrl: '/patient-resources/depression-timeline',
      category: 'treatment',
      language: 'English',
      tags: ['depression', 'timeline', 'treatment', 'recovery']
    },
    {
      id: '4',
      title: 'Family Support Guide for Anxiety Disorders',
      description: 'Comprehensive resource for family members supporting loved ones with anxiety disorders, including communication strategies.',
      icon: 'HeartIcon',
      image: "https://images.unsplash.com/photo-1585945148306-db646373834d",
      imageAlt: 'Diverse family sitting together on couch having supportive conversation in warm living room',
      downloadUrl: '/resources/family-anxiety-support.pdf',
      category: 'family',
      language: 'English',
      fileType: 'PDF',
      fileSize: '3.7 MB',
      tags: ['family', 'anxiety', 'support', 'communication']
    },
    {
      id: '5',
      title: 'Coping Strategies Workbook',
      description: 'Interactive workbook with evidence-based coping strategies for managing stress, anxiety, and depression symptoms.',
      icon: 'BookOpenIcon',
      downloadUrl: '/resources/coping-strategies-workbook.pdf',
      category: 'wellness',
      language: 'English',
      fileType: 'PDF',
      fileSize: '5.2 MB',
      tags: ['coping', 'strategies', 'workbook', 'self-help']
    },
    {
      id: '6',
      title: 'Medication Management Guide',
      description: 'Essential information about psychiatric medications, side effects, and how to work with your healthcare team.',
      icon: 'BeakerIcon',
      image: "https://images.unsplash.com/photo-1666214276372-24e331683e78",
      imageAlt: 'Pharmacist explaining medication instructions to patient at modern pharmacy counter',
      downloadUrl: '/resources/medication-management.pdf',
      category: 'treatment',
      language: 'English',
      fileType: 'PDF',
      fileSize: '4.1 MB',
      tags: ['medication', 'management', 'side-effects', 'safety']
    },
    {
      id: '7',
      title: 'Crisis Safety Plan Template',
      description: 'Personalized safety plan template to help you identify warning signs and coping strategies during mental health crises.',
      icon: 'ShieldCheckIcon',
      downloadUrl: '/resources/crisis-safety-plan.pdf',
      category: 'crisis',
      language: 'English',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      tags: ['crisis', 'safety', 'plan', 'emergency']
    },
    {
      id: '8',
      title: 'Community Resource Directory',
      description: 'Comprehensive directory of local mental health resources, support groups, and community services in Phoenix area.',
      icon: 'MapIcon',
      image: "https://images.unsplash.com/photo-1700241956176-82ec52cb2872",
      imageAlt: 'Community support group meeting in circle formation in bright community center room',
      externalUrl: '/patient-resources/community-directory',
      category: 'community',
      language: 'English',
      tags: ['community', 'resources', 'phoenix', 'support-groups']
    }
  ];

  const mockCategories: Category[] = [
    { id: 'all', name: 'All Resources', icon: 'RectangleStackIcon', count: mockResources.length },
    { id: 'preparation', name: 'Pre-Visit Preparation', icon: 'ClipboardDocumentCheckIcon', count: 2 },
    { id: 'treatment', name: 'Treatment Information', icon: 'HeartIcon', count: 2 },
    { id: 'family', name: 'Family & Caregiver', icon: 'UserGroupIcon', count: 1 },
    { id: 'wellness', name: 'Wellness Tools', icon: 'SparklesIcon', count: 1 },
    { id: 'crisis', name: 'Crisis Resources', icon: 'ExclamationTriangleIcon', count: 1 },
    { id: 'community', name: 'Community Resources', icon: 'MapIcon', count: 1 }
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

  const filteredResources = mockResources.filter((resource) => {
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
              categories={mockCategories}
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
                  {activeCategory === 'all' ? 'All Resources' : mockCategories.find((cat) => cat.id === activeCategory)?.name}
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
                      downloadUrl={resource.downloadUrl}
                      externalUrl={resource.externalUrl}
                      category={resource.category}
                      language={resource.language}
                      fileType={resource.fileType}
                      fileSize={resource.fileSize}
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