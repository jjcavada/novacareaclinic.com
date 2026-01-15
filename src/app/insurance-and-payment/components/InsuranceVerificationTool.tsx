'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface InsuranceInfo {
  provider: string;
  memberId: string;
  groupNumber: string;
  subscriberName: string;
}

interface InsuranceVerificationToolProps {
  className?: string;
}

const InsuranceVerificationTool = ({ className = '' }: InsuranceVerificationToolProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<InsuranceInfo>({
    provider: '',
    memberId: '',
    groupNumber: '',
    subscriberName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`bg-white rounded-lg shadow-healing p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (field: keyof InsuranceInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({
      provider: '',
      memberId: '',
      groupNumber: '',
      subscriberName: ''
    });
    setShowResults(false);
  };

  return (
    <div className={`bg-white rounded-lg shadow-healing p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline font-semibold text-lg text-text-primary">
            Insurance Verification Tool
          </h3>
          <p className="text-sm text-text-secondary">
            Check your coverage before your appointment
          </p>
        </div>
      </div>

      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="provider" className="block text-sm font-medium text-text-primary mb-2">
              Insurance Provider *
            </label>
            <select
              id="provider"
              value={formData.provider}
              onChange={(e) => handleInputChange('provider', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus-healing transition-healing"
              required
            >
              <option value="">Select your insurance provider</option>
              <option value="aetna">Aetna</option>
              <option value="anthem">Anthem Blue Cross Blue Shield</option>
              <option value="cigna">Cigna</option>
              <option value="humana">Humana</option>
              <option value="medicaid">Arizona Medicaid (AHCCCS)</option>
              <option value="medicare">Medicare</option>
              <option value="tricare">TRICARE</option>
              <option value="united">UnitedHealthcare</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="memberId" className="block text-sm font-medium text-text-primary mb-2">
              Member ID *
            </label>
            <input
              type="text"
              id="memberId"
              value={formData.memberId}
              onChange={(e) => handleInputChange('memberId', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus-healing transition-healing"
              placeholder="Enter your member ID"
              required
            />
          </div>

          <div>
            <label htmlFor="groupNumber" className="block text-sm font-medium text-text-primary mb-2">
              Group Number
            </label>
            <input
              type="text"
              id="groupNumber"
              value={formData.groupNumber}
              onChange={(e) => handleInputChange('groupNumber', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus-healing transition-healing"
              placeholder="Enter group number (if applicable)"
            />
          </div>

          <div>
            <label htmlFor="subscriberName" className="block text-sm font-medium text-text-primary mb-2">
              Subscriber Name *
            </label>
            <input
              type="text"
              id="subscriberName"
              value={formData.subscriberName}
              onChange={(e) => handleInputChange('subscriberName', e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus-healing transition-healing"
              placeholder="Enter subscriber's full name"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Verifying Coverage...
              </>
            ) : (
              <>
                <Icon name="MagnifyingGlassIcon" size={16} />
                Verify Coverage
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="CheckCircleIcon" size={20} className="text-success" />
              <h4 className="font-headline font-semibold text-success">Coverage Verified</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Provider:</span> {formData.provider}</p>
              <p><span className="font-medium">Status:</span> Active Coverage</p>
              <p><span className="font-medium">Copay:</span> $25 per session</p>
              <p><span className="font-medium">Deductible:</span> $150 remaining</p>
            </div>
          </div>

          <div className="bg-bg-light border border-border rounded-lg p-4">
            <h4 className="font-headline font-semibold text-text-primary mb-3">Covered Services</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <Icon name="CheckIcon" size={16} className="text-success" />
                Individual Therapy Sessions
              </li>
              <li className="flex items-center gap-2">
                <Icon name="CheckIcon" size={16} className="text-success" />
                Group Therapy Sessions
              </li>
              <li className="flex items-center gap-2">
                <Icon name="CheckIcon" size={16} className="text-success" />
                Psychiatric Evaluations
              </li>
              <li className="flex items-center gap-2">
                <Icon name="CheckIcon" size={16} className="text-success" />
                Medication Management
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetForm}
              className="flex-1 bg-muted text-muted-foreground py-2 px-4 rounded-lg font-medium hover:bg-muted/80 transition-healing"
            >
              Check Another Plan
            </button>
            <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-healing">
              Schedule Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceVerificationTool;