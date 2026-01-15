import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  externalUrl?: string;
  category: string;
  language?: string;
  source?: string; // e.g., "NIMH", "NAMI", "CDC", "SAMHSA"
}

const ResourceCard = ({
  title,
  description,
  icon,
  image,
  imageAlt,
  externalUrl,
  category,
  language = 'English',
  source
}: ResourceCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand transition-all">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-headline font-semibold text-lg text-card-foreground">
              {title}
            </h3>
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full whitespace-nowrap">
              {category}
            </span>
          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {image && imageAlt && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <AppImage
                src={image}
                alt={imageAlt}
                className="w-full h-32 object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Icon name="GlobeAltIcon" size={14} />
                {language}
              </span>
              {source && (
                <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {source}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {externalUrl && (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1 text-sm font-medium"
                >
                  View
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;