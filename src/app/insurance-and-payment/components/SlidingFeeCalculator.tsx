'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FeeCalculatorData {
  householdSize: string;
  annualIncome: string;
  hasInsurance: boolean;
}

interface SlidingFeeCalculatorProps {
  className?: string;
}

const SlidingFeeCalculator = ({ className = '' }: SlidingFeeCalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FeeCalculatorData>({
    householdSize: '',
    annualIncome: '',
    hasInsurance: false
  });
  const [calculatedFee, setCalculatedFee] = useState<number | null>(null);
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
            <div className="h-6 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    );
  }

  const calculateFee = () => {
    const income = parseInt(formData.annualIncome);
    const size = parseInt(formData.householdSize);

    // Federal Poverty Level calculations (simplified)
    const fplBase = 14580; // 2024 FPL for 1 person
    const fplPerAdditional = 5140;
    const fpl = fplBase + (size - 1) * fplPerAdditional;

    const incomeRatio = income / fpl;

    let fee = 120; // Standard session fee

    if (incomeRatio <= 1.0) {
      fee = 25; // 100% FPL or below
    } else if (incomeRatio <= 1.5) {
      fee = 45; // 100-150% FPL
    } else if (incomeRatio <= 2.0) {
      fee = 65; // 150-200% FPL
    } else if (incomeRatio <= 2.5) {
      fee = 85; // 200-250% FPL
    } else if (incomeRatio <= 3.0) {
      fee = 105; // 250-300% FPL
    }

    if (formData.hasInsurance) {
      fee = Math.max(fee * 0.7, 25); // 30% discount with insurance, minimum $25
    }

    return Math.round(fee);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let fee = calculateFee();
    setCalculatedFee(fee);
    setShowResults(true);
  };

  const resetCalculator = () => {
    setFormData({
      householdSize: '',
      annualIncome: '',
      hasInsurance: false
    });
    setCalculatedFee(null);
    setShowResults(false);
  };

  return (
    <div className={`bg-white rounded-lg shadow-healing p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="font-headline font-semibold text-lg text-text-primary">
            Sliding Fee Calculator
          </h3>
          <p className="text-sm text-text-secondary">
            Estimate your session cost based on income
          </p>
        </div>
      </div>

      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="householdSize" className="block text-sm font-medium text-text-primary mb-2">
              Household Size *
            </label>
            <select
              id="householdSize"
              value={formData.householdSize}
              onChange={(e) => setFormData(prev => ({ ...prev, householdSize: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-lg focus-healing transition-healing"
              required
            >
              <option value="">Select household size</option>
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5 people</option>
              <option value="6">6 people</option>
              <option value="7">7 people</option>
              <option value="8">8+ people</option>
            </select>
          </div>

          <div>
            <label htmlFor="annualIncome" className="block text-sm font-medium text-text-primary mb-2">
              Annual Household Income *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">$</span>
              <input
                type="number"
                id="annualIncome"
                value={formData.annualIncome}
                onChange={(e) => setFormData(prev => ({ ...prev, annualIncome: e.target.value }))}
                className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus-healing transition-healing"
                placeholder="0"
                min="0"
                required
              />
            </div>
            <p className="text-xs text-text-secondary mt-1">
              Include all sources of income before taxes
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="hasInsurance"
              checked={formData.hasInsurance}
              onChange={(e) => setFormData(prev => ({ ...prev, hasInsurance: e.target.checked }))}
              className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
            />
            <label htmlFor="hasInsurance" className="text-sm text-text-primary">
              I have health insurance
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-lg font-cta font-semibold hover:bg-accent/90 transition-healing flex items-center justify-center gap-2"
          >
            <Icon name="CalculatorIcon" size={16} />
            Calculate My Fee
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <div className="mb-4">
              <div className="text-3xl font-bold text-accent mb-2">
                ${calculatedFee}
              </div>
              <p className="text-sm text-text-secondary">
                Estimated cost per therapy session
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 text-left">
              <h4 className="font-headline font-semibold text-text-primary mb-3">
                Fee Breakdown
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Standard Session Fee:</span>
                  <span>$120</span>
                </div>
                <div className="flex justify-between">
                  <span>Income-Based Discount:</span>
                  <span className="text-success">-${120 - (formData.hasInsurance ? calculatedFee / 0.7 : calculatedFee)}</span>
                </div>
                {formData.hasInsurance && (
                  <div className="flex justify-between">
                    <span>Insurance Discount (30%):</span>
                    <span className="text-success">-${Math.round((calculatedFee / 0.7) - calculatedFee)}</span>
                  </div>
                )}
                <div className="border-t border-border pt-2 flex justify-between font-semibold">
                  <span>Your Cost:</span>
                  <span className="text-accent">${calculatedFee}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bg-light border border-border rounded-lg p-4">
            <h4 className="font-headline font-semibold text-text-primary mb-2">
              Next Steps
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                Bring proof of income to your first appointment
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                Complete sliding fee application during intake
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                Fee is reviewed annually or if circumstances change
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetCalculator}
              className="flex-1 bg-muted text-muted-foreground py-2 px-4 rounded-lg font-medium hover:bg-muted/80 transition-healing"
            >
              Recalculate
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

export default SlidingFeeCalculator;