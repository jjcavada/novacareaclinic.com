import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'support-group' | 'webinar' | 'community';
  registrationRequired: boolean;
  spotsAvailable?: number;
  facilitator?: string;
}

interface UpcomingEventsSectionProps {
  events: Event[];
}

const UpcomingEventsSection = ({ events }: UpcomingEventsSectionProps) => {
  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop': return 'AcademicCapIcon';
      case 'support-group': return 'UserGroupIcon';
      case 'webinar': return 'ComputerDesktopIcon';
      case 'community': return 'HeartIcon';
      default: return 'CalendarIcon';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-accent text-accent-foreground';
      case 'support-group': return 'bg-secondary text-white';
      case 'webinar': return 'bg-primary text-primary-foreground';
      case 'community': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatEventType = (type: string) => {
    return type.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent text-accent-foreground rounded-lg flex items-center justify-center">
            <Icon name="CalendarIcon" size={24} />
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl text-card-foreground">
              Upcoming Events & Workshops
            </h2>
            <p className="text-muted-foreground text-sm">
              Join our community events and educational workshops
            </p>
          </div>
        </div>

        <Link
          href="/schedule-appointment"
          className="text-primary hover:text-primary/80 transition-micro text-sm font-medium flex items-center gap-1"
        >
          View All Events
          <Icon name="ArrowTopRightOnSquareIcon" size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-border rounded-lg p-4 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getEventTypeColor(event.type)}`}>
                <Icon name={getEventTypeIcon(event.type) as any} size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-headline font-semibold text-card-foreground">
                    {event.title}
                  </h3>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full whitespace-nowrap">
                    {formatEventType(event.type)}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {event.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="CalendarIcon" size={16} />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="ClockIcon" size={16} />
                    {event.time}
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPinIcon" size={16} />
                    {event.location}
                  </div>

                  {event.facilitator && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="UserIcon" size={16} />
                      {event.facilitator}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <div className="flex items-center gap-4 text-xs">
                    {event.registrationRequired && (
                      <span className="flex items-center gap-1 text-warning">
                        <Icon name="ExclamationCircleIcon" size={14} />
                        Registration Required
                      </span>
                    )}
                    {event.spotsAvailable && (
                      <span className="text-muted-foreground">
                        {event.spotsAvailable} spots available
                      </span>
                    )}
                  </div>

                  <Link
                    href="/schedule-appointment"
                    className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
                  >
                    {event.registrationRequired ? 'Register' : 'Learn More'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;