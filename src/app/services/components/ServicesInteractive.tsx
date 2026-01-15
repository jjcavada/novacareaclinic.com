'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import ServiceFilters from './ServiceFilters';
import ServiceSearch from './ServiceSearch';
import TreatmentApproach from './TreatmentApproach';
import InsuranceCoverage from './InsuranceCoverage';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  category: string;
  duration: string;
  telehealth: boolean;
  medicaidAccepted: boolean;
  successRate: number;
  href: string;
  conditions: string[];
  providerSpecialty: string;
}

interface SuccessStory {
  id: string;
  patientInitials: string;
  age: number;
  condition: string;
  treatment: string;
  outcome: string;
  timeframe: string;
  image: string;
  alt: string;
  quote: string;
}

interface TreatmentStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface InsuranceInfo {
  provider: string;
  coverage: string;
  copay: string;
  notes: string;
}

const ServicesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockServices: Service[] = [
    {
      id: 'psych-eval',
      title: 'Psychiatric Evaluations',
      description: 'Comprehensive diagnostic assessments for adults and children to identify mental health conditions and develop tailored treatment plans.',
      icon: 'ClipboardDocumentCheckIcon',
      image: "https://images.unsplash.com/photo-1666214280577-5f90bc36be92",
      alt: 'Psychiatrist conducting a comprehensive evaluation',
      category: 'Behavioral Health',
      duration: '60-90 minutes',
      telehealth: true,
      medicaidAccepted: true,
      successRate: 95,
      href: '/schedule-appointment',
      conditions: ['ADHD', 'Anxiety', 'Depression', 'Bipolar Disorder', 'PTSD'],
      providerSpecialty: 'Psychiatrist / PMHNP'
    },
    {
      id: 'med-mgmt',
      title: 'Medication Management',
      description: 'Ongoing monitoring and support for patients prescribed psychotropic medications to ensure safety and effectiveness.',
      icon: 'BeakerIcon',
      image: "https://images.unsplash.com/photo-1576091358783-a212ec293ff3",
      alt: 'Medication management consultation',
      category: 'Behavioral Health',
      duration: '15-30 minutes',
      telehealth: true,
      medicaidAccepted: true,
      successRate: 90,
      href: '/schedule-appointment',
      conditions: ['All Mental Health Conditions'],
      providerSpecialty: 'Psychiatrist / PMHNP'
    },
    {
      id: 'counseling',
      title: 'Counseling & Therapy',
      description: 'Evidence-based individual, group, and family therapy to address behavioral health challenges and improve coping skills.',
      icon: 'UserIcon',
      image: "https://images.unsplash.com/photo-1637008830280-764453bda144",
      alt: 'Therapy session in a comfortable setting',
      category: 'Behavioral Health',
      duration: '45-60 minutes',
      telehealth: true,
      medicaidAccepted: true,
      successRate: 88,
      href: '/schedule-appointment',
      conditions: ['Anxiety', 'Depression', 'Trauma', 'Relationship Issues'],
      providerSpecialty: 'Licensed Counselor / Social Worker'
    },
    {
      id: 'primary-care',
      title: 'Primary Care Services',
      description: 'Integrated medical care for physical health needs, wellness exams, and chronic disease management.',
      icon: 'HeartIcon',
      image: "https://images.unsplash.com/photo-1706710821993-e689d994ebb6",
      alt: 'Primary care check-up',
      category: 'Medical Services',
      duration: '30-60 minutes',
      telehealth: true,
      medicaidAccepted: true,
      successRate: 92,
      href: '/schedule-appointment',
      conditions: ['Hypertension', 'Diabetes', 'Wellness Checks', 'Minor Illnesses'],
      providerSpecialty: 'Family Nurse Practitioner'
    },
    {
      id: 'case-mgmt',
      title: 'Case Management',
      description: 'Coordinate care, advocate for patient needs, and link individuals to community resources for holistic support.',
      icon: 'ClipboardDocumentListIcon',
      image: "https://images.unsplash.com/photo-1714976694537-9f56ec065a55",
      alt: 'Case manager assisting a client',
      category: 'Support Services',
      duration: 'Varies',
      telehealth: true,
      medicaidAccepted: true,
      successRate: 94,
      href: '/schedule-appointment',
      conditions: ['Social Needs', 'Housing', 'Employment', 'Benefits'],
      providerSpecialty: 'Case Manager'
    },
    {
      id: 'crisis',
      title: 'Crisis Intervention',
      description: 'Immediate support and stabilization for individuals experiencing acute mental health crises.',
      icon: 'ExclamationTriangleIcon',
      image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae",
      alt: 'Crisis intervention support',
      category: 'Crisis Services',
      duration: 'Immediate',
      telehealth: true,
      medicaidAccepted: true,
      successRate: 100,
      href: '/schedule-appointment',
      conditions: ['Suicidal Ideation', 'Acute Distress', 'Psychosis'],
      providerSpecialty: 'Crisis Specialist'
    }
  ];


  const mockSuccessStories: SuccessStory[] = [
    {
      id: '1',
      patientInitials: 'M.R.',
      age: 34,
      condition: 'Depression & Anxiety',
      treatment: 'Individual Therapy + Medication Management',
      outcome: 'Returned to work, improved relationships',
      timeframe: '6 months',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a93dc89-1762274343125.png",
      alt: 'Professional woman with short brown hair smiling confidently in business attire',
      quote: 'The integrated approach helped me address both my mental health and physical symptoms. I finally feel like myself again.'
    },
    {
      id: '2',
      patientInitials: 'J.L.',
      age: 28,
      condition: 'PTSD',
      treatment: 'Trauma-Focused Therapy',
      outcome: 'Significant reduction in nightmares and flashbacks',
      timeframe: '8 months',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_133ffdfc9-1762274294253.png",
      alt: 'Young Hispanic man with beard smiling warmly in casual blue shirt',
      quote: 'The therapists here understand trauma. They created a safe space where I could finally start healing.'
    },
    {
      id: '3',
      patientInitials: 'S.K.',
      age: 45,
      condition: 'Bipolar Disorder',
      treatment: 'Psychiatric Care + Group Therapy',
      outcome: 'Mood stabilization, better family relationships',
      timeframe: '1 year',
      image: "https://images.unsplash.com/photo-1597223129377-a17fe51f3f2a",
      alt: 'Middle-aged man with graying beard looking peaceful and content outdoors',
      quote: 'Finding the right medication combination and having peer support made all the difference in my recovery journey.'
    }];


  const mockTreatmentSteps: TreatmentStep[] = [
    {
      id: '1',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your mental health, medical history, and treatment goals.',
      icon: 'ClipboardDocumentListIcon',
      duration: '60-90 min'
    },
    {
      id: '2',
      title: 'Treatment Planning',
      description: 'Collaborative development of personalized treatment plan with clear goals and milestones.',
      icon: 'DocumentTextIcon',
      duration: '30 min'
    },
    {
      id: '3',
      title: 'Active Treatment',
      description: 'Regular therapy sessions, medication management, and skill-building activities.',
      icon: 'SparklesIcon',
      duration: 'Ongoing'
    },
    {
      id: '4',
      title: 'Progress Review',
      description: 'Regular evaluation of treatment progress with plan adjustments as needed.',
      icon: 'ChartBarIcon',
      duration: 'Monthly'
    }];


  const mockInsuranceData: InsuranceInfo[] = [
    {
      provider: 'Medicaid (AHCCCS)',
      coverage: 'Full Coverage',
      copay: '$0',
      notes: 'All services covered with prior authorization when required'
    },
    {
      provider: 'Medicare',
      coverage: 'Partial Coverage',
      copay: '$15-45',
      notes: 'Mental health services covered under Part B'
    },
    {
      provider: 'Blue Cross Blue Shield',
      coverage: 'Full Coverage',
      copay: '$20-50',
      notes: 'In-network provider with most BCBS plans'
    },
    {
      provider: 'Aetna',
      coverage: 'Full Coverage',
      copay: '$25-60',
      notes: 'Covered under behavioral health benefits'
    }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) =>
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  const categories = [...new Set(mockServices.map((service) => service.category))];
  const conditions = [...new Set(mockServices.flatMap((service) => service.conditions))];
  const providers = [...new Set(mockServices.map((service) => service.providerSpecialty))];

  const filteredServices = mockServices.filter((service) => {
    const matchesSearch = searchQuery === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.conditions.some((condition) => condition.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === '' || service.category === selectedCategory;
    const matchesCondition = selectedCondition === '' || service.conditions.includes(selectedCondition);
    const matchesProvider = selectedProvider === '' || service.providerSpecialty === selectedProvider;

    return matchesSearch && matchesCategory && matchesCondition && matchesProvider;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-6">
            Comprehensive Mental Health Services
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-8">
            Evidence-based treatments delivered with compassion and cultural sensitivity.
            <Link href="/providers" className="text-primary hover:text-primary/80 font-medium transition-colors"> Our experienced providers</Link>{' '}
            deliver integrated care that addresses your whole-person wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule-appointment"
              className="bg-primary text-white px-8 py-3 rounded-lg font-headline font-semibold hover:bg-primary/90 transition-all shadow-brand">

              Schedule Consultation
            </a>
            <a
              href="tel:988"
              className="bg-accent text-white px-8 py-3 rounded-lg font-headline font-semibold hover:bg-accent/90 transition-all">

              Crisis Support - 988
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery} />


          <ServiceFilters
            selectedCategory={selectedCategory}
            selectedCondition={selectedCondition}
            selectedProvider={selectedProvider}
            onCategoryChange={setSelectedCategory}
            onConditionChange={setSelectedCondition}
            onProviderChange={setSelectedProvider}
            categories={categories}
            conditions={conditions}
            providers={providers} />


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) =>
              <ServiceCard key={service.id} service={service} />
            )}
          </div>

          {filteredServices.length === 0 &&
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No services match your current filters. Try adjusting your search criteria.
              </p>
            </div>
          }
        </div>
      </section>

      <TreatmentApproach steps={mockTreatmentSteps} />
      <InsuranceCoverage insuranceData={mockInsuranceData} />
    </div>);

};

export default ServicesInteractive;