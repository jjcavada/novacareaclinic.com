'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';


interface Appointment {
  id: string;
  type: string;
  provider: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  isVirtual: boolean;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  refillsLeft: number;
  nextRefill: string;
}

interface DashboardOverviewProps {
  patientName: string;
  onNavigate: (section: string) => void;
}

const DashboardOverview = ({ patientName, onNavigate }: DashboardOverviewProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted rounded-lg h-32"></div>
          ))}
        </div>
      </div>
    );
  }

  const mockAppointments: Appointment[] = [
    {
      id: '1',
      type: 'Therapy Session',
      provider: 'Dr. Sarah Chen',
      date: '2025-11-15',
      time: '2:00 PM',
      status: 'upcoming',
      isVirtual: true
    },
    {
      id: '2',
      type: 'Medication Review',
      provider: 'Dr. Michael Rodriguez',
      date: '2025-11-20',
      time: '10:30 AM',
      status: 'upcoming',
      isVirtual: false
    },
    {
      id: '3',
      type: 'Follow-up Session',
      provider: 'Dr. Sarah Chen',
      date: '2025-11-08',
      time: '3:00 PM',
      status: 'completed',
      isVirtual: true
    }
  ];

  const mockMedications: Medication[] = [
    {
      id: '1',
      name: 'Sertraline',
      dosage: '50mg',
      frequency: 'Once daily',
      refillsLeft: 2,
      nextRefill: '2025-12-01'
    },
    {
      id: '2',
      name: 'Lorazepam',
      dosage: '0.5mg',
      frequency: 'As needed',
      refillsLeft: 0,
      nextRefill: '2025-11-18'
    }
  ];

  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'upcoming');
  const recentAppointments = mockAppointments.filter(apt => apt.status === 'completed').slice(0, 2);

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-healing-gradient rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline text-2xl font-semibold text-foreground mb-2">
              Welcome back, {patientName}
            </h1>
            <p className="font-body text-muted-foreground">
              Current time: {currentTime} • Your health journey continues
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Icon name="HeartIcon" size={32} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => onNavigate('appointments')}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-healing transition-healing text-left group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-micro">
              <Icon name="CalendarIcon" size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">Schedule Appointment</h3>
              <p className="font-body text-sm text-muted-foreground">Book your next visit</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('telehealth')}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-healing transition-healing text-left group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-micro">
              <Icon name="VideoCameraIcon" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">Join Telehealth</h3>
              <p className="font-body text-sm text-muted-foreground">Virtual appointments</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('messages')}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-healing transition-healing text-left group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-micro">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">Secure Messages</h3>
              <p className="font-body text-sm text-muted-foreground">Contact your care team</p>
            </div>
          </div>
        </button>
      </div>

      {/* Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <div className="bg-card rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-xl font-semibold text-foreground">
              Upcoming Appointments
            </h2>
            <button
              onClick={() => onNavigate('appointments')}
              className="font-body text-sm text-primary hover:text-primary/80 transition-micro"
            >
              View All
            </button>
          </div>

          <div className="space-y-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-headline font-medium text-foreground">
                          {appointment.type}
                        </h3>
                        {appointment.isVirtual && (
                          <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                            Virtual
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm text-muted-foreground mb-1">
                        with {appointment.provider}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="CalendarIcon" size={16} />
                          {appointment.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="ClockIcon" size={16} />
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                    {appointment.isVirtual && (
                      <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium hover:bg-primary/90 transition-micro">
                        Join
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Icon name="CalendarIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="font-body text-muted-foreground">No upcoming appointments</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-xl font-semibold text-foreground">
              Recent Activity
            </h2>
            <button
              onClick={() => onNavigate('records')}
              className="font-body text-sm text-primary hover:text-primary/80 transition-micro"
            >
              View Records
            </button>
          </div>

          <div className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckIcon" size={20} className="text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline font-medium text-foreground mb-1">
                    {appointment.type} Completed
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    with {appointment.provider}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="DocumentTextIcon" size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-medium text-foreground mb-1">
                  Lab Results Available
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-1">
                  Blood work from November 5th
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medications */}
        <div className="bg-card rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-xl font-semibold text-foreground">
              Current Medications
            </h2>
            <button
              onClick={() => onNavigate('medications')}
              className="font-body text-sm text-primary hover:text-primary/80 transition-micro"
            >
              Manage All
            </button>
          </div>

          <div className="space-y-4">
            {mockMedications.map((medication) => (
              <div key={medication.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-headline font-medium text-foreground">
                      {medication.name} {medication.dosage}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {medication.frequency}
                    </p>
                  </div>
                  {medication.refillsLeft === 0 && (
                    <span className="bg-warning/10 text-warning px-2 py-1 rounded text-xs font-medium">
                      Refill Needed
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {medication.refillsLeft} refills left
                  </span>
                  <span className="text-muted-foreground">
                    Next refill: {medication.nextRefill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Summary */}
        <div className="bg-card rounded-lg shadow-soft p-6">
          <h2 className="font-headline text-xl font-semibold text-foreground mb-6">
            Health Summary
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-bg-light rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="HeartIcon" size={24} className="text-primary" />
                <div>
                  <h3 className="font-headline font-medium text-foreground">Overall Health</h3>
                  <p className="font-body text-sm text-muted-foreground">Stable and improving</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckIcon" size={20} className="text-success" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border border-border rounded-lg">
                <div className="font-headline text-2xl font-semibold text-primary mb-1">8</div>
                <div className="font-body text-sm text-muted-foreground">Sessions Completed</div>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <div className="font-headline text-2xl font-semibold text-accent mb-1">92%</div>
                <div className="font-body text-sm text-muted-foreground">Medication Adherence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;