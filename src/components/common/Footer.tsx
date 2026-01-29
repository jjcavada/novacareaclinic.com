'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const Footer = () => {
  const aboutLinks = [
    { name: 'Our Clinic', href: '/about' },
    { name: 'Our Staff', href: '/providers' },
    { name: 'Facility Tour', href: '/about#facility' },
    { name: 'Areas We Serve', href: '/about#coverage' }
  ];

  const treatmentLinks = [
    { name: 'Psychiatric evaluations', href: '/services#psychiatric-evaluations' },
    { name: 'Medication management', href: '/services#medication-management' },
    { name: 'Individual therapy', href: '/services#individual-therapy' },
    { name: 'Care coordination', href: '/services#care-coordination' },
    { name: 'Primary care integration', href: '/services#primary-care' },
    { name: 'Telehealth Services', href: '/services#telehealth' },
    { name: 'Patient Resources', href: '/patient-resources' }
  ];

  const getInTouchLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Schedule Appointment', href: '/schedule-appointment' },
    { name: 'Verify Insurance', href: '/insurance-and-payment' }
  ];

  const teamMembers = [
    { name: 'Meriam Arguillo', role: 'Administrator' },
    { name: 'Dr. Leticia Jacinto', role: 'Psychiatrist' },
    { name: 'Anne Leveriza, LPC and BHP', role: 'LPC & BHP' },
    { name: 'Anna Manalo, FNP', role: 'Primary Care Physician' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/novacareclinic',
      icon: 'FacebookIcon'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/novacare-clinic',
      icon: 'LinkedInIcon'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@novacareclinic',
      icon: 'YouTubeIcon'
    }
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center space-x-3 group">
              <AppImage
                src="/assets/images/Logo-1762985073891.png"
                alt="NovaCare Clinic Logo"
                width={72}
                height={72}
                className="object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-headline font-semibold text-lg text-gray-900">
                Contact Information
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:info@novacareclinic.health"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition-micro group"
                >
                  <Icon name="EnvelopeIcon" size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">info@novacareclinic.health</span>
                </a>

                <a
                  href="tel:602-556-8120"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition-micro group"
                >
                  <Icon name="PhoneIcon" size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-lg">602-556-8120</span>
                </a>

                <div className="flex items-start gap-3 text-gray-600">
                  <Icon name="MapPinIcon" size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">10240 N 31st Ave Suite 122</p>
                    <p className="text-sm">Phoenix, AZ 85051</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Clinic Hours</h4>
                <p className="text-sm text-gray-600">Monday-Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-600">Saturday-Sunday: Closed</p>

                <h4 className="font-semibold text-gray-900 mt-3">Administrative Hours</h4>
                <p className="text-sm text-gray-600">Monday-Friday: 9:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-600">Saturday-Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="font-headline font-semibold text-lg text-gray-900">
              About Us
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-micro font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment & Services Section */}
          <div className="space-y-6">
            <h3 className="font-headline font-semibold text-lg text-gray-900">
              Our Services
            </h3>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-micro font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Staff Section */}
          <div className="space-y-6">
            <h3 className="font-headline font-semibold text-lg text-gray-900">
              Our Staff
            </h3>
            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-gray-600">
                  <p className="font-medium text-sm">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Get in Touch Links */}
            <div className="space-y-3 mt-6">
              <h4 className="font-semibold text-gray-900">Get in Touch</h4>
              {getInTouchLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-primary transition-micro font-medium text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              {/* Footer Logo */}
              <Link href="/homepage" className="group">
                <AppImage
                  src="/assets/images/Logo-1762985073891.png"
                  alt="NovaCare Clinic Logo"
                  width={60}
                  height={60}
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </Link>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
                <span className="font-medium">© 2025 NovaCare Clinic LLC</span>
                <span className="hidden sm:inline">|</span>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-micro underline"
                >
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline">|</span>
                <Link
                  href="/terms-of-service"
                  className="hover:text-primary transition-micro underline"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-600">
                FOLLOW US ON
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon
                      name={social.icon as any}
                      size={20}
                      className="text-gray-600 group-hover:text-primary-foreground transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;