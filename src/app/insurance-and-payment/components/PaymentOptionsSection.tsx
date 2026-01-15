import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  processingTime: string;
  fees?: string;
}

interface PaymentOptionsSection {
  className?: string;
}

const PaymentOptionsSection = ({ className = '' }: PaymentOptionsSection) => {
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'insurance',
      name: 'Insurance Billing',
      description: 'We bill your insurance directly for covered services',
      icon: 'ShieldCheckIcon',
      features: [
        'Direct billing to insurance',
        'Real-time eligibility verification',
        'Copay collection at time of service',
        'Detailed explanation of benefits'
      ],
      processingTime: 'Immediate',
      fees: 'No additional fees'
    },
    {
      id: 'credit-debit',
      name: 'Credit & Debit Cards',
      description: 'Secure payment processing for all major cards',
      icon: 'CreditCardIcon',
      features: [
        'Visa, MasterCard, American Express, Discover',
        'Secure payment processing',
        'Automatic payment options available',
        'Payment receipts via email'
      ],
      processingTime: 'Immediate',
      fees: 'No additional fees'
    },
    {
      id: 'hsa-fsa',
      name: 'HSA & FSA Cards',
      description: 'Use your health savings or flexible spending accounts',
      icon: 'BanknotesIcon',
      features: [
        'Health Savings Account (HSA) accepted',
        'Flexible Spending Account (FSA) accepted',
        'Automatic documentation for reimbursement',
        'Tax-advantaged payment method'
      ],
      processingTime: 'Immediate',
      fees: 'No additional fees'
    },
    {
      id: 'payment-plans',
      name: 'Payment Plans',
      description: 'Flexible payment arrangements for ongoing treatment',
      icon: 'CalendarDaysIcon',
      features: [
        'Interest-free payment plans available',
        'Customized payment schedules',
        'Automatic monthly payments',
        'No credit check required'
      ],
      processingTime: '1-2 business days to setup',
      fees: 'No interest or setup fees'
    },
    {
      id: 'cash-check',
      name: 'Cash & Check',
      description: 'Traditional payment methods accepted',
      icon: 'CurrencyDollarIcon',
      features: [
        'Cash payments accepted',
        'Personal checks accepted',
        'Money orders accepted',
        'Receipt provided immediately'
      ],
      processingTime: 'Immediate',
      fees: 'No additional fees'
    },
    {
      id: 'sliding-fee',
      name: 'Sliding Fee Scale',
      description: 'Income-based pricing for qualifying patients',
      icon: 'ScaleIcon',
      features: [
        'Based on household income and size',
        'Annual income verification required',
        'Significant cost reduction available',
        'Maintains quality of care'
      ],
      processingTime: '1-2 appointments to process',
      fees: 'Reduced fees based on income'
    }
  ];

  const financialAssistancePrograms = [
    {
      name: 'Emergency Financial Assistance',
      description: 'Short-term assistance for patients in crisis',
      eligibility: 'Demonstrated financial hardship',
      coverage: 'Up to 3 sessions covered'
    },
    {
      name: 'Community Care Fund',
      description: 'Donor-supported fund for uninsured patients',
      eligibility: 'Uninsured with income below 200% FPL',
      coverage: 'Ongoing treatment support'
    },
    {
      name: 'Student & Senior Discounts',
      description: 'Special rates for students and seniors',
      eligibility: 'Valid student ID or 65+ years old',
      coverage: '20% discount on standard rates'
    }
  ];

  return (
    <div className={className}>
      {/* Payment Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-lg shadow-healing border border-border hover:shadow-healing-lg transition-healing"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={method.icon as any} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-text-primary">
                    {method.name}
                  </h3>
                </div>
              </div>

              <p className="text-text-secondary text-sm mb-4">
                {method.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-2">Features</h4>
                  <ul className="space-y-1">
                    {method.features.map((feature, index) => (
                      <li key={index} className="text-sm text-text-secondary flex items-start gap-2">
                        <Icon name="CheckIcon" size={12} className="text-success flex-shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Processing:</span>
                  <span className="font-medium text-text-primary">{method.processingTime}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Fees:</span>
                  <span className="font-medium text-success">{method.fees}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Financial Assistance Programs */}
      <div className="bg-white rounded-lg shadow-healing border border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="HeartIcon" size={20} className="text-success" />
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-text-primary">
              Financial Assistance Programs
            </h3>
            <p className="text-sm text-text-secondary">
              Additional support for patients facing financial challenges
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {financialAssistancePrograms.map((program, index) => (
            <div key={index} className="bg-bg-light rounded-lg p-4">
              <h4 className="font-headline font-semibold text-text-primary mb-2">
                {program.name}
              </h4>
              <p className="text-sm text-text-secondary mb-3">
                {program.description}
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-text-primary">Eligibility: </span>
                  <span className="text-text-secondary">{program.eligibility}</span>
                </div>
                <div>
                  <span className="font-medium text-text-primary">Coverage: </span>
                  <span className="text-text-secondary">{program.coverage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-headline font-semibold text-text-primary mb-2">
                How to Apply for Financial Assistance
              </h4>
              <ol className="space-y-1 text-sm text-text-secondary">
                <li>1. Complete our financial assistance application</li>
                <li>2. Provide required income documentation</li>
                <li>3. Meet with our financial counselor</li>
                <li>4. Receive approval and begin treatment</li>
              </ol>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-healing">
                  Download Application
                </button>
                <button className="bg-white text-text-primary border border-border px-4 py-2 rounded-lg font-medium hover:bg-muted transition-healing">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsSection;