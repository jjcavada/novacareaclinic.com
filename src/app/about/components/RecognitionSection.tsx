import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface RecognitionSectionProps {
  className?: string;
}

const RecognitionSection = ({ className = '' }: RecognitionSectionProps) => {
  const awards = [
    {
      year: '2024',
      title: 'Arizona Healthcare Excellence Award',
      organization: 'Arizona Hospital & Healthcare Association',
      category: 'Community Mental Health Innovation'
    },
    {
      year: '2023',
      title: 'Phoenix Business Journal Healthcare Hero',
      organization: 'Phoenix Business Journal',
      category: 'Mental Health Advocacy'
    },
    {
      year: '2022',
      title: 'SAMHSA Excellence in Mental Health Award',
      organization: 'Substance Abuse & Mental Health Services Administration',
      category: 'Integrated Care Model'
    },
    {
      year: '2021',
      title: 'Arizona Medical Association Community Service Award',
      organization: 'Arizona Medical Association',
      category: 'Underserved Population Care'
    }];


  const mediaFeatures = [
    {
      outlet: 'Arizona Republic',
      title: 'How NovaCare Clinic is Revolutionizing Mental Health Care in Phoenix',
      date: 'October 2024',
      type: 'Feature Article'
    },
    {
      outlet: 'KPNX 12 News',
      title: 'Local Clinic Leads the Way in Crisis Mental Health Support',
      date: 'September 2024',
      type: 'TV Interview'
    },
    {
      outlet: 'Phoenix New Times',
      title: 'Breaking Barriers: Accessible Mental Health Care for All',
      date: 'August 2024',
      type: 'Cover Story'
    },
    {
      outlet: 'Arizona PBS',
      title: 'Mental Health in Arizona: A Community Approach',
      date: 'July 2024',
      type: 'Documentary Feature'
    }];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-secondary mb-6">
            Professional Recognition & Awards
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized by leading healthcare organizations
            and media outlets throughout Arizona and beyond.
          </p>
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-healing mb-16">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-secondary text-center mb-12">
            Awards & Recognition
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) =>
              <div
                key={index}
                className="bg-bg-light rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrophyIcon" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-headline font-semibold">
                        {award.year}
                      </span>
                      <span className="bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                        {award.category}
                      </span>
                    </div>
                    <h4 className="font-headline text-lg font-semibold text-secondary mb-2">
                      {award.title}
                    </h4>
                    <p className="font-body text-text-secondary text-sm">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Media Features */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-secondary mb-8">
              Media Features
            </h3>
            <div className="space-y-6">
              {mediaFeatures.map((feature, index) =>
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-healing transition-healing border border-border">

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="NewspaperIcon" size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-headline font-semibold text-accent text-sm">
                          {feature.outlet}
                        </span>
                        <span className="text-text-secondary text-xs">•</span>
                        <span className="text-text-secondary text-xs">{feature.date}</span>
                      </div>
                      <h4 className="font-headline font-semibold text-secondary mb-1">
                        {feature.title}
                      </h4>
                      <span className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                        {feature.type}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-healing mb-6">
              <AppImage
                src="/images/about/IMG_6978.jpeg"
                alt="Professional award ceremony with healthcare professionals receiving recognition on stage with spotlights and formal backdrop"
                className="w-full h-64 object-cover" />

            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="MicrophoneIcon" size={24} className="text-primary" />
                <h4 className="font-headline text-lg font-semibold text-secondary">
                  Speaking Engagements
                </h4>
              </div>
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                Our team regularly presents at national conferences on integrated behavioral
                health, crisis intervention, and community mental health innovations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="CalendarIcon" size={16} className="text-primary" />
                  <span className="font-body text-text-secondary">
                    American Psychiatric Association Annual Meeting 2024
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="CalendarIcon" size={16} className="text-primary" />
                  <span className="font-body text-text-secondary">
                    National Association of Community Health Centers Conference 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default RecognitionSection;