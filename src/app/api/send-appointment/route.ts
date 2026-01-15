import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email template styles
const styles = {
  primary: '#1a4a3a',
  primaryLight: '#2d5a4a',
  accent: '#c9a86c',
  cream: '#faf8f5',
  warmGray: '#f5f2ed',
  text: '#2c3e50',
  textLight: '#5a6c7d',
  success: '#059669',
};

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

const appointmentTypeIcons: Record<string, string> = {
  'initial-consultation': '🩺',
  'follow-up': '🔄',
  'therapy': '💭',
  'medication': '💊',
  'telehealth': '🖥️',
  'crisis': '🆘'
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

    const shortDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });

    // Send notification email to clinic
    await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: ['info@novacareclinicllc.com'],
      subject: `📅 New Appointment: ${patientInfo.firstName} ${patientInfo.lastName} - ${shortDate} at ${time}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: ${styles.warmGray}; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${styles.warmGray}; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, ${styles.primary} 0%, ${styles.primaryLight} 100%); padding: 0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 32px 40px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td>
                                  <div style="font-size: 28px; font-weight: 300; color: #ffffff; letter-spacing: -0.5px;">
                                    Nova<span style="font-weight: 600;">Care</span>
                                  </div>
                                  <div style="font-size: 11px; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">
                                    Mental Health Clinic
                                  </div>
                                </td>
                                <td align="right">
                                  <div style="background-color: ${styles.accent}; color: ${styles.primary}; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    ${patientInfo.isNewPatient ? 'New Patient' : 'Returning'}
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 40px 32px 40px;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 400;">
                              New Appointment Request
                            </h1>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Action Required Banner -->
                  <tr>
                    <td style="background-color: #fffbeb; padding: 16px 40px; border-bottom: 1px solid #fde68a;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <span style="font-size: 18px; margin-right: 8px;">⚡</span>
                            <span style="color: #92400e; font-weight: 600; font-size: 14px;">ACTION REQUIRED:</span>
                            <span style="color: #92400e; font-size: 14px;"> Please assign a provider for this appointment.</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Appointment Details Card -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, ${styles.cream} 0%, #ffffff 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.04);">
                        <tr>
                          <td style="padding: 24px;">
                            <!-- Date/Time Hero -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                              <tr>
                                <td width="80" style="vertical-align: top;">
                                  <div style="width: 70px; height: 70px; background-color: ${styles.primary}; border-radius: 12px; text-align: center; padding-top: 8px;">
                                    <div style="font-size: 11px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1px;">${new Date(date).toLocaleDateString('en-US', { month: 'short' })}</div>
                                    <div style="font-size: 28px; color: #ffffff; font-weight: 700; line-height: 1;">${new Date(date).getDate()}</div>
                                  </div>
                                </td>
                                <td style="vertical-align: middle; padding-left: 16px;">
                                  <div style="font-size: 20px; color: ${styles.text}; font-weight: 600; margin-bottom: 4px;">${formattedDate}</div>
                                  <div style="font-size: 16px; color: ${styles.primaryLight}; font-weight: 500;">${time}</div>
                                </td>
                              </tr>
                            </table>

                            <!-- Appointment Type & Format -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="50%" style="padding-right: 8px;">
                                  <div style="background-color: #ffffff; border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 16px;">
                                    <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">Type</div>
                                    <div style="font-size: 14px; color: ${styles.text}; font-weight: 500;">
                                      <span style="margin-right: 6px;">${appointmentTypeIcons[type] || '📋'}</span>
                                      ${appointmentTypeLabels[type] || type}
                                    </div>
                                  </div>
                                </td>
                                <td width="50%" style="padding-left: 8px;">
                                  <div style="background-color: #ffffff; border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 16px;">
                                    <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">Format</div>
                                    <div style="font-size: 14px; color: ${styles.text}; font-weight: 500;">
                                      <span style="margin-right: 6px;">${appointmentMode === 'telehealth' ? '🖥️' : '🏥'}</span>
                                      ${appointmentMode === 'telehealth' ? 'Telehealth' : 'In-Person'}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Patient Info Section -->
                  <tr>
                    <td style="padding: 0 40px;">
                      <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.06);">Patient Information</div>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${styles.cream}; border-radius: 12px;">
                        <tr>
                          <td style="padding: 20px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-bottom: 16px;">
                                  <div style="font-size: 18px; color: ${styles.text}; font-weight: 600;">${patientInfo.firstName} ${patientInfo.lastName}</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td width="50%" style="padding-bottom: 12px;">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px;">Email</div>
                                        <a href="mailto:${patientInfo.email}" style="color: ${styles.primaryLight}; text-decoration: none; font-size: 13px;">${patientInfo.email}</a>
                                      </td>
                                      <td width="50%" style="padding-bottom: 12px;">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px;">Phone</div>
                                        <a href="tel:${patientInfo.phone}" style="color: ${styles.text}; text-decoration: none; font-size: 13px;">${patientInfo.phone}</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="50%">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px;">DOB</div>
                                        <div style="color: ${styles.text}; font-size: 13px;">${patientInfo.dateOfBirth || '—'}</div>
                                      </td>
                                      <td width="50%">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px;">Insurance</div>
                                        <div style="color: ${styles.text}; font-size: 13px;">${patientInfo.insuranceProvider || '—'}</div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Reason for Visit -->
                  ${patientInfo.reasonForVisit ? `
                  <tr>
                    <td style="padding: 24px 40px 0 40px;">
                      <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">Reason for Visit</div>
                      <div style="background-color: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-left: 4px solid ${styles.accent}; border-radius: 8px; padding: 16px;">
                        <p style="margin: 0; color: ${styles.text}; font-size: 14px; line-height: 1.6;">
                          ${patientInfo.reasonForVisit.replace(/\n/g, '<br>')}
                        </p>
                      </div>
                    </td>
                  </tr>
                  ` : ''}

                  <!-- Clinical Notes Grid -->
                  <tr>
                    <td style="padding: 24px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="50%" style="padding-right: 8px; vertical-align: top;">
                            <div style="background-color: ${styles.cream}; border-radius: 8px; padding: 14px; margin-bottom: 12px;">
                              <div style="font-size: 10px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Medications</div>
                              <div style="font-size: 13px; color: ${styles.text};">${patientInfo.currentMedications || 'None reported'}</div>
                            </div>
                            <div style="background-color: ${styles.cream}; border-radius: 8px; padding: 14px;">
                              <div style="font-size: 10px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Previous Treatment</div>
                              <div style="font-size: 13px; color: ${styles.text};">${patientInfo.previousTreatment || 'None reported'}</div>
                            </div>
                          </td>
                          <td width="50%" style="padding-left: 8px; vertical-align: top;">
                            <div style="background-color: ${styles.cream}; border-radius: 8px; padding: 14px; margin-bottom: 12px;">
                              <div style="font-size: 10px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Allergies</div>
                              <div style="font-size: 13px; color: ${patientInfo.allergies ? '#dc2626' : styles.text}; font-weight: ${patientInfo.allergies ? '500' : 'normal'};">${patientInfo.allergies || 'None reported'}</div>
                            </div>
                            <div style="background-color: ${styles.cream}; border-radius: 8px; padding: 14px;">
                              <div style="font-size: 10px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Emergency Contact</div>
                              <div style="font-size: 13px; color: ${styles.text};">${patientInfo.emergencyContact || '—'}</div>
                              <div style="font-size: 12px; color: ${styles.textLight};">${patientInfo.emergencyPhone || ''}</div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  ${patientInfo.accessibilityNeeds ? `
                  <!-- Accessibility Alert -->
                  <tr>
                    <td style="padding: 0 40px 24px 40px;">
                      <div style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 16px;">
                        <div style="font-size: 11px; color: #92400e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: 600;">♿ Accessibility Needs</div>
                        <div style="font-size: 14px; color: #92400e;">${patientInfo.accessibilityNeeds}</div>
                      </div>
                    </td>
                  </tr>
                  ` : ''}

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: ${styles.cream}; padding: 24px 40px; border-top: 1px solid rgba(0,0,0,0.06);">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <p style="margin: 0; color: ${styles.textLight}; font-size: 12px;">
                              Appointment booked via NovaCare Clinic website
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Send confirmation email to patient
    await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: [patientInfo.email],
      subject: `✅ Appointment Confirmed - ${shortDate} at ${time}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: ${styles.warmGray}; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${styles.warmGray}; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Success Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, ${styles.success} 0%, #047857 100%); padding: 40px; text-align: center;">
                      <div style="width: 64px; height: 64px; background-color: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 32px; line-height: 64px;">✓</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 400;">
                        You're All Set!
                      </h1>
                      <p style="margin: 12px 0 0 0; color: rgba(255,255,255,0.9); font-size: 16px;">
                        Your appointment has been confirmed
                      </p>
                    </td>
                  </tr>

                  <!-- Logo -->
                  <tr>
                    <td style="padding: 32px 40px 24px 40px; text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06);">
                      <div style="font-size: 24px; font-weight: 300; color: ${styles.primary}; letter-spacing: -0.5px;">
                        Nova<span style="font-weight: 600;">Care</span>
                      </div>
                      <div style="font-size: 10px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">
                        Mental Health Clinic
                      </div>
                    </td>
                  </tr>

                  <!-- Appointment Card -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, ${styles.cream} 0%, #ffffff 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.04);">
                        <tr>
                          <td style="padding: 28px;">
                            <!-- Date Display -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="90" style="vertical-align: top;">
                                  <div style="width: 80px; background-color: ${styles.primary}; border-radius: 12px; text-align: center; overflow: hidden;">
                                    <div style="background-color: ${styles.accent}; padding: 6px 0; font-size: 11px; color: ${styles.primary}; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                      ${new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                                    </div>
                                    <div style="padding: 12px 0; font-size: 36px; color: #ffffff; font-weight: 700; line-height: 1;">
                                      ${new Date(date).getDate()}
                                    </div>
                                    <div style="padding: 0 0 10px 0; font-size: 11px; color: rgba(255,255,255,0.7); text-transform: uppercase;">
                                      ${new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                                    </div>
                                  </div>
                                </td>
                                <td style="vertical-align: middle; padding-left: 20px;">
                                  <div style="font-size: 14px; color: ${styles.primaryLight}; font-weight: 600; margin-bottom: 4px;">
                                    ${appointmentTypeIcons[type] || '📋'} ${appointmentTypeLabels[type] || type}
                                  </div>
                                  <div style="font-size: 24px; color: ${styles.text}; font-weight: 600; margin-bottom: 8px;">
                                    ${time}
                                  </div>
                                  <div style="display: inline-block; background-color: ${appointmentMode === 'telehealth' ? '#dbeafe' : '#dcfce7'}; color: ${appointmentMode === 'telehealth' ? '#1e40af' : '#166534'}; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                                    ${appointmentMode === 'telehealth' ? '🖥️ Video Call' : '🏥 In-Person'}
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Important Info -->
                  <tr>
                    <td style="padding: 0 40px 32px 40px;">
                      <div style="background-color: #fef3c7; border-radius: 12px; padding: 20px;">
                        <div style="font-size: 14px; font-weight: 600; color: #92400e; margin-bottom: 12px;">
                          📋 Before Your Appointment
                        </div>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 6px 0; font-size: 13px; color: #92400e;">
                              <span style="margin-right: 8px;">•</span> Please arrive 15 minutes early
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 6px 0; font-size: 13px; color: #92400e;">
                              <span style="margin-right: 8px;">•</span> Bring a valid photo ID and insurance card
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 6px 0; font-size: 13px; color: #92400e;">
                              <span style="margin-right: 8px;">•</span> Intake forms will be sent via email
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>

                  <!-- What's Next Timeline -->
                  <tr>
                    <td style="padding: 0 40px 32px 40px;">
                      <div style="font-size: 16px; font-weight: 600; color: ${styles.text}; margin-bottom: 20px; text-align: center;">
                        What happens next?
                      </div>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 12px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="48" style="vertical-align: top;">
                                  <div style="width: 36px; height: 36px; background-color: ${styles.cream}; border-radius: 50%; text-align: center; line-height: 36px; font-size: 16px;">📧</div>
                                </td>
                                <td style="padding-left: 12px;">
                                  <div style="font-size: 14px; font-weight: 500; color: ${styles.text};">Intake Forms</div>
                                  <div style="font-size: 13px; color: ${styles.textLight};">We'll send forms 24-48 hours before</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="48" style="vertical-align: top;">
                                  <div style="width: 36px; height: 36px; background-color: ${styles.cream}; border-radius: 50%; text-align: center; line-height: 36px; font-size: 16px;">📞</div>
                                </td>
                                <td style="padding-left: 12px;">
                                  <div style="font-size: 14px; font-weight: 500; color: ${styles.text};">Confirmation Call</div>
                                  <div style="font-size: 13px; color: ${styles.textLight};">Our team will call 1 day prior</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="48" style="vertical-align: top;">
                                  <div style="width: 36px; height: 36px; background-color: ${styles.cream}; border-radius: 50%; text-align: center; line-height: 36px; font-size: 16px;">${appointmentMode === 'telehealth' ? '🔗' : '🏥'}</div>
                                </td>
                                <td style="padding-left: 12px;">
                                  <div style="font-size: 14px; font-weight: 500; color: ${styles.text};">${appointmentMode === 'telehealth' ? 'Video Link' : 'Check In'}</div>
                                  <div style="font-size: 13px; color: ${styles.textLight};">${appointmentMode === 'telehealth' ? 'Secure link sent 24 hours before' : 'Arrive early at our front desk'}</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Contact Box -->
                  <tr>
                    <td style="padding: 0 40px 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${styles.cream}; border-radius: 12px;">
                        <tr>
                          <td style="padding: 24px; text-align: center;">
                            <p style="margin: 0 0 16px 0; color: ${styles.text}; font-size: 14px;">
                              Need to reschedule or have questions?
                            </p>
                            <a href="tel:602-399-1404" style="display: inline-block; background-color: ${styles.primary}; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600;">
                              📞 (602) 399-1404
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: ${styles.primary}; padding: 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <div style="font-size: 20px; font-weight: 300; color: #ffffff; letter-spacing: -0.5px; margin-bottom: 12px;">
                              Nova<span style="font-weight: 600;">Care</span> <span style="font-size: 12px; opacity: 0.7;">Clinic</span>
                            </div>
                            <p style="margin: 0 0 8px 0; color: rgba(255,255,255,0.8); font-size: 13px;">
                              We look forward to supporting your mental health journey.
                            </p>
                            <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 12px;">
                              www.novacareclinicllc.com
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Bottom Bar -->
                  <tr>
                    <td style="height: 4px; background: ${styles.accent};"></td>
                  </tr>

                </table>

                <!-- Footer Text -->
                <table width="600" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 24px 40px; text-align: center;">
                      <p style="margin: 0; color: ${styles.textLight}; font-size: 11px;">
                        This confirmation was sent from NovaCare Clinic.<br>
                        © ${new Date().getFullYear()} NovaCare Clinic. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
