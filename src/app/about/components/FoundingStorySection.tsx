import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FoundingStorySectionProps {
  className?: string;
}

const FoundingStorySection = ({ className = '' }: FoundingStorySectionProps) => {
  const milestones = [
    {
      year: '2025',
      title: 'Clinic Founded',
      description: 'Experienced BHRF and assisted living professionals established NovaCare Clinic with a vision of integrated behavioral health care.'
    },
    {
      year: '2025',
      title: 'Team Building',
      description: 'Assembled multidisciplinary team including psychiatrist, behavioral health professionals, primary care physician, and support staff.'
    },
    {
      year: '2025',
      title: 'Infrastructure Development',
      description: 'Implemented Practice Fusion EHR, established HIPAA-compliant systems, and finalized operational workflows.'
    },
    {
      year: '2025',
      title: 'Payer Credentialing',
      description: 'Completed credentialing with Medicaid, Medicare, and major commercial insurers.'
    },
    {
      year: '2025',
      title: 'Launch',
      description: 'Opened doors to serve adults 18+ with mental health and substance use challenges throughout Arizona.'
    },
    {
      year: 'Future',
      title: 'Growth & Expansion',
      description: 'Building referral network, establishing community partnerships, and expanding telehealth services statewide.'
    }];


  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-secondary mb-6">
              Our Founding Story
            </h2>
            <div className="space-y-6">
              <p className="font-body text-text-secondary leading-relaxed">
                NovaCare Clinic was founded in 2025 by experienced behavioral health and assisted living professionals who witnessed firsthand the challenges patients face when mental and physical healthcare remain fragmented. After years of working in Behavioral Health Residential Facilities (BHRF) and assisted living settings, our founders recognized a critical gap: underserved adults in Arizona were falling through the cracks of a disconnected system.
              </p>
              <p className="font-body text-text-secondary leading-relaxed">
                Patients with mental health challenges often struggled to access integrated care that addressed their whole person—not just their symptoms. Driven by this determination to create change, NovaCare Clinic was established to bridge this gap. We integrate behavioral health with primary care in a compassionate, accessible setting, addressing not only clinical needs but also social determinants of health like housing, food security, and transportation.
              </p>
              <p className="font-body text-text-secondary leading-relaxed">
                Based in Phoenix and serving communities throughout Arizona, we're committed to making quality behavioral health care accessible to those who need it most—particularly adults covered by Medicaid, Medicare, and commercial insurance. Through both in-person and telehealth services, we're transforming how behavioral health care is delivered to underserved populations.
              </p>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="QuoteIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <blockquote className="font-accent text-lg text-text-primary italic mb-3">
                    "Healthcare should be accessible, integrated, and compassionate. Every patient deserves care that addresses their whole person—mind, body, and circumstances."
                  </blockquote>
                  <p className="font-body text-sm text-text-secondary">
                    — Our Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-healing">
              <AppImage
                src="https://images.unsplash.com/photo-1666214280577-5f90bc36be92"
                alt="Hispanic female doctor in white coat smiling warmly while reviewing patient charts in modern medical office"
                className="w-full h-64 object-cover" />

            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-soft">
                <AppImage
                  src="https://images.unsplash.com/photo-1573497161854-72447225081d"
                  alt="Diverse group of healthcare professionals collaborating around conference table in bright meeting room"
                  className="w-full h-32 object-cover" />

              </div>
              <div className="rounded-xl overflow-hidden shadow-soft">
                <AppImage
                  src="https://images.unsplash.com/photo-1734787277873-b9b25ec2196d"
                  alt="Modern medical clinic waiting area with comfortable seating and natural lighting creating welcoming atmosphere"
                  className="w-full h-32 object-cover" />

              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-healing">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-secondary text-center mb-12">
            Our Journey of Growth
          </h3>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) =>
                <div
                  key={index}
                  className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
                  }>

                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>

                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`
                  }>
                    <div className="bg-bg-light rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-headline font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="font-headline text-lg font-semibold text-secondary mb-2">
                        {milestone.title}
                      </h4>
                      <p className="font-body text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FoundingStorySection;