'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
  urgent?: boolean;
}

interface QuickAccessProps {
  className?: string;
}

const QuickAccess = ({ className = '' }: QuickAccessProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const quickAccessItems: QuickAccessItem[] = [
    {
      id: 1,
      title: "Schedule Appointment",
      description: "Book your first visit or follow-up appointment online or by phone",
      icon: "CalendarIcon",
      href: "/schedule-appointment"
    },
    {
      id: 2,
      title: "Crisis Support",
      description: "Immediate help available 24/7 for mental health emergencies",
      icon: "PhoneIcon",
      urgent: true,
      href: "/crisis-support" // Added href for item 2
    },
    {
      id: 3,
      title: "Patient Portal",
      description: "Access your records, test results, and communicate with your care team",
      icon: "ComputerDesktopIcon",
      href: "/patient-portal"
    },
    {
      id: 4,
      title: "Insurance & Payment",
      description: "Check coverage, payment options, and financial assistance programs",
      icon: "CreditCardIcon",
      href: "/insurance-payment" // Added href for item 4
    },
    {
      id: 5,
      title: "Patient Resources",
      description: "Educational materials, self-help tools, and wellness resources",
      icon: "BookOpenIcon",
      href: "/patient-resources" // Added href for item 5
    },
    {
      id: 6,
      title: "Contact Us",
      description: "Get directions, hours, and contact information for our clinic",
      icon: "MapPinIcon",
      href: "/contact"
    }
  ];



  return (
    <section className={`relative py-16 lg:py-24 overflow-hidden ${className}`}>
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-warm-200/50 shadow-soft mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-soft-pulse"></span>
            <span className="font-body text-sm font-medium text-warm-600">Quick Access</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-warm-800 mb-4">
            Quick Access to Care
          </h2>
          <p className="font-body text-lg text-warm-500 max-w-3xl mx-auto">
            Everything you need to access mental health care, manage your treatment, and find support resources in one place.
          </p>
        </div>

        {/* Quick Access Grid - Glassmorphism Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="
                  relative h-full p-6 rounded-2xl
                  bg-white/60 backdrop-blur-xl
                  border border-warm-200/50
                  shadow-soft
                  transition-all duration-500 ease-out
                  hover:shadow-lift
                  hover:translate-y-[-4px]
                  hover:bg-white/80
                ">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>

                {/* Urgent Badge */}
                {item.urgent && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-warm-800 rounded-full blur-sm animate-pulse"></div>
                      <div className="relative bg-warm-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-warm-700">
                        URGENT
                      </div>
                    </div>
                  </div>
                )}

                {/* Icon Container */}
                <div className="
                  relative w-14 h-14 rounded-xl mb-5
                  flex items-center justify-center
                  bg-warm-100 text-warm-800
                  transition-all duration-300
                  group-hover:scale-110 group-hover:bg-warm-200
                ">
                  <Icon
                    name={item.icon as any}
                    size={26}
                    className="transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="font-headline text-xl text-warm-800 mb-2 group-hover:text-warm-900 transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-warm-500 leading-relaxed mb-5 text-sm">
                  {item.description}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center justify-between pt-2 border-t border-warm-200/30">
                  <span className="font-body font-semibold text-sm text-warm-600 group-hover:text-warm-800 transition-colors">
                    {item.urgent ? 'Get Help Now' : 'Access Now'}
                  </span>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    bg-warm-100/50 group-hover:bg-warm-200/50
                    transition-all duration-300
                    ${hoveredItem === item.id ? 'translate-x-1' : ''}
                  `}>
                    <Icon
                      name="ArrowRightIcon"
                      size={16}
                      className="text-warm-600"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call 911 - Emergency */}
        {/* Mental Health Crisis Support */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="bg-warm-50/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
            {/* Gentle background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="HeartIcon" size={24} className="text-primary" />
              </div>

              <h3 className="font-headline text-2xl text-primary-accessible mb-2">
                Mental Health Emergency?
              </h3>

              <p className="font-body text-warm-600 mb-6 max-w-lg">
                If you're experiencing a mental health crisis or having thoughts of self-harm,
                don't wait. Help is available right now.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="tel:988"
                  className="btn-organic btn-organic-primary px-8 py-3 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Icon name="PhoneIcon" size={18} />
                  Call 988 - Crisis Lifeline
                </a>
                <a
                  href="tel:911"
                  className="px-8 py-3 rounded-xl border border-warm-300 text-warm-700 font-medium hover:bg-warm-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="ExclamationTriangleIcon" size={18} />
                  Call 911 - Emergency
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
