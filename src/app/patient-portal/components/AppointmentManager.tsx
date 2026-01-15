'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Appointment {
  id: string;
  type: string;
  provider: string;
  providerImage: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  isVirtual: boolean;
  location?: string;
  notes?: string;
}

interface AppointmentManagerProps {
  onBack: () => void;
}

const AppointmentManager = ({ onBack }: AppointmentManagerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showReschedule, setShowReschedule] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) =>
          <div key={i} className="bg-muted rounded-lg h-24"></div>
          )}
        </div>
      </div>);

  }

  const mockAppointments: Appointment[] = [
  {
    id: '1',
    type: 'Individual Therapy Session',
    provider: 'Dr. Sarah Chen',
    providerImage: "https://images.unsplash.com/photo-1708793715747-500c3b273d28",
    date: '2025-11-15',
    time: '2:00 PM',
    status: 'upcoming',
    isVirtual: true,
    notes: 'Follow-up on anxiety management techniques'
  },
  {
    id: '2',
    type: 'Medication Review',
    provider: 'Dr. Michael Rodriguez',
    providerImage: "https://images.unsplash.com/photo-1643660527076-726d42bb1a06",
    date: '2025-11-20',
    time: '10:30 AM',
    status: 'upcoming',
    isVirtual: false,
    location: 'NovaCare Clinic - Room 205',
    notes: 'Review current medications and dosages'
  },
  {
    id: '3',
    type: 'Group Therapy Session',
    provider: 'Dr. Emily Johnson',
    providerImage: "https://images.unsplash.com/photo-1442914083049-492a08946a84",
    date: '2025-11-25',
    time: '4:00 PM',
    status: 'upcoming',
    isVirtual: false,
    location: 'NovaCare Clinic - Conference Room A'
  },
  {
    id: '4',
    type: 'Initial Consultation',
    provider: 'Dr. Sarah Chen',
    providerImage: "https://images.unsplash.com/photo-1698795635695-29fd61f60edd",
    date: '2025-11-08',
    time: '3:00 PM',
    status: 'completed',
    isVirtual: true,
    notes: 'Completed intake assessment'
  },
  {
    id: '5',
    type: 'Follow-up Session',
    provider: 'Dr. Michael Rodriguez',
    providerImage: "https://images.unsplash.com/photo-1643660527076-726d42bb1a06",
    date: '2025-11-01',
    time: '11:00 AM',
    status: 'completed',
    isVirtual: false,
    location: 'NovaCare Clinic - Room 205'
  }];


  const upcomingAppointments = mockAppointments.filter((apt) => apt.status === 'upcoming');
  const pastAppointments = mockAppointments.filter((apt) => apt.status === 'completed');

  const handleCancelAppointment = (appointmentId: string) => {
    // Mock cancel functionality
    console.log('Cancelling appointment:', appointmentId);
  };

  const handleRescheduleAppointment = (appointmentId: string) => {
    setShowReschedule(true);
    setSelectedAppointment(mockAppointments.find((apt) => apt.id === appointmentId) || null);
  };

  const handleJoinVirtual = (appointmentId: string) => {
    // Mock join virtual appointment
    console.log('Joining virtual appointment:', appointmentId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-muted rounded-lg transition-micro">

          <Icon name="ArrowLeftIcon" size={20} className="text-muted-foreground" />
        </button>
        <div>
          <h1 className="font-headline text-2xl font-semibold text-foreground">
            My Appointments
          </h1>
          <p className="font-body text-muted-foreground">
            Manage your scheduled appointments and view history
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing flex items-center justify-center gap-2">
            <Icon name="PlusIcon" size={20} />
            Schedule New Appointment
          </button>
          <button className="flex-1 bg-accent text-accent-foreground py-3 px-4 rounded-lg font-cta font-semibold hover:bg-accent/90 transition-healing flex items-center justify-center gap-2">
            <Icon name="VideoCameraIcon" size={20} />
            Join Virtual Session
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-card rounded-lg shadow-soft">
        <div className="border-b border-border">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-4 px-6 font-headline font-medium transition-micro ${
              activeTab === 'upcoming' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`
              }>

              Upcoming ({upcomingAppointments.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex-1 py-4 px-6 font-headline font-medium transition-micro ${
              activeTab === 'past' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`
              }>

              Past Appointments ({pastAppointments.length})
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'upcoming' &&
          <div className="space-y-4">
              {upcomingAppointments.length > 0 ?
            upcomingAppointments.map((appointment) =>
            <div key={appointment.id} className="border border-border rounded-lg p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img
                      src={appointment.providerImage}
                      alt={`Professional headshot of ${appointment.provider}`}
                      className="w-full h-full object-cover" />

                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-headline font-semibold text-foreground">
                              {appointment.type}
                            </h3>
                            {appointment.isVirtual &&
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                                Virtual
                              </span>
                      }
                          </div>
                          <p className="font-body text-muted-foreground mb-2">
                            with {appointment.provider}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Icon name="CalendarIcon" size={16} />
                              {appointment.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="ClockIcon" size={16} />
                              {appointment.time}
                            </span>
                            {appointment.location &&
                      <span className="flex items-center gap-1">
                                <Icon name="MapPinIcon" size={16} />
                                {appointment.location}
                              </span>
                      }
                          </div>
                          {appointment.notes &&
                    <p className="font-body text-sm text-muted-foreground">
                              Note: {appointment.notes}
                            </p>
                    }
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 lg:flex-col">
                        {appointment.isVirtual &&
                  <button
                    onClick={() => handleJoinVirtual(appointment.id)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-micro flex items-center justify-center gap-2">

                            <Icon name="VideoCameraIcon" size={16} />
                            Join Session
                          </button>
                  }
                        <button
                    onClick={() => handleRescheduleAppointment(appointment.id)}
                    className="bg-muted text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted/80 transition-micro flex items-center justify-center gap-2">

                          <Icon name="CalendarIcon" size={16} />
                          Reschedule
                        </button>
                        <button
                    onClick={() => handleCancelAppointment(appointment.id)}
                    className="text-error hover:bg-error/10 px-4 py-2 rounded-lg font-medium transition-micro flex items-center justify-center gap-2">

                          <Icon name="XMarkIcon" size={16} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
            ) :

            <div className="text-center py-12">
                  <Icon name="CalendarIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                    No Upcoming Appointments
                  </h3>
                  <p className="font-body text-muted-foreground mb-6">
                    Schedule your next appointment to continue your care journey
                  </p>
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing">
                    Schedule Appointment
                  </button>
                </div>
            }
            </div>
          }

          {activeTab === 'past' &&
          <div className="space-y-4">
              {pastAppointments.map((appointment) =>
            <div key={appointment.id} className="border border-border rounded-lg p-6 opacity-75">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                    src={appointment.providerImage}
                    alt={`Professional headshot of ${appointment.provider}`}
                    className="w-full h-full object-cover" />

                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-headline font-semibold text-foreground">
                          {appointment.type}
                        </h3>
                        <span className="bg-success/10 text-success px-2 py-1 rounded text-xs font-medium">
                          Completed
                        </span>
                      </div>
                      <p className="font-body text-muted-foreground mb-2">
                        with {appointment.provider}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="CalendarIcon" size={16} />
                          {appointment.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="ClockIcon" size={16} />
                          {appointment.time}
                        </span>
                        {appointment.location &&
                    <span className="flex items-center gap-1">
                            <Icon name="MapPinIcon" size={16} />
                            {appointment.location}
                          </span>
                    }
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-micro">
                      <Icon name="DocumentTextIcon" size={20} />
                    </button>
                  </div>
                </div>
            )}
            </div>
          }
        </div>
      </div>
    </div>);

};

export default AppointmentManager;