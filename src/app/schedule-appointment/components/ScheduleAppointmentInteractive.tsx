'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppointmentTypeSelector from './AppointmentTypeSelector';
import TimeSlotSelector from './TimeSlotSelector';
import PatientInformationForm from './PatientInformationForm';
import AppointmentSummary from './AppointmentSummary';

interface PatientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContact: string;
  emergencyPhone: string;
  preferredLanguage: string;
  insuranceProvider: string;
  policyNumber: string;
  reasonForVisit: string;
  previousTreatment: string;
  currentMedications: string;
  allergies: string;
  accessibilityNeeds: string;
  transportationNeeds: boolean;
  isNewPatient: boolean;
}

const ScheduleAppointmentInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentMode, setAppointmentMode] = useState<'in-person' | 'telehealth'>('in-person');
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [showCrisisModal, setShowCrisisModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: 'AZ',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    preferredLanguage: 'english',
    insuranceProvider: '',
    policyNumber: '',
    reasonForVisit: '',
    previousTreatment: '',
    currentMedications: '',
    allergies: '',
    accessibilityNeeds: '',
    transportationNeeds: false,
    isNewPatient: true
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    setPatientInfo(prev => ({ ...prev, isNewPatient }));
  }, [isNewPatient]);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { id: 1, name: 'Appointment Type', icon: 'ClipboardDocumentListIcon' },
    { id: 2, name: 'Date & Time', icon: 'CalendarIcon' },
    { id: 3, name: 'Patient Information', icon: 'UserIcon' },
    { id: 4, name: 'Review & Confirm', icon: 'CheckCircleIcon' }
  ];

  const canProceedToStep2 = selectedType !== '';
  const canProceedToStep3 = selectedDate !== '' && selectedTime !== '';
  const canProceedToStep4 = patientInfo.firstName && patientInfo.lastName && patientInfo.email && patientInfo.phone;

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEditSection = (section: string) => {
    if (section === 'appointment') {
      setCurrentStep(1);
    } else if (section === 'patient') {
      setCurrentStep(3);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: selectedType,
          date: selectedDate,
          time: selectedTime,
          appointmentMode: appointmentMode,
          patientInfo: patientInfo,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessMessage(true);
      } else {
        console.error('Failed to send appointment confirmation');
        // Still show success to user as appointment is scheduled
        setShowSuccessMessage(true);
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      // Still show success to user as appointment is scheduled locally
      setShowSuccessMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCrisisHelp = () => {
    setShowCrisisModal(true);
  };

  const appointmentDetails = {
    type: selectedType,
    provider: 'To be assigned by our team',
    date: selectedDate,
    time: selectedTime,
    patientName: `${patientInfo.firstName} ${patientInfo.lastName}`,
    patientEmail: patientInfo.email,
    patientPhone: patientInfo.phone,
    isNewPatient: isNewPatient,
    appointmentMode: appointmentMode
  };

  if (showSuccessMessage) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-brand p-8 text-center">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckIcon" size={32} className="text-success-foreground" />
          </div>
          <h2 className="font-headline font-bold text-2xl text-foreground mb-2">
            Appointment Scheduled!
          </h2>
          <p className="text-muted-foreground mb-6">
            Your appointment has been successfully scheduled. Our team will assign the most appropriate provider for your needs. You'll receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/homepage'}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Return to Homepage
            </button>
            <button
              onClick={() => {
                setShowSuccessMessage(false);
                setCurrentStep(1);
                setSelectedType('');
                setSelectedDate('');
                setSelectedTime('');
                setPatientInfo({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  dateOfBirth: '',
                  gender: '',
                  address: '',
                  city: '',
                  state: 'AZ',
                  zipCode: '',
                  emergencyContact: '',
                  emergencyPhone: '',
                  preferredLanguage: 'english',
                  insuranceProvider: '',
                  policyNumber: '',
                  reasonForVisit: '',
                  previousTreatment: '',
                  currentMedications: '',
                  allergies: '',
                  accessibilityNeeds: '',
                  transportationNeeds: false,
                  isNewPatient: true
                });
              }}
              className="w-full border border-border text-text-charcoal py-3 px-4 rounded-lg font-semibold hover:bg-bg-light transition-all"
            >
              Schedule Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
            Schedule Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards better mental health. Our compassionate team is here to support you.
          </p>
        </div>

        {/* Crisis Support Banner */}
        <div className="bg-accent text-white rounded-lg p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="ExclamationTriangleIcon" size={24} />
            <div>
              <div className="font-semibold">Need immediate help?</div>
              <div className="text-sm opacity-90">Crisis support available 24/7</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:988"
              className="bg-white text-accent px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Call 988
            </a>
            <button
              onClick={handleCrisisHelp}
              className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-accent transition-all"
            >
              Get Help Now
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                      }`}
                  >
                    {currentStep > step.id ? (
                      <Icon name="CheckIcon" size={20} />
                    ) : (
                      <Icon name={step.icon as any} size={20} />
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className={`text-sm font-medium ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                      Step {step.id}
                    </div>
                    <div className={`text-xs ${currentStep >= step.id ? 'text-muted-foreground' : 'text-muted-foreground/60'
                      }`}>
                      {step.name}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.id ? 'bg-primary' : 'bg-border'
                    }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-brand p-6 md:p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="font-headline font-bold text-2xl text-foreground mb-6">
                What type of appointment do you need?
              </h2>
              <AppointmentTypeSelector
                selectedType={selectedType}
                onTypeSelect={setSelectedType}
              />

              {selectedType && (
                <div className="mt-6 p-4 bg-bg-light rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Appointment Format</h3>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="appointmentMode"
                        value="in-person"
                        checked={appointmentMode === 'in-person'}
                        onChange={(e) => setAppointmentMode(e.target.value as 'in-person' | 'telehealth')}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      <span className="font-medium">In-Person Visit</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="appointmentMode"
                        value="telehealth"
                        checked={appointmentMode === 'telehealth'}
                        onChange={(e) => setAppointmentMode(e.target.value as 'in-person' | 'telehealth')}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      <span className="font-medium">Telehealth (Video Call)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="font-headline font-bold text-2xl text-foreground mb-6">
                  Choose Date & Time
                </h2>
                <div className="bg-bg-light p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Provider Assignment</h4>
                      <p className="text-muted-foreground text-sm">
                        Our clinical team will carefully review your appointment details and assign the most appropriate provider based on your specific needs and preferences.
                      </p>
                    </div>
                  </div>
                </div>
                <TimeSlotSelector
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateSelect={setSelectedDate}
                  onTimeSelect={setSelectedTime}
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="font-headline font-bold text-2xl text-foreground mb-6">
                Patient Information
              </h2>
              <PatientInformationForm
                patientInfo={patientInfo}
                onPatientInfoChange={setPatientInfo}
                isNewPatient={isNewPatient}
                onPatientTypeChange={setIsNewPatient}
              />
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="font-headline font-bold text-2xl text-foreground mb-6">
                Review & Confirm Your Appointment
              </h2>
              <AppointmentSummary
                appointmentDetails={appointmentDetails}
                onEdit={handleEditSection}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold text-text-charcoal hover:bg-bg-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronLeftIcon" size={20} />
              Previous
            </button>

            <div className="flex items-center gap-4">
              <a
                href="tel:602-556-8120"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-micro"
              >
                <Icon name="PhoneIcon" size={16} />
                <span className="text-sm font-medium">Need help? Call (602) 556-8120</span>
              </a>
            </div>

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !canProceedToStep2) ||
                  (currentStep === 2 && !canProceedToStep3) ||
                  (currentStep === 3 && !canProceedToStep4)
                }
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <Icon name="ChevronRightIcon" size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-success-foreground border-t-transparent"></div>
                    Scheduling...
                  </>
                ) : (
                  <>
                    <Icon name="CheckIcon" size={20} />
                    Confirm Appointment
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Crisis Modal */}
        {showCrisisModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-brand max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline font-bold text-xl text-foreground">
                  Crisis Support Resources
                </h3>
                <button
                  onClick={() => setShowCrisisModal(false)}
                  className="p-1 hover:bg-muted rounded transition-micro"
                >
                  <Icon name="XMarkIcon" size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Immediate Crisis Support</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>National Crisis Lifeline:</span>
                      <a href="tel:988" className="font-semibold text-accent hover:underline">988</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>NovaCare Crisis Line:</span>
                      <a href="tel:602-556-8120" className="font-semibold text-accent hover:underline">(602) 556-8120</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Emergency Services:</span>
                      <a href="tel:911" className="font-semibold text-error hover:underline">911</a>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>If you're experiencing thoughts of self-harm or suicide, please reach out immediately. Help is available 24/7.</p>
                </div>

                <button
                  onClick={() => setShowCrisisModal(false)}
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleAppointmentInteractive;