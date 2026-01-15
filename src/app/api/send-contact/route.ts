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
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, preferredContact, urgency } = body;

    const subjectLabels: Record<string, string> = {
      'appointment': 'Schedule Appointment',
      'insurance': 'Insurance Questions',
      'services': 'Services Information',
      'billing': 'Billing Inquiry',
      'medical-records': 'Medical Records Request',
      'feedback': 'Feedback or Complaint',
      'other': 'Other'
    };

    const urgencyLabels: Record<string, string> = {
      'routine': 'Routine (24-48 hours)',
      'urgent': 'Urgent (Same day)',
      'emergency': 'Emergency'
    };

    const urgencyColors: Record<string, string> = {
      'routine': styles.textLight,
      'urgent': '#d97706',
      'emergency': '#dc2626'
    };

    // Send notification email to clinic
    const clinicEmail = await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: ['info@novacareclinicllc.com'],
      subject: `📬 New Inquiry: ${subjectLabels[subject] || subject} from ${firstName} ${lastName}`,
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

                  <!-- Header with gradient effect -->
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
                                    New Message
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 40px 32px 40px;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 400;">
                              Contact Form Submission
                            </h1>
                            <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">
                              Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Urgency Banner -->
                  ${urgency !== 'routine' ? `
                  <tr>
                    <td style="background-color: ${urgency === 'emergency' ? '#fef2f2' : '#fffbeb'}; padding: 16px 40px; border-bottom: 1px solid ${urgency === 'emergency' ? '#fecaca' : '#fde68a'};">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <span style="font-size: 18px; margin-right: 8px;">${urgency === 'emergency' ? '🚨' : '⚡'}</span>
                            <span style="color: ${urgencyColors[urgency]}; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                              ${urgencyLabels[urgency]}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ` : ''}

                  <!-- Contact Info Card -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${styles.cream}; border-radius: 12px; overflow: hidden;">
                        <tr>
                          <td style="padding: 24px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-bottom: 20px; border-bottom: 1px solid rgba(0,0,0,0.06);">
                                  <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">Contact</div>
                                  <div style="font-size: 20px; color: ${styles.text}; font-weight: 600;">${firstName} ${lastName}</div>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-top: 20px;">
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td width="50%" style="padding-right: 12px;">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Email</div>
                                        <a href="mailto:${email}" style="color: ${styles.primaryLight}; text-decoration: none; font-size: 14px; font-weight: 500;">${email}</a>
                                      </td>
                                      <td width="50%" style="padding-left: 12px;">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Phone</div>
                                        <span style="color: ${styles.text}; font-size: 14px;">${phone || '—'}</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="50%" style="padding-right: 12px; padding-top: 16px;">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Subject</div>
                                        <span style="color: ${styles.text}; font-size: 14px; font-weight: 500;">${subjectLabels[subject] || subject}</span>
                                      </td>
                                      <td width="50%" style="padding-left: 12px; padding-top: 16px;">
                                        <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Preferred Contact</div>
                                        <span style="color: ${styles.text}; font-size: 14px; text-transform: capitalize;">${preferredContact}</span>
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

                  <!-- Message Section -->
                  <tr>
                    <td style="padding: 0 40px 32px 40px;">
                      <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">Message</div>
                      <div style="background-color: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-left: 4px solid ${styles.accent}; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0; color: ${styles.text}; font-size: 15px; line-height: 1.7;">
                          ${message.replace(/\n/g, '<br>')}
                        </p>
                      </div>
                    </td>
                  </tr>

                  <!-- Action Button -->
                  <tr>
                    <td style="padding: 0 40px 40px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: ${subjectLabels[subject] || subject}" style="display: inline-block; background-color: ${styles.primary}; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">
                              Reply to ${firstName}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: ${styles.cream}; padding: 24px 40px; border-top: 1px solid rgba(0,0,0,0.06);">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <p style="margin: 0; color: ${styles.textLight}; font-size: 12px;">
                              This notification was automatically generated from your website contact form.
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

    console.log('Clinic email result:', clinicEmail);

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: [email],
      subject: '✨ We received your message - NovaCare Clinic',
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

                  <!-- Decorative Top Bar -->
                  <tr>
                    <td style="height: 6px; background: linear-gradient(90deg, ${styles.primary} 0%, ${styles.primaryLight} 50%, ${styles.accent} 100%);"></td>
                  </tr>

                  <!-- Logo Header -->
                  <tr>
                    <td style="padding: 40px 40px 24px 40px; text-align: center;">
                      <div style="font-size: 32px; font-weight: 300; color: ${styles.primary}; letter-spacing: -0.5px;">
                        Nova<span style="font-weight: 600;">Care</span>
                      </div>
                      <div style="font-size: 11px; color: ${styles.textLight}; text-transform: uppercase; letter-spacing: 3px; margin-top: 6px;">
                        Mental Health Clinic
                      </div>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 0 40px;">
                      <!-- Greeting -->
                      <h1 style="margin: 0 0 8px 0; color: ${styles.text}; font-size: 28px; font-weight: 400; text-align: center;">
                        Thank you, ${firstName}
                      </h1>
                      <p style="margin: 0 0 32px 0; color: ${styles.textLight}; font-size: 16px; text-align: center; line-height: 1.6;">
                        We've received your message and our team will respond within 24 hours.
                      </p>

                      <!-- Confirmation Card -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, ${styles.cream} 0%, #ffffff 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.04);">
                        <tr>
                          <td style="padding: 28px;">
                            <!-- Subject Header -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                              <tr>
                                <td>
                                  <div style="display: inline-block; background-color: ${styles.primaryLight}; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    ${subjectLabels[subject] || subject}
                                  </div>
                                </td>
                              </tr>
                            </table>

                            <!-- Message Preview -->
                            <div style="color: ${styles.text}; font-size: 15px; line-height: 1.7; padding: 16px; background-color: #ffffff; border-radius: 8px; border-left: 3px solid ${styles.accent};">
                              ${message.length > 200 ? message.substring(0, 200).replace(/\n/g, '<br>') + '...' : message.replace(/\n/g, '<br>')}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- What's Next Section -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <h2 style="margin: 0 0 20px 0; color: ${styles.text}; font-size: 18px; font-weight: 600; text-align: center;">
                        What happens next?
                      </h2>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding-bottom: 16px;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: ${styles.cream}; border-radius: 50%; text-align: center; vertical-align: middle;">
                                  <span style="font-size: 18px;">📬</span>
                                </td>
                                <td style="padding-left: 16px;">
                                  <div style="color: ${styles.text}; font-size: 14px; font-weight: 500;">Review</div>
                                  <div style="color: ${styles.textLight}; font-size: 13px;">Our team reviews your inquiry</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding-bottom: 16px;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: ${styles.cream}; border-radius: 50%; text-align: center; vertical-align: middle;">
                                  <span style="font-size: 18px;">💬</span>
                                </td>
                                <td style="padding-left: 16px;">
                                  <div style="color: ${styles.text}; font-size: 14px; font-weight: 500;">Response</div>
                                  <div style="color: ${styles.textLight}; font-size: 13px;">We'll respond within 24 hours</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width: 40px; height: 40px; background-color: ${styles.cream}; border-radius: 50%; text-align: center; vertical-align: middle;">
                                  <span style="font-size: 18px;">🤝</span>
                                </td>
                                <td style="padding-left: 16px;">
                                  <div style="color: ${styles.text}; font-size: 14px; font-weight: 500;">Connect</div>
                                  <div style="color: ${styles.textLight}; font-size: 13px;">We'll help you get the care you need</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Urgent Help Box -->
                  <tr>
                    <td style="padding: 0 40px 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${styles.cream}; border-radius: 12px;">
                        <tr>
                          <td style="padding: 24px; text-align: center;">
                            <p style="margin: 0 0 12px 0; color: ${styles.text}; font-size: 14px;">
                              Need immediate assistance?
                            </p>
                            <a href="tel:602-399-1404" style="display: inline-block; background-color: ${styles.primary}; color: #ffffff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600;">
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
                            <div style="font-size: 20px; font-weight: 300; color: #ffffff; letter-spacing: -0.5px; margin-bottom: 16px;">
                              Nova<span style="font-weight: 600;">Care</span> <span style="font-size: 12px; opacity: 0.7;">Clinic</span>
                            </div>
                            <p style="margin: 0 0 8px 0; color: rgba(255,255,255,0.8); font-size: 13px;">
                              Your mental health matters to us.
                            </p>
                            <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 12px;">
                              www.novacareclinicllc.com
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Bottom Decorative Bar -->
                  <tr>
                    <td style="height: 4px; background: ${styles.accent};"></td>
                  </tr>

                </table>

                <!-- Unsubscribe Footer -->
                <table width="600" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 24px 40px; text-align: center;">
                      <p style="margin: 0; color: ${styles.textLight}; font-size: 11px;">
                        This email was sent because you contacted NovaCare Clinic through our website.<br>
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

    console.log('User email result:', userEmail);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
