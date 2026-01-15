'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, DocumentTextIcon, ShieldCheckIcon, ExclamationTriangleIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ComplianceSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
  lastUpdated: string;
  downloadUrl?: string;
}

const LegalComplianceHub = () => {
  const [activeSection, setActiveSection] = useState<string>('anti-kickback');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleExpanded = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const complianceSections: ComplianceSection[] = [
    {
      id: 'anti-kickback',
      title: 'Anti-Kickback Compliance Policy',
      icon: ShieldCheckIcon,
      lastUpdated: 'January 15, 2025',
      downloadUrl: '/documents/anti-kickback-policy.pdf',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Federal Healthcare Law Compliance</h3>
            <p className="text-blue-800">
              NovaCare Clinic is committed to full compliance with federal and state healthcare laws, 
              including the Anti-Kickback Statute (42 U.S.C. § 1320a-7b) and the Stark Law.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Our Commitment</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Referral Practices</h5>
                <p className="text-gray-700 text-sm">
                  We do not offer, pay, solicit, or receive any remuneration in exchange for referrals of 
                  patients covered by federal healthcare programs (Medicare, Medicaid) or other insurance plans.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Clinical Appropriateness</h5>
                <p className="text-gray-700 text-sm">
                  All referrals are based solely on the best interests of the patient and clinical 
                  appropriateness of care, not financial considerations.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Transparent Relationships</h5>
                <p className="text-gray-700 text-sm">
                  We maintain transparent relationships with all referral sources and comply with 
                  all federal and state healthcare regulations.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Ethical Operations</h5>
                <p className="text-gray-700 text-sm">
                  All business practices follow ethical standards with no financial incentives 
                  for patient referrals or improper inducements.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-teal-900 mb-3">Professional Relationships Disclosure</h4>
            <p className="text-teal-800 mb-3">
              NovaCare Clinic maintains professional relationships with various healthcare providers, 
              hospitals, and community organizations. We do not have any financial arrangements that 
              could influence patient referrals.
            </p>
            <p className="text-teal-800">
              We may use third-party marketing services to reach potential patients. These are standard 
              advertising relationships and do not involve payment for individual patient referrals.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-red-900 mb-3">Reporting Concerns</h4>
            <p className="text-red-800 mb-3">
              If you have concerns about potential violations of healthcare laws or unethical practices, 
              please contact our Compliance Officer immediately:
            </p>
            <div className="space-y-2 text-red-800">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                <span>novacareclinicllc@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                <span>602-399-1404</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      icon: DocumentTextIcon,
      lastUpdated: 'January 15, 2025',
      downloadUrl: '/documents/privacy-policy.pdf',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Information Collection & Usage</h3>
            <p className="text-blue-800">
              This Privacy Policy describes how NovaCare Clinic collects, uses, and protects your 
              personal and health information when you use our website and services.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Information We Collect</h4>
            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Appointment Request Forms</h5>
                <p className="text-gray-700 text-sm mb-2">
                  When you submit an appointment request, we collect:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
                  <li>Full name, date of birth, contact information</li>
                  <li>Insurance provider and member ID</li>
                  <li>Preferred appointment details and visit type</li>
                  <li>Reason for visit and special accommodations</li>
                  <li>Referral source information</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Website Usage Information</h5>
                <p className="text-gray-700 text-sm mb-2">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Device type and operating system</li>
                  <li>Referral website information</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">How We Use Your Information</h4>
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <ul className="text-teal-800 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Schedule and confirm appointments with healthcare providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Verify insurance coverage and eligibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Provide requested healthcare services and treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Communicate about appointments and healthcare matters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Improve our website and services based on usage patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Comply with legal and regulatory requirements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Information Protection</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Data Security</h5>
                <p className="text-gray-700 text-sm">
                  We use industry-standard security measures including SSL encryption, 
                  secure data storage, and access controls to protect your information.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">HIPAA Compliance</h5>
                <p className="text-gray-700 text-sm">
                  All health information is protected under HIPAA regulations with 
                  appropriate safeguards and access restrictions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-900 mb-3">Your Rights</h4>
            <p className="text-purple-800 mb-3">You have the right to:</p>
            <ul className="text-purple-800 space-y-1 ml-4 list-disc">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Opt out of non-essential communications</li>
              <li>File a privacy complaint with our office or regulatory authorities</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'hipaa-notice',
      title: 'HIPAA Notice of Privacy Practices',
      icon: ExclamationTriangleIcon,
      lastUpdated: 'January 15, 2025',
      downloadUrl: '/documents/hipaa-notice.pdf',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Notice of Privacy Practices</h3>
            <p className="text-blue-800">
              This notice describes how medical information about you may be used and disclosed 
              and how you can get access to this information. Please review it carefully.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Our Responsibilities</h4>
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <ul className="text-teal-800 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Keep your protected health information (PHI) private and secure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Give you this notice of our legal duties and privacy practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Follow the terms of the notice that is currently in effect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Tell you if we are unable to agree to a requested restriction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Accommodate reasonable requests for alternative communications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Your Rights Regarding Your PHI</h4>
            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Access & Inspect</h5>
                <p className="text-gray-700 text-sm">
                  You have the right to look at or get copies of your health information, 
                  with limited exceptions. You may request that we provide copies in a 
                  format other than photocopies.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Amend Information</h5>
                <p className="text-gray-700 text-sm">
                  You have the right to request an amendment of your health information 
                  if you feel that the information is incorrect or incomplete.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Accounting of Disclosures</h5>
                <p className="text-gray-700 text-sm">
                  You have the right to request an accounting of certain disclosures 
                  of your information made by us for purposes other than treatment, 
                  payment, or healthcare operations.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">Request Restrictions</h5>
                <p className="text-gray-700 text-sm">
                  You have the right to request a restriction or limitation on the 
                  health information we use or disclose about you for treatment, 
                  payment, or healthcare operations.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Uses and Disclosures</h4>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h5 className="font-medium text-green-900 mb-2">Treatment</h5>
                <p className="text-green-800 text-sm">
                  We may use your health information to provide you with medical treatment or services.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">Payment</h5>
                <p className="text-blue-800 text-sm">
                  We may use and disclose your health information to obtain payment for services we provide.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">Healthcare Operations</h5>
                <p className="text-purple-800 text-sm">
                  We may use and disclose your health information for healthcare operations purposes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-red-900 mb-3">File a Complaint</h4>
            <p className="text-red-800 mb-3">
              If you believe your privacy rights have been violated, you may file a complaint 
              with us or with the Secretary of the Department of Health and Human Services:
            </p>
            <div className="space-y-2 text-red-800">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4" />
                <span>Privacy Officer: novacareclinicllc@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                <span>Office: 602-399-1404</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                <span>10240 N 31st Ave Suite 122, Phoenix, AZ 85051</span>
              </div>
            </div>
            <p className="text-red-800 mt-3 text-sm">
              We will not retaliate against you for filing a complaint.
            </p>
          </div>
        </div>
      )
    }
  ];

  const quickLinks = [
    { name: 'Request Appointment', href: '/schedule-appointment', color: 'bg-purple-600 hover:bg-purple-700' },
    { name: 'Contact Us', href: '/contact', color: 'bg-teal-600 hover:bg-teal-700' },
    { name: 'Patient Resources', href: '/patient-resources', color: 'bg-blue-600 hover:bg-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Legal & Compliance Hub</h1>
              <p className="text-gray-600 mt-2">
                Comprehensive legal documentation and compliance information
              </p>
            </div>
            <div className="hidden md:flex space-x-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors ${link.color}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <a href="/homepage" className="hover:text-blue-600">Home</a>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Legal & Compliance</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Documents</h3>
                <nav className="space-y-2">
                  {complianceSections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
                          activeSection === section.id
                            ? 'bg-blue-50 border-blue-200 text-blue-900' :'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <IconComponent className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Contact Information */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Compliance Contact</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4" />
                      <span>602-399-1404</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EnvelopeIcon className="h-4 w-4" />
                      <span className="break-all">novacareclinicllc@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ClockIcon className="h-4 w-4 mt-0.5" />
                      <span>Mon-Fri 8AM-4PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {complianceSections
              .filter(section => section.id === activeSection)
              .map((section) => {
                const IconComponent = section.icon;
                return (
                  <div key={section.id} className="bg-white rounded-lg shadow-sm border">
                    {/* Section Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                            <p className="text-sm text-gray-600 mt-1">
                              Last updated: {section.lastUpdated}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {section.downloadUrl && (
                            <a
                              href={section.downloadUrl}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors"
                            >
                              <DocumentTextIcon className="h-4 w-4" />
                              Download PDF
                            </a>
                          )}
                          <button
                            onClick={() => toggleExpanded(section.id)}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            title={expandedSection === section.id ? 'Collapse' : 'Expand'}
                          >
                            {expandedSection === section.id ? (
                              <ChevronUpIcon className="h-5 w-5" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Section Content */}
                    <div className={`transition-all duration-300 ${
                      expandedSection === section.id || expandedSection === null ? 'block' : 'hidden'
                    }`}>
                      <div className="p-6">
                        {section.content}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          Questions about this policy? Contact our compliance team.
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href="tel:602-399-1404"
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Call 602-399-1404
                          </a>
                          <a
                            href="mailto:novacareclinicllc@gmail.com"
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Email Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Patient Rights & Responsibilities</h4>
              <p className="text-sm text-gray-600 mb-3">
                Understanding your rights as a patient and your responsibilities in the care process.
              </p>
              <a href="/patient-resources" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn More →
              </a>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Non-Discrimination Policy</h4>
              <p className="text-sm text-gray-600 mb-3">
                NovaCare Clinic complies with applicable Federal civil rights laws and does not discriminate.
              </p>
              <a href="/about" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Policy →
              </a>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Accessibility Statement</h4>
              <p className="text-sm text-gray-600 mb-3">
                Our commitment to web accessibility and accommodations for patients with disabilities.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Request Assistance →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalComplianceHub;