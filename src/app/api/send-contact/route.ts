import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send notification email to clinic
    await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: ['info@novacareclinicllc.com'],
      subject: `New Contact Form: ${subjectLabels[subject] || subject} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d5a4a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f7f4;">
            <h2 style="color: #2d5a4a; border-bottom: 2px solid #2d5a4a; padding-bottom: 10px;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 10px 0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Subject:</td>
                <td style="padding: 10px 0;">${subjectLabels[subject] || subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Urgency:</td>
                <td style="padding: 10px 0; ${urgency === 'emergency' ? 'color: red; font-weight: bold;' : ''}">${urgencyLabels[urgency] || urgency}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Preferred Contact:</td>
                <td style="padding: 10px 0;">${preferredContact}</td>
              </tr>
            </table>

            <h3 style="color: #2d5a4a; margin-top: 20px;">Message:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #2d5a4a;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="background-color: #2d5a4a; padding: 15px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">This message was sent from the NovaCare Clinic website contact form.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'NovaCare Clinic <noreply@novacareclinicllc.com>',
      to: [email],
      subject: 'We Received Your Message - NovaCare Clinic',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d5a4a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f7f4;">
            <p style="font-size: 16px;">Dear ${firstName},</p>

            <p>Thank you for reaching out to NovaCare Clinic. We have received your message and our team will respond within 24 hours.</p>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5a4a; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${subjectLabels[subject] || subject}</p>
              <p><strong>Message:</strong></p>
              <p style="color: #666;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <p>If you need immediate assistance, please don't hesitate to call us at <a href="tel:602-399-1404" style="color: #2d5a4a; font-weight: bold;">(602) 399-1404</a>.</p>

            <p style="margin-top: 30px;">
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

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
