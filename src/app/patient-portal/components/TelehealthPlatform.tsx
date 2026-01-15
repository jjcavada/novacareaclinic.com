'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TelehealthSession {
  id: string;
  provider: string;
  providerImage: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  sessionType: 'video' | 'audio' | 'chat';
  meetingLink?: string;
}

interface TelehealthPlatformProps {
  onBack: () => void;
}

const TelehealthPlatform = ({ onBack }: TelehealthPlatformProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeSession, setActiveSession] = useState<TelehealthSession | null>(null);
  const [systemCheck, setSystemCheck] = useState({
    camera: false,
    microphone: false,
    internet: false,
    browser: false
  });
  const [showSystemCheck, setShowSystemCheck] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    // Mock system check
    setTimeout(() => {
      setSystemCheck({
        camera: true,
        microphone: true,
        internet: true,
        browser: true
      });
    }, 1000);
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

  const mockSessions: TelehealthSession[] = [
    {
      id: '1',
      provider: 'Dr. Sarah Chen',
      providerImage: "https://images.unsplash.com/photo-1735404039067-301de1789d83",
      date: '2025-11-15',
      time: '2:00 PM',
      duration: 50,
      status: 'scheduled',
      sessionType: 'video',
      meetingLink: 'https://telehealth.novacare.com/session/abc123'
    },
    {
      id: '2',
      provider: 'Dr. Emily Johnson',
      providerImage: "https://images.unsplash.com/photo-1735404039067-301de1789d83",
      date: '2025-11-22',
      time: '10:00 AM',
      duration: 30,
      status: 'scheduled',
      sessionType: 'video',
      meetingLink: 'https://telehealth.novacare.com/session/def456'
    },
    {
      id: '3',
      provider: 'Dr. Sarah Chen',
      providerImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      date: '2025-11-08',
      time: '3:00 PM',
      duration: 50,
      status: 'completed',
      sessionType: 'video'
    }];


  const upcomingSessions = mockSessions.filter((session) => session.status === 'scheduled');
  const completedSessions = mockSessions.filter((session) => session.status === 'completed');

  const handleJoinSession = (session: TelehealthSession) => {
    setActiveSession(session);
  };

  const handleSystemCheck = () => {
    setShowSystemCheck(true);
  };

  const getSessionIcon = (type: string) => {
    const iconMap: { [key: string]: string; } = {
      video: 'VideoCameraIcon',
      audio: 'PhoneIcon',
      chat: 'ChatBubbleLeftRightIcon'
    };
    return iconMap[type] || 'VideoCameraIcon';
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
            Telehealth Platform
          </h1>
          <p className="font-body text-muted-foreground">
            Join virtual appointments and manage your telehealth sessions
          </p>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline text-lg font-semibold text-foreground">
            System Status
          </h2>
          <button
            onClick={handleSystemCheck}
            className="text-primary hover:text-primary/80 transition-micro flex items-center gap-2 text-sm font-medium">

            <Icon name="Cog6ToothIcon" size={16} />
            Run System Check
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${systemCheck.camera ? 'bg-success/20' : 'bg-error/20'}`
            }>
              <Icon
                name={systemCheck.camera ? "CheckIcon" : "XMarkIcon"}
                size={16}
                className={systemCheck.camera ? 'text-success' : 'text-error'} />

            </div>
            <div>
              <div className="font-headline font-medium text-foreground text-sm">Camera</div>
              <div className="font-body text-xs text-muted-foreground">
                {systemCheck.camera ? 'Ready' : 'Not detected'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${systemCheck.microphone ? 'bg-success/20' : 'bg-error/20'}`
            }>
              <Icon
                name={systemCheck.microphone ? "CheckIcon" : "XMarkIcon"}
                size={16}
                className={systemCheck.microphone ? 'text-success' : 'text-error'} />

            </div>
            <div>
              <div className="font-headline font-medium text-foreground text-sm">Microphone</div>
              <div className="font-body text-xs text-muted-foreground">
                {systemCheck.microphone ? 'Ready' : 'Not detected'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${systemCheck.internet ? 'bg-success/20' : 'bg-error/20'}`
            }>
              <Icon
                name={systemCheck.internet ? "CheckIcon" : "XMarkIcon"}
                size={16}
                className={systemCheck.internet ? 'text-success' : 'text-error'} />

            </div>
            <div>
              <div className="font-headline font-medium text-foreground text-sm">Internet</div>
              <div className="font-body text-xs text-muted-foreground">
                {systemCheck.internet ? 'Strong' : 'Weak signal'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${systemCheck.browser ? 'bg-success/20' : 'bg-error/20'}`
            }>
              <Icon
                name={systemCheck.browser ? "CheckIcon" : "XMarkIcon"}
                size={16}
                className={systemCheck.browser ? 'text-success' : 'text-error'} />

            </div>
            <div>
              <div className="font-headline font-medium text-foreground text-sm">Browser</div>
              <div className="font-body text-xs text-muted-foreground">
                {systemCheck.browser ? 'Compatible' : 'Update needed'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h2 className="font-headline text-lg font-semibold text-foreground mb-6">
          Upcoming Virtual Sessions
        </h2>

        {upcomingSessions.length > 0 ?
          <div className="space-y-4">
            {upcomingSessions.map((session) =>
              <div key={session.id} className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={session.providerImage}
                      alt={`Professional headshot of ${session.provider}`}
                      className="w-full h-full object-cover" />

                  </div>

                  <div className="flex-1">
                    <h3 className="font-headline font-semibold text-foreground mb-1">
                      Virtual Session with {session.provider}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Icon name="CalendarIcon" size={16} />
                        {session.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="ClockIcon" size={16} />
                        {session.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name={getSessionIcon(session.sessionType) as any} size={16} />
                        {session.duration} minutes
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                        {session.sessionType.charAt(0).toUpperCase() + session.sessionType.slice(1)} Call
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleJoinSession(session)}
                      className="bg-primary text-white px-6 py-2 rounded-lg font-headline font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">

                      <Icon name="VideoCameraIcon" size={16} />
                      Join Session
                    </button>
                    <button className="text-muted-foreground hover:text-foreground transition-micro text-sm">
                      Test Connection
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div> :

          <div className="text-center py-8">
            <Icon name="VideoCameraIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
              No Upcoming Virtual Sessions
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Schedule a telehealth appointment to get started
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-headline font-semibold hover:bg-primary/90 transition-all">
              Schedule Virtual Appointment
            </button>
          </div>
        }
      </div>

      {/* Session History */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h2 className="font-headline text-lg font-semibold text-foreground mb-6">
          Recent Virtual Sessions
        </h2>

        <div className="space-y-4">
          {completedSessions.map((session) =>
            <div key={session.id} className="border border-border rounded-lg p-4 opacity-75">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={session.providerImage}
                    alt={`Professional headshot of ${session.provider}`}
                    className="w-full h-full object-cover" />

                </div>

                <div className="flex-1">
                  <h3 className="font-headline font-medium text-foreground mb-1">
                    Session with {session.provider}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="CalendarIcon" size={16} />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="ClockIcon" size={16} />
                      {session.time}
                    </span>
                    <span className="bg-success/10 text-success px-2 py-1 rounded text-xs font-medium">
                      Completed
                    </span>
                  </div>
                </div>

                <button className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1 text-sm font-medium">
                  <Icon name="DocumentTextIcon" size={16} />
                  View Notes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h2 className="font-headline text-lg font-semibold text-foreground mb-4">
          Need Help?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-headline font-medium text-foreground mb-2">
              Technical Support
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-3">
              Having trouble with your connection or device setup?
            </p>
            <button className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1 text-sm font-medium">
              <Icon name="PhoneIcon" size={16} />
              Call Tech Support
            </button>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-headline font-medium text-foreground mb-2">
              System Requirements
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-3">
              Check if your device meets the minimum requirements
            </p>
            <button className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1 text-sm font-medium">
              <Icon name="InformationCircleIcon" size={16} />
              View Requirements
            </button>
          </div>
        </div>
      </div>

      {/* Active Session Modal */}
      {activeSession &&
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-brand max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-xl font-semibold text-foreground">
                  Virtual Session with {activeSession.provider}
                </h2>
                <button
                  onClick={() => setActiveSession(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-micro">

                  <Icon name="XMarkIcon" size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Icon name="VideoCameraIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <p className="font-body text-muted-foreground">
                    Video session would appear here
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="w-12 h-12 bg-error text-error-foreground rounded-full flex items-center justify-center hover:bg-error/90 transition-micro">
                  <Icon name="PhoneIcon" size={20} />
                </button>
                <button className="w-12 h-12 bg-muted text-foreground rounded-full flex items-center justify-center hover:bg-muted/80 transition-micro">
                  <Icon name="MicrophoneIcon" size={20} />
                </button>
                <button className="w-12 h-12 bg-muted text-foreground rounded-full flex items-center justify-center hover:bg-muted/80 transition-micro">
                  <Icon name="VideoCameraIcon" size={20} />
                </button>
                <button className="w-12 h-12 bg-muted text-foreground rounded-full flex items-center justify-center hover:bg-muted/80 transition-micro">
                  <Icon name="ChatBubbleLeftRightIcon" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

};

export default TelehealthPlatform;