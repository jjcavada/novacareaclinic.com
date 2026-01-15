import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface InsuranceInfo {
  provider: string;
  coverage: string;
  copay: string;
  notes: string;
}

interface InsuranceCoverageProps {
  insuranceData: InsuranceInfo[];
}

const InsuranceCoverage = ({ insuranceData }: InsuranceCoverageProps) => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl text-foreground mb-4">
            Insurance & Payment Options
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We accept most major insurance plans and offer flexible payment options to ensure
            quality care is accessible to everyone in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-success text-success-foreground p-2 rounded-lg">
                <Icon name="ShieldCheckIcon" size={24} />
              </div>
              <h3 className="font-headline font-semibold text-xl text-foreground">
                Accepted Insurance Plans
              </h3>
            </div>

            <div className="space-y-3">
              {insuranceData.map((insurance, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{insurance.provider}</h4>
                    <span className="text-sm text-success font-medium">{insurance.coverage}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    <strong>Typical Copay:</strong> {insurance.copay}
                  </div>
                  <p className="text-xs text-muted-foreground">{insurance.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Icon name="CurrencyDollarIcon" size={24} />
              </div>
              <h3 className="font-headline font-semibold text-xl text-foreground">
                Financial Assistance
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Sliding Scale Fees</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduced rates based on income and family size for uninsured patients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Payment Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    Flexible monthly payment options to make treatment affordable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Community Grants</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited grant funding available for qualifying community members.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                href="/insurance-and-payment"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-micro"
              >
                Learn More About Payment Options
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-accent text-white rounded-lg p-6 text-center">
          <h3 className="font-headline font-semibold text-lg mb-2">
            Don't Let Cost Be a Barrier to Care
          </h3>
          <p className="mb-4">
            Our financial counselors are here to help you understand your options and find a solution that works for your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-602-555-0123"
              className="bg-white text-accent px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all"
            >
              Call Financial Counseling
            </a>
            <Link
              href="/schedule-appointment"
              className="bg-white text-accent px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCoverage;