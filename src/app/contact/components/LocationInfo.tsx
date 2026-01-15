import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationInfoProps {
  className?: string;
}

const LocationInfo = ({ className = '' }: LocationInfoProps) => {
  return (
    <section className={`py-16 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Visit Our Clinic
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Our welcoming, accessible facility is designed to provide a comfortable environment for all patients and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                    Clinic Address
                  </h3>
                  <div className="font-body text-text-secondary space-y-1">
                    <div>10240 N 31st Ave Suite 122</div>
                    <div>Phoenix, AZ 85051</div>
                    <div>United States</div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=10240+N+31st+Ave+Suite+122,+Phoenix,+AZ+85051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-micro font-medium"
                  >
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="UserGroupIcon" size={24} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-3">
                    Accessibility Features
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-foreground flex-shrink-0" />
                      <span className="font-body text-text-secondary">Wheelchair accessible entrance and restrooms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-foreground flex-shrink-0" />
                      <span className="font-body text-text-secondary">Designated accessible parking spaces</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-foreground flex-shrink-0" />
                      <span className="font-body text-text-secondary">Elevator access to all floors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-foreground flex-shrink-0" />
                      <span className="font-body text-text-secondary">Hearing loop system available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-foreground flex-shrink-0" />
                      <span className="font-body text-text-secondary">Large print materials upon request</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking & Transportation */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="TruckIcon" size={24} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-text-primary mb-3">
                    Parking & Transportation
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-cta font-semibold text-text-primary mb-1">Parking</h4>
                      <ul className="font-body text-text-secondary space-y-1 text-sm">
                        <li>• Free on-site parking available</li>
                        <li>• Accessible parking spaces near entrance</li>
                        <li>• Covered parking for weather protection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-cta font-semibold text-text-primary mb-1">Public Transportation</h4>
                      <ul className="font-body text-text-secondary space-y-1 text-sm">
                        <li>• Valley Metro Bus Route 7 (Central Ave)</li>
                        <li>• Light Rail: Central/Camelback Station (0.8 miles)</li>
                        <li>• Ride assistance programs available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Office Photos */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-headline text-lg font-semibold text-text-primary">
                  Interactive Map
                </h3>
              </div>
              <div className="h-80">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="NovaCare Clinic Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.1234567890123!2d-112.1234567!3d33.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z10240%20N%2031st%20Ave%20Suite%20122%2C%20Phoenix%2C%20AZ%2085051!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus&q=10240+N+31st+Ave+Suite+122,+Phoenix,+AZ+85051"
                  className="border-0"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;