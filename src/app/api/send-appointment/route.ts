import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface AppointmentData {
  type: string;
  date: string;
  time: string;
  appointmentMode: 'in-person' | 'telehealth';
  patientInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    emergencyContact: string;
    emergencyPhone: string;
    insuranceProvider: string;
    policyNumber: string;
    reasonForVisit: string;
    previousTreatment: string;
    currentMedications: string;
    allergies: string;
    accessibilityNeeds: string;
    preferredLanguage: string;
    isNewPatient: boolean;
  };
}

const appointmentTypeLabels: Record<string, string> = {
  'initial-consultation': 'Initial Consultation',
  'follow-up': 'Follow-up Appointment',
  'therapy': 'Therapy Session',
  'medication': 'Medication Management',
  'telehealth': 'Telehealth Appointment',
  'crisis': 'Crisis Consultation'
};

export async function POST(request: NextRequest) {
  try {
    const body: AppointmentData = await request.json();
    const { type, date, time, appointmentMode, patientInfo } = body;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send notification email to clinic
    await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: ['info@novacareclinicllc.com'],
      subject: `New Appointment Request: ${patientInfo.firstName} ${patientInfo.lastName} - ${formattedDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d5a4a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Appointment Request</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f7f4;">
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <strong style="color: #92400e;">Action Required:</strong> Please review and assign a provider for this appointment.
            </div>

            <h2 style="color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 10px;">Appointment Details</h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 40%;">Type:</td>
                <td style="padding: 10px 0;">${appointmentTypeLabels[type] || type}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Date:</td>
                <td style="padding: 10px 0;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Time:</td>
                <td style="padding: 10px 0;">${time}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Format:</td>
                <td style="padding: 10px 0;">${appointmentMode === 'telehealth' ? 'Telehealth (Video Call)' : 'In-Person Visit'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Patient Type:</td>
                <td style="padding: 10px 0;">${patientInfo.isNewPatient ? 'New Patient' : 'Returning Patient'}</td>
              </tr>
            </table>

            <h2 style="color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 10px;">Patient Information</h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 10px 0;">${patientInfo.firstName} ${patientInfo.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${patientInfo.email}">${patientInfo.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0;"><a href="tel:${patientInfo.phone}">${patientInfo.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Date of Birth:</td>
                <td style="padding: 10px 0;">${patientInfo.dateOfBirth || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Gender:</td>
                <td style="padding: 10px 0;">${patientInfo.gender || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Address:</td>
                <td style="padding: 10px 0;">${patientInfo.address ? `${patientInfo.address}, ${patientInfo.city}, ${patientInfo.state} ${patientInfo.zipCode}` : 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Preferred Language:</td>
                <td style="padding: 10px 0;">${patientInfo.preferredLanguage || 'English'}</td>
              </tr>
            </table>

            <h2 style="color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 10px;">Emergency Contact</h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 10px 0;">${patientInfo.emergencyContact || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0;">${patientInfo.emergencyPhone || 'Not provided'}</td>
              </tr>
            </table>

            <h2 style="color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 10px;">Insurance Information</h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 40%;">Provider:</td>
                <td style="padding: 10px 0;">${patientInfo.insuranceProvider || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Policy Number:</td>
                <td style="padding: 10px 0;">${patientInfo.policyNumber || 'Not provided'}</td>
              </tr>
            </table>

            <h2 style="color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 10px;">Clinical Information</h2>

            <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0;"><strong>Reason for Visit:</strong></p>
              <p style="margin: 0; color: #666;">${patientInfo.reasonForVisit || 'Not provided'}</p>
            </div>

            <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0;"><strong>Previous Mental Health Treatment:</strong></p>
              <p style="margin: 0; color: #666;">${patientInfo.previousTreatment || 'None reported'}</p>
            </div>

            <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0;"><strong>Current Medications:</strong></p>
              <p style="margin: 0; color: #666;">${patientInfo.currentMedications || 'None reported'}</p>
            </div>

            <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0;"><strong>Allergies:</strong></p>
              <p style="margin: 0; color: #666;">${patientInfo.allergies || 'None reported'}</p>
            </div>

            ${patientInfo.accessibilityNeeds ? `
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0;"><strong>Accessibility Accommodations:</strong></p>
              <p style="margin: 0; color: #92400e;">${patientInfo.accessibilityNeeds}</p>
            </div>
            ` : ''}
          </div>

          <div style="background-color: #2d5a4a; padding: 15px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">This appointment was booked through the NovaCare Clinic website.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to patient
    await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: [patientInfo.email],
      subject: `Appointment Confirmation - ${formattedDate} at ${time}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d5a4a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Appointment Confirmed!</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f7f4;">
            <p style="font-size: 16px;">Dear ${patientInfo.firstName},</p>

            <p>Thank you for scheduling an appointment with NovaCare Clinic. We're looking forward to seeing you!</p>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2d5a4a;">
              <h3 style="color: #2d5a4a; margin-top: 0;">Appointment Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Type:</td>
                  <td style="padding: 8px 0;">${appointmentTypeLabels[type] || type}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Date:</td>
                  <td style="padding: 8px 0;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Time:</td>
                  <td style="padding: 8px 0;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Format:</td>
                  <td style="padding: 8px 0;">${appointmentMode === 'telehealth' ? 'Telehealth (Video Call)' : 'In-Person Visit'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Provider:</td>
                  <td style="padding: 8px 0;">To be assigned by our team</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #92400e; margin-top: 0;">Important Information</h4>
              <ul style="margin: 0; padding-left: 20px; color: #92400e;">
                <li>Please arrive 15 minutes early for your appointment</li>
                <li>Bring a valid photo ID and insurance card</li>
                <li>Complete intake forms will be sent via email before your visit</li>
                <li>Call (602) 399-1404 if you need to reschedule or cancel</li>
              </ul>
            </div>

            <div style="background-color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #2d5a4a; margin-top: 0;">What Happens Next</h4>
              <ol style="margin: 0; padding-left: 20px;">
                <li>You'll receive a confirmation email with appointment details</li>
                <li>Intake forms will be sent 24-48 hours before your appointment</li>
                <li>Our team will call to confirm your appointment 1 day prior</li>
                <li>Arrive early and check in at our front desk</li>
              </ol>
            </div>

            ${appointmentMode === 'in-person' ? `
            <div style="background-color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #2d5a4a; margin-top: 0;">Our Location</h4>
              <p style="margin: 0;">
                <strong>NovaCare Clinic</strong><br>
                123 Healthcare Drive<br>
                Phoenix, AZ 85001<br>
                <a href="tel:602-399-1404" style="color: #2d5a4a;">(602) 399-1404</a>
              </p>
            </div>
            ` : `
            <div style="background-color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #2d5a4a; margin-top: 0;">Telehealth Instructions</h4>
              <p style="margin: 0;">You will receive a secure video link via email 24 hours before your appointment. Please ensure you have a stable internet connection and a private, quiet space for your session.</p>
            </div>
            `}

            <p>If you have any questions before your appointment, please don't hesitate to contact us at <a href="tel:602-399-1404" style="color: #2d5a4a; font-weight: bold;">(602) 399-1404</a>.</p>

            <p style="margin-top: 30px;">
              We look forward to supporting you on your mental health journey.<br><br>
              Warm regards,<br>
              <strong>The NovaCare Clinic Team</strong>
            </p>
          </div>

          <div style="background-color: #2d5a4a; padding: 15px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">NovaCare Clinic | (602) 399-1404 | www.novacareclinicllc.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Appointment confirmed and emails sent' });
  } catch (error) {
    console.error('Error sending appointment emails:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send confirmation emails' },
      { status: 500 }
    );
  }
}
