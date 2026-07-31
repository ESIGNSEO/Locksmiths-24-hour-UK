import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'handymannearlondon@gmail.com';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, phone, location, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone number, and message are required fields.' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.CONTACT_SENDER_EMAIL || 'Locksmith Contact <contact@locksmith24hour.co.uk>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      subject: `[Locksmith24hour.co.uk] New Contact Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px;">
          <div style="background-color: #1a1a1a; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #ffd700; margin: 0; font-size: 18px; text-transform: uppercase; tracking-spacing: 1px;">
              Locksmith24hour.co.uk — New Enquiry
            </h2>
          </div>
          <p style="font-size: 14px; color: #555;">You have received a new message from the contact form on <strong>Locksmith24hour.co.uk</strong>:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 140px; background-color: #f8f9fa;">Full Name:</td>
              <td style="padding: 10px; background-color: #f8f9fa;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #ffffff;">Phone Number:</td>
              <td style="padding: 10px; background-color: #ffffff;">
                <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f8f9fa;">Town / Postcode:</td>
              <td style="padding: 10px; background-color: #f8f9fa;">${location || 'Not provided'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f4f4f5; border-left: 4px solid #ffd700; border-radius: 4px;">
            <h3 style="margin-top: 0; font-size: 14px; color: #333;">Message:</h3>
            <p style="margin: 0; font-size: 14px; white-space: pre-wrap; color: #444;">${message}</p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #888;">
            Sent automatically from <strong>Locksmith24hour.co.uk</strong> website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error('Contact Form Route Error:', err);
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
