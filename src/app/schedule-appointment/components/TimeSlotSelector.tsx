'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  type: 'morning' | 'afternoon' | 'evening';
}

interface TimeSlotSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const TimeSlotSelector = ({ selectedDate, selectedTime, onDateSelect, onTimeSelect }: TimeSlotSelectorProps) => {
  const [currentWeek, setCurrentWeek] = useState(0);

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        id: date.toISOString().split('T')[0],
        date: date.getDate(),
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        full: date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
    }
    return dates;
  };

  const dates = generateDates();
  const weekDates = dates.slice(currentWeek * 7, (currentWeek + 1) * 7);

  const timeSlots: TimeSlot[] = [
    // Morning slots
    { id: '09:00', time: '9:00 AM', available: true, type: 'morning' },
    { id: '09:30', time: '9:30 AM', available: false, type: 'morning' },
    { id: '10:00', time: '10:00 AM', available: true, type: 'morning' },
    { id: '10:30', time: '10:30 AM', available: true, type: 'morning' },
    { id: '11:00', time: '11:00 AM', available: false, type: 'morning' },
    { id: '11:30', time: '11:30 AM', available: true, type: 'morning' },

    // Afternoon slots
    { id: '13:00', time: '1:00 PM', available: true, type: 'afternoon' },
    { id: '13:30', time: '1:30 PM', available: true, type: 'afternoon' },
    { id: '14:00', time: '2:00 PM', available: false, type: 'afternoon' },
    { id: '14:30', time: '2:30 PM', available: true, type: 'afternoon' },
    { id: '15:00', time: '3:00 PM', available: true, type: 'afternoon' },
    { id: '15:30', time: '3:30 PM', available: true, type: 'afternoon' },
    { id: '16:00', time: '4:00 PM', available: false, type: 'afternoon' },
    { id: '16:30', time: '4:30 PM', available: true, type: 'afternoon' },

    // Evening slots
    { id: '17:00', time: '5:00 PM', available: true, type: 'evening' },
    { id: '17:30', time: '5:30 PM', available: true, type: 'evening' },
    { id: '18:00', time: '6:00 PM', available: false, type: 'evening' },
    { id: '18:30', time: '6:30 PM', available: true, type: 'evening' }
  ];

  const groupedSlots = {
    morning: timeSlots.filter(slot => slot.type === 'morning'),
    afternoon: timeSlots.filter(slot => slot.type === 'afternoon'),
    evening: timeSlots.filter(slot => slot.type === 'evening')
  };

  const nextWeek = () => {
    if (currentWeek < 1) setCurrentWeek(currentWeek + 1);
  };

  const prevWeek = () => {
    if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
  };

  return (
    <div className="space-y-6">
      {/* Date Selection */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline font-semibold text-foreground">
            Select Date
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={prevWeek}
              disabled={currentWeek === 0}
              className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-micro"
            >
              <Icon name="ChevronLeftIcon" size={16} />
            </button>
            <button
              onClick={nextWeek}
              disabled={currentWeek >= 1}
              className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-micro"
            >
              <Icon name="ChevronRightIcon" size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weekDates.map((date) => (
            <button
              key={date.id}
              onClick={() => onDateSelect(date.id)}
              className={`p-3 rounded-lg border text-center transition-all ${selectedDate === date.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:border-primary/50 hover:bg-muted'
                }`}
            >
              <div className="text-xs font-medium">{date.day}</div>
              <div className="text-sm font-semibold">{date.date}</div>
              <div className="text-xs opacity-75">{date.month}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <h3 className="font-headline font-semibold text-foreground mb-4">
            Select Time
          </h3>

          <div className="space-y-4">
            {Object.entries(groupedSlots).map(([period, slots]) => (
              <div key={period}>
                <h4 className="font-medium text-muted-foreground mb-2 capitalize flex items-center gap-2">
                  <Icon
                    name={period === 'morning' ? 'SunIcon' : period === 'afternoon' ? 'CloudIcon' : 'MoonIcon'}
                    size={16}
                  />
                  {period}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => slot.available && onTimeSelect(slot.id)}
                      disabled={!slot.available}
                      className={`p-2 rounded-lg border text-sm font-medium transition-all ${selectedTime === slot.id
                          ? 'border-primary bg-primary text-primary-foreground'
                          : slot.available
                            ? 'border-border hover:border-primary/50 hover:bg-muted text-foreground'
                            : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                        }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotSelector;