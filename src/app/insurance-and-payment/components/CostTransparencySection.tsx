import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceCost {
  id: string;
  name: string;
  description: string;
  standardRate: number;
  insuranceRange: string;
  slidingFeeRange: string;
  duration: string;
  category: 'therapy' | 'psychiatric' | 'assessment' | 'group';
}

interface CostTransparencySection {
  className?: string;
}

const CostTransparencySection = ({ className = '' }: CostTransparencySection) => {
  const serviceCosts: ServiceCost[] = [
    {
      id: 'individual-therapy',
      name: 'Individual Therapy Session',
      description: 'One-on-one therapeutic session with licensed clinician',
      standardRate: 120,
      insuranceRange: '$15 - $45',
      slidingFeeRange: '$25 - $105',
      duration: '50 minutes',
      category: 'therapy'
    },
    {
      id: 'initial-assessment',
      name: 'Initial Clinical Assessment',
      description: 'Comprehensive intake and treatment planning session',
      standardRate: 180,
      insuranceRange: '$25 - $60',
      slidingFeeRange: '$40 - $160',
      duration: '90 minutes',
      category: 'assessment'
    },
    {
      id: 'psychiatric-evaluation',
      name: 'Psychiatric Evaluation',
      description: 'Medical evaluation for medication management',
      standardRate: 250,
      insuranceRange: '$30 - $75',
      slidingFeeRange: '$55 - $220',
      duration: '60 minutes',
      category: 'psychiatric'
    },
    {
      id: 'medication-management',
      name: 'Medication Management',
      description: 'Follow-up appointment for medication monitoring',
      standardRate: 100,
      insuranceRange: '$20 - $40',
      slidingFeeRange: '$25 - $85',
      duration: '30 minutes',
      category: 'psychiatric'
    },
    {
      id: 'group-therapy',
      name: 'Group Therapy Session',
      description: 'Therapeutic group session with 6-8 participants',
      standardRate: 45,
      insuranceRange: '$10 - $25',
      slidingFeeRange: '$15 - $40',
      duration: '90 minutes',
      category: 'group'
    },
    {
      id: 'family-therapy',
      name: 'Family Therapy Session',
      description: 'Family or couples therapy session',
      standardRate: 140,
      insuranceRange: '$20 - $50',
      slidingFeeRange: '$30 - $120',
      duration: '50 minutes',
      category: 'therapy'
    },
    {
      id: 'crisis-intervention',
      name: 'Crisis Intervention',
      description: 'Emergency therapeutic intervention session',
      standardRate: 150,
      insuranceRange: '$25 - $55',
      slidingFeeRange: '$35 - $130',
      duration: '60 minutes',
      category: 'therapy'
    },
    {
      id: 'telehealth-session',
      name: 'Telehealth Session',
      description: 'Virtual therapy session via secure video platform',
      standardRate: 115,
      insuranceRange: '$15 - $45',
      slidingFeeRange: '$25 - $100',
      duration: '50 minutes',
      category: 'therapy'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'therapy':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'psychiatric':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'assessment':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'group':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'therapy':
        return 'Therapy';
      case 'psychiatric':
        return 'Psychiatric';
      case 'assessment':
        return 'Assessment';
      case 'group':
        return 'Group';
      default:
        return 'Other';
    }
  };

  return (
    <div className={className}>
      {/* Cost Transparency Header */}
      <div className="bg-white rounded-lg shadow-healing border border-border p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="CurrencyDollarIcon" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-text-primary">
              Transparent Pricing
            </h3>
            <p className="text-sm text-text-secondary">
              No surprise bills - know your costs upfront
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-light rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="ShieldCheckIcon" size={16} className="text-primary" />
              <h4 className="font-headline font-semibold text-text-primary">No Surprise Billing</h4>
            </div>
            <p className="text-sm text-text-secondary">
              We provide clear cost estimates before treatment begins and never bill for unexpected charges.
            </p>
          </div>

          <div className="bg-bg-light rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="CalculatorIcon" size={16} className="text-accent" />
              <h4 className="font-headline font-semibold text-text-primary">Cost Estimator</h4>
            </div>
            <p className="text-sm text-text-secondary">
              Use our tools to estimate your out-of-pocket costs based on your insurance and income.
            </p>
          </div>

          <div className="bg-bg-light rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="HeartIcon" size={16} className="text-success" />
              <h4 className="font-headline font-semibold text-text-primary">Financial Assistance</h4>
            </div>
            <p className="text-sm text-text-secondary">
              Multiple programs available to ensure cost never prevents you from getting the care you need.
            </p>
          </div>
        </div>
      </div>

      {/* Service Costs Table */}
      <div className="bg-white rounded-lg shadow-healing border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-headline font-semibold text-lg text-text-primary mb-2">
            Service Pricing Guide
          </h3>
          <p className="text-text-secondary">
            All prices are in USD. Your actual cost may vary based on insurance coverage and financial assistance eligibility.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Standard Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  With Insurance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Sliding Fee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-primary uppercase tracking-wider">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {serviceCosts.map((service) => (
                <tr key={service.id} className="hover:bg-muted/50 transition-micro">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-text-primary">{service.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
                            {getCategoryLabel(service.category)}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">{service.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-semibold text-text-primary">
                      ${service.standardRate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-success">
                      {service.insuranceRange}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Copay range
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-accent">
                      {service.slidingFeeRange}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Income-based
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-text-primary">
                      {service.duration}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Cost Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-healing border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
            <h3 className="font-headline font-semibold text-text-primary">
              Important Billing Information
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <Icon name="CheckIcon" size={12} className="text-success mt-1 flex-shrink-0" />
              Payment is due at time of service unless other arrangements are made
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckIcon" size={12} className="text-success mt-1 flex-shrink-0" />
              Insurance copays are collected at each appointment
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckIcon" size={12} className="text-success mt-1 flex-shrink-0" />
              Sliding fee applications are reviewed annually
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckIcon" size={12} className="text-success mt-1 flex-shrink-0" />
              24-hour cancellation policy to avoid fees
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-healing border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="QuestionMarkCircleIcon" size={20} className="text-primary" />
            <h3 className="font-headline font-semibold text-text-primary">
              Need Help with Costs?
            </h3>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            Our financial counselors are here to help you understand your options and find a payment solution that works for your situation.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-healing">
              Speak with Financial Counselor
            </button>
            <button className="w-full bg-white text-text-primary border border-border py-2 px-4 rounded-lg font-medium hover:bg-muted transition-healing">
              Calculate Your Costs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostTransparencySection;