'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import LoginForm from './LoginForm';
import DashboardOverview from './DashboardOverview';
import AppointmentManager from './AppointmentManager';
import MedicalRecords from './MedicalRecords';
import TelehealthPlatform from './TelehealthPlatform';
import SecureMessaging from './SecureMessaging';

interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  address: string;
}

const PatientPortalInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeSection, setActiveSection] = useState<string>('dashboard');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-bg-light">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        </main>
      </div>
    );
  }

  const handleLogin = async (credentials: { email: string; password: string; twoFactor?: string }) => {
    setIsLoading(true);

    // Mock authentication
    const mockCredentials = {
      email: 'patient@novacare.com',
      password: 'SecurePass123',
      twoFactor: '123456'
    };

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (credentials.email === mockCredentials.email &&
      credentials.password === mockCredentials.password) {

      // Mock user data
      const mockUser: User = {
        id: 'patient-123',
        name: 'John Doe',
        email: 'patient@novacare.com',
        dateOfBirth: '1985-06-15',
        phone: '(602) 555-0123',
        address: '123 Main St, Phoenix, AZ 85001'
      };

      setCurrentUser(mockUser);
      setIsLoggedIn(true);
      setActiveSection('dashboard');
    } else {
      alert('Invalid credentials. Please use the demo credentials provided.');
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveSection('dashboard');
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-bg-light">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <LoginForm onLogin={handleLogin} isLoading={isLoading} />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-lg shadow-soft p-6 sticky top-24">
              {/* User Profile */}
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-headline text-xl font-semibold text-primary-foreground">
                    {currentUser?.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-headline font-semibold text-foreground">
                  {currentUser?.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Patient ID: {currentUser?.id}
                </p>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: 'HomeIcon' },
                  { id: 'appointments', label: 'Appointments', icon: 'CalendarIcon' },
                  { id: 'records', label: 'Medical Records', icon: 'DocumentTextIcon' },
                  { id: 'telehealth', label: 'Telehealth', icon: 'VideoCameraIcon' },
                  { id: 'messages', label: 'Messages', icon: 'ChatBubbleLeftRightIcon' },
                  { id: 'medications', label: 'Medications', icon: 'PlusIcon' },
                  { id: 'insurance', label: 'Insurance', icon: 'CreditCardIcon' },
                  { id: 'settings', label: 'Settings', icon: 'Cog6ToothIcon' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body font-medium transition-micro text-left ${activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Logout Button */}
              <div className="mt-6 pt-6 border-t border-border">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body font-medium text-error hover:bg-error/10 transition-micro"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeSection === 'dashboard' && (
              <DashboardOverview
                patientName={currentUser?.name || ''}
                onNavigate={handleNavigate}
              />
            )}

            {activeSection === 'appointments' && (
              <AppointmentManager onBack={() => handleNavigate('dashboard')} />
            )}

            {activeSection === 'records' && (
              <MedicalRecords onBack={() => handleNavigate('dashboard')} />
            )}

            {activeSection === 'telehealth' && (
              <TelehealthPlatform onBack={() => handleNavigate('dashboard')} />
            )}

            {activeSection === 'messages' && (
              <SecureMessaging onBack={() => handleNavigate('dashboard')} />
            )}

            {/* Placeholder sections */}
            {['medications', 'insurance', 'settings'].includes(activeSection) && (
              <div className="bg-card rounded-lg shadow-soft p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="font-headline text-xl font-semibold text-foreground mb-2">
                  {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section
                </h2>
                <p className="font-body text-muted-foreground mb-6">
                  This section is coming soon. Please check back later for updates.
                </p>
                <button
                  onClick={() => handleNavigate('dashboard')}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-headline font-semibold hover:bg-primary/90 transition-all"
                >
                  Back to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientPortalInteractive;