import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CrisisResource {
  id: string;
  name: string;
  description: string;
  phone: string;
  website?: string;
  available: string;
  type: 'hotline' | 'text' | 'chat' | 'emergency';
}

interface CrisisResourcesSectionProps {
  resources: CrisisResource[];
}

const CrisisResourcesSection = ({ resources }: CrisisResourcesSectionProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hotline': return 'PhoneIcon';
      case 'text': return 'ChatBubbleLeftRightIcon';
      case 'chat': return 'ComputerDesktopIcon';
      case 'emergency': return 'ExclamationTriangleIcon';
      default: return 'PhoneIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emergency': return 'bg-error text-error-foreground';
      case 'hotline': return 'bg-accent text-white';
      case 'text': return 'bg-accent text-accent-foreground';
      case 'chat': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-gradient-to-r from-accent/5 to-red-500/5 border-l-4 border-accent rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center">
          <Icon name="ExclamationTriangleIcon" size={24} />
        </div>
        <div>
          <h2 className="font-headline font-bold text-xl text-foreground">
            Crisis Support Resources
          </h2>
          <p className="text-muted-foreground text-sm">
            Immediate help is available 24/7. You are not alone.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-brand transition-all"
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                <Icon name={getTypeIcon(resource.type) as any} size={16} />
              </div>

              <div className="flex-1">
                <h3 className="font-headline font-semibold text-card-foreground mb-1">
                  {resource.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {resource.description}
                </p>

                <div className="space-y-2">
                  <a
                    href={`tel:${resource.phone}`}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-micro font-medium"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    {resource.phone}
                  </a>

                  {resource.website && (
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-micro text-sm"
                    >
                      <Icon name="GlobeAltIcon" size={16} />
                      Visit Website
                    </a>
                  )}

                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Icon name="ClockIcon" size={14} />
                    {resource.available}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
        <p className="text-sm text-foreground font-medium mb-2">
          <Icon name="InformationCircleIcon" size={16} className="inline mr-2" />
          If you are experiencing a medical emergency, call 911 immediately.
        </p>
        <p className="text-xs text-muted-foreground">
          For non-emergency mental health support, contact our clinic at (602) 555-0123 during business hours.
        </p>
      </div>
    </div>
  );
};

export default CrisisResourcesSection;