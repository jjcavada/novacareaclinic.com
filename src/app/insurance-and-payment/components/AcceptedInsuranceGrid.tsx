import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface InsurancePlan {
  id: string;
  name: string;
  logo: string;
  alt: string;
  type: 'commercial' | 'government' | 'specialty';
  coverage: string[];
  copayRange: string;
  notes?: string;
}

interface AcceptedInsuranceGridProps {
  className?: string;
}

const AcceptedInsuranceGrid = ({ className = '' }: AcceptedInsuranceGridProps) => {
  const insurancePlans: InsurancePlan[] = [
    {
      id: 'medicaid',
      name: 'Arizona Medicaid (AHCCCS)',
      logo: "https://images.unsplash.com/photo-1684789133426-b96ff75ade32",
      alt: 'Arizona state government building representing Medicaid coverage',
      type: 'government',
      coverage: ['Individual Therapy', 'Group Therapy', 'Psychiatric Services', 'Crisis Intervention'],
      copayRange: '$0 - $5',
      notes: 'Most comprehensive coverage available'
    },
    {
      id: 'medicare',
      name: 'Medicare',
      logo: "https://images.unsplash.com/photo-1653656120510-b800119e5b73",
      alt: 'Senior couple reviewing Medicare documents at kitchen table',
      type: 'government',
      coverage: ['Individual Therapy', 'Psychiatric Evaluations', 'Medication Management'],
      copayRange: '$15 - $25',
      notes: 'Part B covers mental health services'
    },
    {
      id: 'aetna',
      name: 'Aetna',
      logo: "https://images.unsplash.com/photo-1722235623546-4059fd83b47b",
      alt: 'Professional healthcare insurance card on modern desk',
      type: 'commercial',
      coverage: ['Individual Therapy', 'Group Therapy', 'Family Therapy', 'Psychiatric Services'],
      copayRange: '$20 - $40',
      notes: 'Prior authorization may be required'
    },
    {
      id: 'anthem',
      name: 'Anthem Blue Cross Blue Shield',
      logo: "https://images.unsplash.com/photo-1612547574135-6c0107b2601a",
      alt: 'Blue Cross Blue Shield insurance documentation spread on table',
      type: 'commercial',
      coverage: ['Individual Therapy', 'Group Therapy', 'Psychiatric Services', 'Telehealth'],
      copayRange: '$25 - $45',
      notes: 'Excellent telehealth coverage'
    },
    {
      id: 'cigna',
      name: 'Cigna',
      logo: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
      alt: 'Healthcare professional reviewing Cigna insurance benefits on tablet',
      type: 'commercial',
      coverage: ['Individual Therapy', 'Group Therapy', 'Psychiatric Services'],
      copayRange: '$30 - $50',
      notes: 'Strong network coverage in Arizona'
    },
    {
      id: 'united',
      name: 'UnitedHealthcare',
      logo: "https://images.unsplash.com/photo-1711397818267-4d90734b0e47",
      alt: 'UnitedHealthcare member services representative helping customer',
      type: 'commercial',
      coverage: ['Individual Therapy', 'Group Therapy', 'Family Therapy', 'Psychiatric Services'],
      copayRange: '$25 - $40',
      notes: 'Comprehensive behavioral health benefits'
    },
    {
      id: 'humana',
      name: 'Humana',
      logo: "https://images.unsplash.com/photo-1722235623546-4059fd83b47b",
      alt: 'Humana insurance card next to prescription medications',
      type: 'commercial',
      coverage: ['Individual Therapy', 'Psychiatric Services', 'Medication Management'],
      copayRange: '$20 - $35',
      notes: 'Strong medication management coverage'
    },
    {
      id: 'tricare',
      name: 'TRICARE',
      logo: "https://images.unsplash.com/photo-1549560976-3d5e358e6e87",
      alt: 'Military family reviewing TRICARE benefits documentation',
      type: 'specialty',
      coverage: ['Individual Therapy', 'Family Therapy', 'Psychiatric Services', 'Crisis Support'],
      copayRange: '$12 - $30',
      notes: 'Serving our military families'
    }];


  const getTypeColor = (type: string) => {
    switch (type) {
      case 'government':
        return 'bg-success/10 text-success border-success/20';
      case 'commercial':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'specialty':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'government':
        return 'Government';
      case 'commercial':
        return 'Commercial';
      case 'specialty':
        return 'Specialty';
      default:
        return 'Other';
    }
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insurancePlans.map((plan) =>
          <div
            key={plan.id}
            className="bg-white rounded-lg shadow-healing border border-border hover:shadow-healing-lg transition-healing">

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-headline font-semibold text-text-primary">
                      {plan.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(plan.type)}`}>
                      {getTypeLabel(plan.type)}
                    </span>
                  </div>
                  <div className="w-full h-16 bg-muted rounded-lg overflow-hidden mb-3">
                    <AppImage
                      src={plan.logo}
                      alt={plan.alt}
                      className="w-full h-full object-cover" />

                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="CurrencyDollarIcon" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary">
                      Typical Copay: {plan.copayRange}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="CheckCircleIcon" size={16} className="text-success" />
                    Covered Services
                  </h4>
                  <ul className="space-y-1">
                    {plan.coverage.map((service, index) =>
                      <li key={index} className="text-sm text-text-secondary flex items-center gap-2">
                        <Icon name="CheckIcon" size={12} className="text-success flex-shrink-0" />
                        {service}
                      </li>
                    )}
                  </ul>
                </div>

                {plan.notes &&
                  <div className="bg-bg-light rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Icon name="InformationCircleIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-text-secondary">{plan.notes}</p>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className="px-6 pb-6">
              <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-healing text-sm">
                Verify This Plan
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-bg-light rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Icon name="ExclamationTriangleIcon" size={20} className="text-warning flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-headline font-semibold text-text-primary mb-2">
              Don't See Your Insurance?
            </h3>
            <p className="text-text-secondary mb-4">
              We're constantly expanding our network. Even if your insurance isn't listed, we may still be able to help through our sliding fee program or by working with you on payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-healing">
                Contact Our Billing Team
              </button>
              <button className="bg-white text-text-primary border border-border px-4 py-2 rounded-lg font-medium hover:bg-muted transition-healing">
                Learn About Sliding Fees
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default AcceptedInsuranceGrid;