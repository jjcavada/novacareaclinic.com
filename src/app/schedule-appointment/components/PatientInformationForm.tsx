'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

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

interface PatientInformationFormProps {
  patientInfo: PatientInfo;
  onPatientInfoChange: (info: PatientInfo) => void;
  isNewPatient: boolean;
  onPatientTypeChange: (isNew: boolean) => void;
}

const PatientInformationForm = ({
  patientInfo,
  onPatientInfoChange,
  isNewPatient,
  onPatientTypeChange
}: PatientInformationFormProps) => {
  const [showInsuranceHelp, setShowInsuranceHelp] = useState(false);

  const handleInputChange = (field: keyof PatientInfo, value: string | boolean) => {
    onPatientInfoChange({
      ...patientInfo,
      [field]: value
    });
  };

  const genderOptions = [
    { value: '', label: 'Select Gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'non-binary', label: 'Non-binary' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' },
    { value: 'other', label: 'Other' }
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'mandarin', label: 'Mandarin' },
    { value: 'other', label: 'Other' }
  ];

  const insuranceProviders = [
    { value: '', label: 'Select Insurance Provider' },
    { value: 'medicaid', label: 'Medicaid' },
    { value: 'medicare', label: 'Medicare' },
    { value: 'blue-cross', label: 'Blue Cross Blue Shield' },
    { value: 'aetna', label: 'Aetna' },
    { value: 'cigna', label: 'Cigna' },
    { value: 'united', label: 'United Healthcare' },
    { value: 'humana', label: 'Humana' },
    { value: 'self-pay', label: 'Self-Pay / No Insurance' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="space-y-6">
      {/* Patient Type Selection */}
      <div className="bg-bg-light p-4 rounded-lg">
        <h3 className="font-headline font-semibold text-foreground mb-3">
          Patient Type
        </h3>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="patientType"
              checked={isNewPatient}
              onChange={() => onPatientTypeChange(true)}
              className="w-4 h-4 text-primary focus:ring-primary border-border"
            />
            <span className="font-medium">New Patient</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="patientType"
              checked={!isNewPatient}
              onChange={() => onPatientTypeChange(false)}
              className="w-4 h-4 text-primary focus:ring-primary border-border"
            />
            <span className="font-medium">Returning Patient</span>
          </label>
        </div>
      </div>

      {/* Personal Information */}
      <div>
        <h3 className="font-headline font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="UserIcon" size={20} />
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              First Name *
            </label>
            <input
              type="text"
              value={patientInfo.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Last Name *
            </label>
            <input
              type="text"
              value={patientInfo.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={patientInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              value={patientInfo.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(602) 555-0123"
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Date of Birth *
            </label>
            <input
              type="date"
              value={patientInfo.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Gender
            </label>
            <select
              value={patientInfo.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div>
        <h3 className="font-headline font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="MapPinIcon" size={20} />
          Address Information
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Street Address *
            </label>
            <input
              type="text"
              value={patientInfo.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                City *
              </label>
              <input
                type="text"
                value={patientInfo.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                State *
              </label>
              <input
                type="text"
                value={patientInfo.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                placeholder="AZ"
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                ZIP Code *
              </label>
              <input
                type="text"
                value={patientInfo.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div>
        <h3 className="font-headline font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="ExclamationTriangleIcon" size={20} />
          Emergency Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Emergency Contact Name *
            </label>
            <input
              type="text"
              value={patientInfo.emergencyContact}
              onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Emergency Contact Phone *
            </label>
            <input
              type="tel"
              value={patientInfo.emergencyPhone}
              onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              required
            />
          </div>
        </div>
      </div>

      {/* Insurance Information */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline font-semibold text-foreground flex items-center gap-2">
            <Icon name="CreditCardIcon" size={20} />
            Insurance Information
          </h3>
          <button
            type="button"
            onClick={() => setShowInsuranceHelp(!showInsuranceHelp)}
            className="text-primary hover:text-primary/80 transition-micro flex items-center gap-1"
          >
            <Icon name="QuestionMarkCircleIcon" size={16} />
            Help
          </button>
        </div>

        {showInsuranceHelp && (
          <div className="bg-bg-light p-4 rounded-lg mb-4">
            <p className="text-sm text-foreground">
              We accept most major insurance plans including Medicaid and Medicare.
              If you don't have insurance, we offer sliding scale fees based on income.
              Call us at (602) 556-8120 for assistance with insurance verification.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Insurance Provider
            </label>
            <select
              value={patientInfo.insuranceProvider}
              onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
            >
              {insuranceProviders.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Policy Number
            </label>
            <input
              type="text"
              value={patientInfo.policyNumber}
              onChange={(e) => handleInputChange('policyNumber', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div>
        <h3 className="font-headline font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Cog6ToothIcon" size={20} />
          Preferences & Accessibility
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Preferred Language
            </label>
            <select
              value={patientInfo.preferredLanguage}
              onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Accessibility Accommodations Needed
            </label>
            <textarea
              value={patientInfo.accessibilityNeeds}
              onChange={(e) => handleInputChange('accessibilityNeeds', e.target.value)}
              placeholder="Please describe any accessibility needs (wheelchair access, hearing assistance, etc.)"
              className="w-full px-3 py-2 border border-border rounded-lg focus-healing h-20 resize-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="transportationNeeds"
              checked={patientInfo.transportationNeeds}
              onChange={(e) => handleInputChange('transportationNeeds', e.target.checked)}
              className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
            />
            <label htmlFor="transportationNeeds" className="text-sm font-medium text-foreground">
              I need transportation assistance information
            </label>
          </div>
        </div>
      </div>

      {/* Clinical Information (New Patients Only) */}
      {isNewPatient && (
        <div>
          <h3 className="font-headline font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="ClipboardDocumentListIcon" size={20} />
            Clinical Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Reason for Visit *
              </label>
              <textarea
                value={patientInfo.reasonForVisit}
                onChange={(e) => handleInputChange('reasonForVisit', e.target.value)}
                placeholder="Please briefly describe what brings you to our clinic today"
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing h-24 resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Previous Mental Health Treatment
              </label>
              <textarea
                value={patientInfo.previousTreatment}
                onChange={(e) => handleInputChange('previousTreatment', e.target.value)}
                placeholder="Please describe any previous mental health treatment or therapy"
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing h-20 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Current Medications
              </label>
              <textarea
                value={patientInfo.currentMedications}
                onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                placeholder="List all current medications including dosages"
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing h-20 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Allergies
              </label>
              <input
                type="text"
                value={patientInfo.allergies}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
                placeholder="List any known allergies or enter 'None'"
                className="w-full px-3 py-2 border border-border rounded-lg focus-healing"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientInformationForm;