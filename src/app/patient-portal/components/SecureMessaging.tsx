'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'patient' | 'provider' | 'staff';
  recipientId: string;
  recipientName: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  attachments?: string[];
}

interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
}

interface SecureMessagingProps {
  onBack: () => void;
}

const SecureMessaging = ({ onBack }: SecureMessagingProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeView, setActiveView] = useState<'inbox' | 'compose' | 'conversation'>('inbox');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState({
    recipient: '',
    subject: '',
    content: '',
    priority: 'normal' as const
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted rounded-lg h-24"></div>
          ))}
        </div>
      </div>
    );
  }

  const mockMessages: Message[] = [
    {
      id: '1',
      senderId: 'dr-chen',
      senderName: 'Dr. Sarah Chen',
      senderRole: 'provider',
      recipientId: 'patient-123',
      recipientName: 'John Doe',
      subject: 'Follow-up on Recent Session',
      content: 'Hi John, I wanted to follow up on our session yesterday. The coping strategies we discussed should help with your anxiety. Please practice the breathing exercises daily and let me know how you\'re feeling. Don\'t hesitate to reach out if you need support.',
      timestamp: '2025-11-11T14:30:00Z',
      isRead: false,
      priority: 'normal'
    },
    {
      id: '2',
      senderId: 'dr-rodriguez',
      senderName: 'Dr. Michael Rodriguez',
      senderRole: 'provider',
      recipientId: 'patient-123',
      recipientName: 'John Doe',
      subject: 'Lab Results Available',
      content: 'Your recent lab results are now available in your patient portal. Overall, the results look good. Your cholesterol levels have improved since our last check. Please schedule a follow-up appointment to discuss the results in detail.',
      timestamp: '2025-11-10T09:15:00Z',
      isRead: true,
      priority: 'normal',
      attachments: ['lab-results-nov-2025.pdf']
    },
    {
      id: '3',
      senderId: 'staff-nurse',
      senderName: 'Nurse Jennifer',
      senderRole: 'staff',
      recipientId: 'patient-123',
      recipientName: 'John Doe',
      subject: 'Appointment Reminder',
      content: 'This is a reminder that you have an appointment scheduled for tomorrow, November 12th at 2:00 PM with Dr. Sarah Chen. Please arrive 15 minutes early for check-in. If you need to reschedule, please call us at least 24 hours in advance.',
      timestamp: '2025-11-09T16:45:00Z',
      isRead: true,
      priority: 'high'
    },
    {
      id: '4',
      senderId: 'patient-123',
      senderName: 'John Doe',
      senderRole: 'patient',
      recipientId: 'dr-chen',
      recipientName: 'Dr. Sarah Chen',
      subject: 'Question about Medication',
      content: 'Hi Dr. Chen, I have a question about my medication. I\'ve been experiencing some mild side effects since we increased the dosage. Should I continue taking it as prescribed or would you like me to reduce the dose? The side effects include slight nausea in the morning.',
      timestamp: '2025-11-08T11:20:00Z',
      isRead: true,
      priority: 'normal'
    }
  ];

  const providers = [
    { id: 'dr-chen', name: 'Dr. Sarah Chen', role: 'Therapist' },
    { id: 'dr-rodriguez', name: 'Dr. Michael Rodriguez', role: 'Psychiatrist' },
    { id: 'dr-johnson', name: 'Dr. Emily Johnson', role: 'Group Therapist' },
    { id: 'staff-nurse', name: 'Nurse Jennifer', role: 'Care Coordinator' }
  ];

  const inboxMessages = mockMessages.filter(msg => msg.recipientId === 'patient-123');
  const sentMessages = mockMessages.filter(msg => msg.senderId === 'patient-123');
  const unreadCount = inboxMessages.filter(msg => !msg.isRead).length;

  const getPriorityColor = (priority: string) => {
    const colorMap: { [key: string]: string } = {
      low: 'text-muted-foreground',
      normal: 'text-foreground',
      high: 'text-warning',
      urgent: 'text-error'
    };
    return colorMap[priority] || 'text-foreground';
  };

  const getPriorityIcon = (priority: string) => {
    const iconMap: { [key: string]: string } = {
      low: 'ArrowDownIcon',
      normal: 'MinusIcon',
      high: 'ArrowUpIcon',
      urgent: 'ExclamationTriangleIcon'
    };
    return iconMap[priority] || 'MinusIcon';
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const handleSendMessage = () => {
    // Mock send message functionality
    console.log('Sending message:', newMessage);
    setNewMessage({ recipient: '', subject: '', content: '', priority: 'normal' });
    setActiveView('inbox');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-muted rounded-lg transition-micro"
        >
          <Icon name="ArrowLeftIcon" size={20} className="text-muted-foreground" />
        </button>
        <div>
          <h1 className="font-headline text-2xl font-semibold text-foreground">
            Secure Messages
          </h1>
          <p className="font-body text-muted-foreground">
            Communicate securely with your care team
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-card rounded-lg shadow-soft">
        <div className="border-b border-border">
          <nav className="flex">
            <button
              onClick={() => setActiveView('inbox')}
              className={`flex-1 py-4 px-6 font-headline font-medium transition-micro flex items-center justify-center gap-2 ${activeView === 'inbox' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Icon name="InboxIcon" size={20} />
              Inbox
              {unreadCount > 0 && (
                <span className="bg-error text-error-foreground text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveView('compose')}
              className={`flex-1 py-4 px-6 font-headline font-medium transition-micro flex items-center justify-center gap-2 ${activeView === 'compose' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Icon name="PencilIcon" size={20} />
              Compose
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeView === 'inbox' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-lg font-semibold text-foreground">
                  Messages ({inboxMessages.length})
                </h2>
                <button className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1 text-sm font-medium">
                  <Icon name="ArrowPathIcon" size={16} />
                  Refresh
                </button>
              </div>

              {inboxMessages.length > 0 ? (
                <div className="space-y-2">
                  {inboxMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`border border-border rounded-lg p-4 hover:bg-muted/30 transition-micro cursor-pointer ${!message.isRead ? 'bg-bg-light' : ''
                        }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="UserIcon" size={20} className="text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <h3 className={`font-headline font-medium ${!message.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {message.senderName}
                              </h3>
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                {message.senderRole}
                              </span>
                              <Icon
                                name={getPriorityIcon(message.priority) as any}
                                size={16}
                                className={getPriorityColor(message.priority)}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">
                                {formatTimestamp(message.timestamp)}
                              </span>
                              {!message.isRead && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                            </div>
                          </div>

                          <h4 className={`font-headline text-sm mb-2 ${!message.isRead ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                            {message.subject}
                          </h4>

                          <p className="font-body text-sm text-muted-foreground line-clamp-2">
                            {message.content}
                          </p>

                          {message.attachments && message.attachments.length > 0 && (
                            <div className="flex items-center gap-1 mt-2">
                              <Icon name="PaperClipIcon" size={16} className="text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {message.attachments.length} attachment(s)
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="InboxIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                    No Messages
                  </h3>
                  <p className="font-body text-muted-foreground">
                    You don't have any messages yet
                  </p>
                </div>
              )}
            </div>
          )}

          {activeView === 'compose' && (
            <div className="space-y-6">
              <h2 className="font-headline text-lg font-semibold text-foreground">
                Compose New Message
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="recipient" className="block font-body font-medium text-foreground mb-2">
                    Send To
                  </label>
                  <select
                    id="recipient"
                    value={newMessage.recipient}
                    onChange={(e) => setNewMessage(prev => ({ ...prev, recipient: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body"
                  >
                    <option value="">Select a provider...</option>
                    {providers.map((provider) => (
                      <option key={provider.id} value={provider.id}>
                        {provider.name} - {provider.role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={newMessage.subject}
                    onChange={(e) => setNewMessage(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block font-body font-medium text-foreground mb-2">
                    Priority
                  </label>
                  <select
                    id="priority"
                    value={newMessage.priority}
                    onChange={(e) => setNewMessage(prev => ({ ...prev, priority: e.target.value as any }))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body"
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="content" className="block font-body font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="content"
                    value={newMessage.content}
                    onChange={(e) => setNewMessage(prev => ({ ...prev, content: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.recipient || !newMessage.subject || !newMessage.content}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Icon name="PaperAirplaneIcon" size={16} />
                    Send Message
                  </button>

                  <button className="text-muted-foreground hover:text-foreground transition-micro flex items-center gap-2">
                    <Icon name="PaperClipIcon" size={16} />
                    Attach File
                  </button>
                </div>
              </div>

              <div className="bg-bg-light rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline font-medium text-foreground mb-1">
                      Secure Messaging Guidelines
                    </h4>
                    <ul className="font-body text-sm text-muted-foreground space-y-1">
                      <li>• Messages are encrypted and HIPAA-compliant</li>
                      <li>• Response time is typically 24-48 hours</li>
                      <li>• For urgent matters, please call the clinic directly</li>
                      <li>• Do not include sensitive information like SSN or payment details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sent Messages */}
      <div className="bg-card rounded-lg shadow-soft p-6">
        <h2 className="font-headline text-lg font-semibold text-foreground mb-4">
          Sent Messages ({sentMessages.length})
        </h2>

        {sentMessages.length > 0 ? (
          <div className="space-y-2">
            {sentMessages.map((message) => (
              <div key={message.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="PaperAirplaneIcon" size={20} className="text-secondary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-headline font-medium text-foreground">
                        To: {message.recipientName}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(message.timestamp)}
                      </span>
                    </div>

                    <h4 className="font-headline text-sm text-muted-foreground mb-2">
                      {message.subject}
                    </h4>

                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Icon name="PaperAirplaneIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="font-body text-muted-foreground">No sent messages</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecureMessaging;