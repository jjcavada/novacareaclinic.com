'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: string;
  urgency: string;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'routine'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email',
          urgency: 'routine'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'appointment', label: 'Schedule Appointment' },
    { value: 'insurance', label: 'Insurance Questions' },
    { value: 'services', label: 'Services Information' },
    { value: 'billing', label: 'Billing Inquiry' },
    { value: 'medical-records', label: 'Medical Records Request' },
    { value: 'feedback', label: 'Feedback or Complaint' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Send Us a Message
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
            Need to{' '}
            <Link href="/schedule-appointment" className="text-primary hover:text-primary/80 font-medium transition-colors">
              schedule an appointment
            </Link>{' '}
            or have questions about{' '}
            <Link href="/insurance-and-payment" className="text-primary hover:text-primary/80 font-medium transition-colors">
              insurance and billing
            </Link>?
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
          {submitStatus === 'success' && (
            <div className="mb-6 bg-success/10 border border-success/20 rounded-lg p-4 flex items-center gap-3">
              <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0" />
              <div>
                <h3 className="font-cta font-semibold text-success mb-1">Message Sent Successfully!</h3>
                <p className="font-body text-sm text-text-secondary">
                  Thank you for contacting us. We'll respond within 24 hours.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 bg-error/10 border border-error/20 rounded-lg p-4 flex items-center gap-3">
              <Icon name="ExclamationTriangleIcon" size={24} className="text-error flex-shrink-0" />
              <div>
                <h3 className="font-cta font-semibold text-error mb-1">Error Sending Message</h3>
                <p className="font-body text-sm text-text-secondary">
                  Please try again or call us directly at (602) 399-1404.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block font-cta font-medium text-text-primary mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-cta font-medium text-text-primary mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block font-cta font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-cta font-medium text-text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground"
                  placeholder="(602) 555-0123"
                />
              </div>
            </div>

            {/* Subject and Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="subject" className="block font-cta font-medium text-text-primary mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground"
                >
                  {subjectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="urgency" className="block font-cta font-medium text-text-primary mb-2">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground"
                >
                  <option value="routine">Routine (24-48 hours)</option>
                  <option value="urgent">Urgent (Same day)</option>
                  <option value="emergency">Emergency (Call immediately)</option>
                </select>
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block font-cta font-medium text-text-primary mb-3">
                Preferred Contact Method
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="font-body text-text-secondary">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="font-body text-text-secondary">Phone</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="portal"
                    checked={formData.preferredContact === 'portal'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="font-body text-text-secondary">Patient Portal</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-cta font-medium text-text-primary mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus-healing font-body bg-input text-foreground resize-vertical"
                placeholder="Please provide details about your inquiry or how we can help you..."
              />
            </div>

            {/* Privacy Notice */}
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="ShieldCheckIcon" size={20} className="text-foreground flex-shrink-0 mt-0.5" />
                <div className="font-body text-sm text-text-secondary">
                  <strong>Privacy Notice:</strong> This form is HIPAA-compliant and secure. Your information will only be used to respond to your inquiry and will not be shared with third parties. For existing patients, please use the secure patient portal for medical questions.
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="font-body text-sm text-text-secondary">
                * Required fields
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[160px] justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;