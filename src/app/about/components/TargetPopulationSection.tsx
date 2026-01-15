import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TargetPopulationSectionProps {
    className?: string;
}

const TargetPopulationSection = ({ className = '' }: TargetPopulationSectionProps) => {
    const populations = [
        {
            text: 'Adults 18+ with mental health and substance use challenges',
        },
        {
            text: 'Underserved populations in Arizona',
        },
        {
            text: 'Medicaid (AHCCCS), Medicare, and commercial insurance patients',
        },
        {
            text: 'Maricopa County residents (in-person) and statewide (telehealth)',
        }
    ];

    return (
        <section className={`py-16 bg-muted ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold text-secondary mb-4">
                        Target Population
                    </h2>
                    <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                        We are dedicated to serving those who need it most.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-soft border border-border">
                    <ul className="space-y-4">
                        {populations.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="min-w-6 mt-1 text-primary">
                                    <Icon name="CheckCircleIcon" size={24} />
                                </div>
                                <span className="font-body text-lg text-text-primary">
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TargetPopulationSection;
