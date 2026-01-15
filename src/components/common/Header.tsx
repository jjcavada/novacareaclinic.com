'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';


interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const primaryNavItems = [
    { name: 'Services', href: '/services' },
    { name: 'Our Staff', href: '/providers' },
    { name: 'Schedule', href: '/schedule-appointment' },
    { name: 'Resources', href: '/patient-resources' }
  ];

  const secondaryNavItems = [
    { name: 'About', href: '/about' },
    { name: 'Insurance & Payment', href: '/insurance-and-payment' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Crisis Support Banner */}
      <div className="bg-accent text-white py-2 px-4 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Icon name="PhoneIcon" size={16} className="flex-shrink-0" />
          <span>Crisis Support Available 24/7:</span>
          <a
            href="tel:988"
            className="font-semibold hover:underline transition-micro"
          >
            Call 988
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="tel:602-399-1404"
            className="font-semibold hover:underline transition-micro hidden sm:inline"
          >
            602-399-1404
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${isScrolled ? 'shadow-brand' : ''}
          } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/homepage"
              className="flex items-center hover:opacity-80 transition-micro"
              onClick={closeMenu}
            >
              <AppImage
                src="/assets/images/Logo-1762985073891.png"
                alt="NovaCare Clinic Logo - Diamond shaped teal logo with flowing design representing healthcare and wellness"
                width={72}
                height={72}
                className="w-18 h-18 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-headline font-medium text-foreground hover:text-primary transition-micro relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* More Dropdown */}
              <div className="relative group">
                <button className="font-headline font-medium text-foreground hover:text-primary transition-micro flex items-center gap-1">
                  More
                  <Icon name="ChevronDownIcon" size={16} />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-popover border border-border rounded-lg shadow-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-medium text-popover-foreground hover:bg-muted transition-micro"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/patient-portal">
                <Button variant="ghost" size="sm">
                  Patient Portal
                </Button>
              </Link>
              <Link href="/schedule-appointment">
                <Button>
                  Schedule Appointment
                </Button>
              </Link>
              <a
                href="tel:602-399-1404"
                className="bg-secondary text-white px-4 py-2 rounded-lg font-headline font-semibold hover:bg-secondary/90 transition-all flex items-center gap-2"
              >
                <Icon name="PhoneIcon" size={16} />
                602-399-1404
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-micro"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? "XMarkIcon" : "Bars3Icon"}
                size={24}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              {/* Primary Navigation */}
              <div className="space-y-2">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 font-headline font-medium text-foreground hover:text-primary transition-micro"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Secondary Navigation */}
              <div className="border-t border-border pt-4 space-y-2">
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 font-headline text-sm text-muted-foreground hover:text-foreground transition-micro"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="border-t border-border pt-4 space-y-3">
                <Link
                  href="/schedule-appointment"
                  onClick={closeMenu}
                  className="block w-full bg-primary text-white py-3 px-4 rounded-lg font-headline font-semibold text-center hover:bg-primary/90 transition-all"
                >
                  Schedule Appointment
                </Link>
                <a
                  href="tel:988"
                  className="block w-full bg-accent text-white py-3 px-4 rounded-lg font-headline font-semibold text-center hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="PhoneIcon" size={16} />
                  Crisis Help - Call 988
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;