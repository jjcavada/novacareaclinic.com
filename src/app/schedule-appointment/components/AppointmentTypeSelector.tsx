'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface AppointmentType {
  id: string;
  name: string;
  description: string;
  icon: string;
  duration: string;
  availability: string;
}

interface AppointmentTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (typeId: string) => void;
}

const AppointmentTypeSelector = ({ selectedType, onTypeSelect }: AppointmentTypeSelectorProps) => {
  const appointmentTypes: AppointmentType[] = [
    {
      id: 'initial-consultation',
      name: 'Initial Consultation',
      description: 'Comprehensive assessment for new patients',
      icon: 'UserPlusIcon',
      duration: '60 minutes',
      availability: 'Available within 1-2 weeks'
    },
    {
      id: 'follow-up',
      name: 'Follow-up Appointment',
      description: 'Ongoing care for existing patients',
      icon: 'ArrowPathIcon',
      duration: '30-45 minutes',
      availability: 'Available within 3-5 days'
    },
    {
      id: 'therapy-session',
      name: 'Therapy Session',
      description: 'Individual or group therapy sessions',
      icon: 'ChatBubbleLeftRightIcon',
      duration: '50 minutes',
      availability: 'Available within 1 week'
    },
    {
      id: 'medication-management',
      name: 'Medication Management',
      description: 'Psychiatric medication consultation',
      icon: 'BeakerIcon',
      duration: '30 minutes',
      availability: 'Available within 1 week'
    },
    {
      id: 'telehealth',
      name: 'Telehealth Appointment',
      description: 'Virtual consultation from home',
      icon: 'VideoCameraIcon',
      duration: '30-60 minutes',
      availability: 'Available within 2-3 days'
    },
    {
      id: 'crisis-consultation',
      name: 'Crisis Consultation',
      description: 'Urgent mental health support',
      icon: 'ExclamationTriangleIcon',
      duration: '45 minutes',
      availability: 'Same day or next day'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {appointmentTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => onTypeSelect(type.id)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-healing hover:shadow-soft ${selectedType === type.id
                ? 'border-primary bg-bg-light' : 'border-border hover:border-primary/50'
              }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${selectedType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                <Icon name={type.icon as any} size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-semibold text-foreground mb-1">
                  {type.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {type.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Icon name="ClockIcon" size={12} />
                    {type.duration}
                  </span>
                  <span className="flex items-center gap-1 mt-1 sm:mt-0">
                    <Icon name="CalendarIcon" size={12} />
                    {type.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentTypeSelector;