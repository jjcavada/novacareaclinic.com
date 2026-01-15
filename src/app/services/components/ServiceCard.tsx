import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  service: {
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
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-border rounded-lg shadow-sm hover:shadow-brand transition-all overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {service.telehealth && (
            <div className="bg-accent text-accent-foreground p-2 rounded-full">
              <Icon name="VideoCameraIcon" size={16} />
            </div>
          )}
          {service.medicaidAccepted && (
            <div className="bg-success text-success-foreground p-2 rounded-full">
              <Icon name="CheckCircleIcon" size={16} />
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-bg-light p-2 rounded-lg flex-shrink-0">
            <Icon name={service.icon as any} size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-headline font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-micro">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Icon name="ClockIcon" size={16} />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="ChartBarIcon" size={16} />
            <span>{service.successRate}% success rate</span>
          </div>
        </div>

        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-micro"
        >
          Learn More
          <Icon name="ArrowRightIcon" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;