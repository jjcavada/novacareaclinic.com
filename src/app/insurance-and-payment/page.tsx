import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';
import InsurancePaymentInteractive from './components/InsurancePaymentInteractive';

export const metadata: Metadata = {
  title: 'Insurance & Payment Options',
  description: 'Transparent financial information and payment options for behavioral health services. Insurance verification, sliding fee scale, and financial assistance programs available.',
  keywords: ['insurance accepted', 'sliding fee scale', 'mental health payment', 'financial assistance'],
  alternates: {
    canonical: '/insurance-and-payment',
  },
};

export default function InsuranceAndPaymentPage() {
  const quickActions = [
    {
      title: 'Verify Insurance Coverage',
      description: 'Check if your insurance plan covers our services',
      icon: 'ShieldCheckIcon',
      action: 'Get Started'
    },
    {
      title: 'Calculate Your Costs',
      description: 'Use our sliding fee calculator to estimate session costs',
      icon: 'CalculatorIcon',
      action: 'Calculate Now'
    },
    {
      title: 'Apply for Financial Aid',
      description: 'Learn about our financial assistance programs',
      icon: 'HeartIcon',
      action: 'Learn More'
    },
    {
      title: 'Schedule Appointment',
      description: 'Book your appointment with payment discussion',
      icon: 'CalendarDaysIcon',
      action: 'Schedule Now'
    }
  ];

  const guarantees = [
    {
      title: 'No Surprise Bills',
      description: 'Clear pricing upfront with no hidden fees or unexpected charges',
      icon: 'ShieldCheckIcon'
    },
    {
      title: 'Quality Care for All',
      description: 'Your ability to pay never affects the quality of care you receive',
      icon: 'HeartIcon'
    },
    {
      title: 'Flexible Payment Options',
      description: 'Multiple payment methods and plans to fit your financial situation',
      icon: 'CreditCardIcon'
    },
    {
      title: 'Financial Counseling',
      description: 'Free consultation to help you understand your options and costs',
      icon: 'ChatBubbleLeftRightIcon'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-light">
        {/* Hero Section */}
        <section className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="CurrencyDollarIcon" size={24} className="text-primary-foreground" />
                </div>
                <h1 className="font-brand-headline font-bold text-4xl md:text-5xl text-text-primary">
                  Insurance & Payment
                </h1>
              </div>

              <p className="font-value-prop text-xl text-text-secondary mb-8 leading-relaxed">
                Transparent financial information that removes barriers to care. Quality behavioral health services
                regardless of your ability to pay, with multiple insurance plans accepted and financial assistance available.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon name="ExclamationCircleIcon" size={20} className="text-primary" />
                  <h2 className="font-headline font-semibold text-lg text-text-primary">
                    Our Commitment to Accessible Care
                  </h2>
                </div>
                <p className="text-text-secondary">
                  We believe that financial constraints should never prevent someone from accessing quality mental health care.
                  Our comprehensive payment options and assistance programs ensure that everyone can receive the support they need.
                </p>
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-border p-4 hover:shadow-brand transition-all cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon name={action.icon as any} size={20} className="text-primary" />
                      </div>
                      <h3 className="font-headline font-semibold text-text-primary mb-2">
                        {action.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-3">
                        {action.description}
                      </p>
                      <button className="text-sm font-medium text-primary hover:text-primary/80 transition-micro">
                        {action.action} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InsurancePaymentInteractive />
          </div>
        </section>

        {/* Our Guarantees Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-brand-headline font-bold text-3xl text-text-primary mb-4">
                Our Financial Care Guarantees
              </h2>
              <p className="font-value-prop text-lg text-text-secondary max-w-3xl mx-auto">
                We're committed to making quality behavioral health care accessible and affordable for everyone in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="bg-bg-light rounded-lg p-6 text-center hover:shadow-brand transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={guarantee.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-headline font-semibold text-text-primary mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-text-secondary">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Financial Team Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-primary-foreground" />
              <h2 className="font-brand-headline font-bold text-3xl text-primary-foreground">
                Questions About Costs or Coverage?
              </h2>
            </div>

            <p className="font-value-prop text-lg text-primary-foreground/90 mb-8">
              Our financial counselors are here to help you understand your options, verify insurance coverage,
              and find payment solutions that work for your situation. No question is too small.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-headline font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Icon name="PhoneIcon" size={16} />
                Call Financial Team
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-headline font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Icon name="EnvelopeIcon" size={16} />
                Email Questions
              </button>
            </div>

            <div className="mt-8 bg-primary-foreground/10 rounded-lg p-4">
              <p className="text-primary-foreground/90 text-sm">
                <strong>Financial Counseling Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM |
                <strong> Phone:</strong> (602) 556-8120 |
                <strong> Email:</strong> info@novacareclinic.health
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}