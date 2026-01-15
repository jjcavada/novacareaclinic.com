'use client';

import React, { useState, useEffect } from 'react';
import InsuranceVerificationTool from './InsuranceVerificationTool';
import SlidingFeeCalculator from './SlidingFeeCalculator';
import AcceptedInsuranceGrid from './AcceptedInsuranceGrid';
import PaymentOptionsSection from './PaymentOptionsSection';
import CostTransparencySection from './CostTransparencySection';

interface InsurancePaymentInteractiveProps {
  className?: string;
}

const InsurancePaymentInteractive = ({ className = '' }: InsurancePaymentInteractiveProps) => {
  const [activeTab, setActiveTab] = useState('insurance');
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`space-y-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'insurance', label: 'Accepted Insurance', icon: 'ShieldCheckIcon' },
    { id: 'verification', label: 'Verify Coverage', icon: 'MagnifyingGlassIcon' },
    { id: 'calculator', label: 'Fee Calculator', icon: 'CalculatorIcon' },
    { id: 'payment', label: 'Payment Options', icon: 'CreditCardIcon' },
    { id: 'pricing', label: 'Transparent Pricing', icon: 'CurrencyDollarIcon' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'insurance':
        return <AcceptedInsuranceGrid />;
      case 'verification':
        return (
          <div className="max-w-2xl mx-auto">
            <InsuranceVerificationTool />
          </div>
        );
      case 'calculator':
        return (
          <div className="max-w-2xl mx-auto">
            <SlidingFeeCalculator />
          </div>
        );
      case 'payment':
        return <PaymentOptionsSection />;
      case 'pricing':
        return <CostTransparencySection />;
      default:
        return <AcceptedInsuranceGrid />;
    }
  };

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-healing border border-border p-2 mb-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-healing ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default InsurancePaymentInteractive;