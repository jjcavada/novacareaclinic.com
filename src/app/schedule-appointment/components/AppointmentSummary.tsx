import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface AppointmentDetails {
  type: string;
  provider: string;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  isNewPatient: boolean;
  appointmentMode: 'in-person' | 'telehealth';
}

interface AppointmentSummaryProps {
  appointmentDetails: AppointmentDetails;
  onEdit: (section: string) => void;
}

const AppointmentSummary = ({ appointmentDetails, onEdit }: AppointmentSummaryProps) => {
  const getAppointmentTypeName = (type: string) => {
    const types: { [key: string]: string } = {
      'initial-consultation': 'Initial Consultation',
      'follow-up': 'Follow-up Appointment',
      'therapy-session': 'Therapy Session',
      'medication-management': 'Medication Management',
      'telehealth': 'Telehealth Appointment',
      'crisis-consultation': 'Crisis Consultation'
    };
    return types[type] || type;
  };

  const getProviderName = (providerId: string) => {
    const providers: { [key: string]: string } = {
      'any-provider': 'Any Available Provider',
      'dr-sarah-martinez': 'Dr. Sarah Martinez',
      'dr-michael-chen': 'Dr. Michael Chen',
      'dr-jennifer-williams': 'Dr. Jennifer Williams',
      'dr-robert-thompson': 'Dr. Robert Thompson'
    };
    return providers[providerId] || providerId;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="bg-bg-light border border-primary/20 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline font-bold text-xl text-foreground">
          Appointment Summary
        </h2>
        <div className="flex items-center gap-2 text-success">
          <Icon name="CheckCircleIcon" size={20} />
          <span className="text-sm font-medium">Ready to Schedule</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Appointment Details */}
        <div className="bg-background rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-headline font-semibold text-foreground flex items-center gap-2">
              <Icon name="CalendarIcon" size={18} />
              Appointment Details
            </h3>
            <button
              onClick={() => onEdit('appointment')}
              className="text-primary hover:text-primary/80 transition-micro text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Appointment Type</div>
              <div className="font-medium text-foreground">
                {getAppointmentTypeName(appointmentDetails.type)}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Provider</div>
              <div className="font-medium text-foreground">
                {getProviderName(appointmentDetails.provider)}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Date</div>
              <div className="font-medium text-foreground">
                {formatDate(appointmentDetails.date)}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Time</div>
              <div className="font-medium text-foreground">
                {formatTime(appointmentDetails.time)}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Icon
              name={appointmentDetails.appointmentMode === 'telehealth' ? 'VideoCameraIcon' : 'BuildingOfficeIcon'}
              size={16}
              className="text-primary"
            />
            <span className="text-sm font-medium text-foreground">
              {appointmentDetails.appointmentMode === 'telehealth' ? 'Telehealth Appointment' : 'In-Person Visit'}
            </span>
          </div>
        </div>

        {/* Patient Information */}
        <div className="bg-background rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-headline font-semibold text-foreground flex items-center gap-2">
              <Icon name="UserIcon" size={18} />
              Patient Information
            </h3>
            <button
              onClick={() => onEdit('patient')}
              className="text-primary hover:text-primary/80 transition-micro text-sm font-medium"
            >
              Edit
            </button>
          </div>

          <div className="space-y-2">
            <div>
              <div className="text-sm text-muted-foreground">Patient Name</div>
              <div className="font-medium text-foreground">{appointmentDetails.patientName}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium text-foreground">{appointmentDetails.patientEmail}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="font-medium text-foreground">{appointmentDetails.patientPhone}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Patient Type</div>
              <div className="font-medium text-foreground">
                {appointmentDetails.isNewPatient ? 'New Patient' : 'Returning Patient'}
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
          <h3 className="font-headline font-semibold text-foreground flex items-center gap-2 mb-3">
            <Icon name="InformationCircleIcon" size={18} className="text-warning" />
            Important Information
          </h3>
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <Icon name="ClockIcon" size={14} className="text-warning mt-0.5 flex-shrink-0" />
              <span>Please arrive 15 minutes early for your appointment</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="IdentificationIcon" size={14} className="text-warning mt-0.5 flex-shrink-0" />
              <span>Bring a valid photo ID and insurance card</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="DocumentTextIcon" size={14} className="text-warning mt-0.5 flex-shrink-0" />
              <span>Complete intake forms will be sent via email before your visit</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="PhoneIcon" size={14} className="text-warning mt-0.5 flex-shrink-0" />
              <span>Call (602) 556-8120 if you need to reschedule or cancel</span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
          <h3 className="font-headline font-semibold text-foreground flex items-center gap-2 mb-3">
            <Icon name="CheckCircleIcon" size={18} className="text-success" />
            What Happens Next
          </h3>
          <ol className="space-y-2 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <span className="bg-success text-success-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <span>You'll receive a confirmation email with appointment details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-success text-success-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <span>Intake forms will be sent 24-48 hours before your appointment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-success text-success-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <span>Our team will call to confirm your appointment 1 day prior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-success text-success-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
              <span>Arrive early and check in at our front desk</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;