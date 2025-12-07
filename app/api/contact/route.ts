import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Your email where you want to receive contact form submissions
        const recipientEmail = process.env.RECIPIENT_EMAIL;

        // Brevo API configuration
        const BREVO_API_KEY = process.env.BREVO_API_KEY;

        if (!BREVO_API_KEY) {
            console.error('Brevo API key not configured');
            console.log('Contact form submission:', { name, email, message });
            return NextResponse.json({
                success: true,
                warning: 'Message received but email not configured'
            }, { status: 200 });
        }

        // Send email via Brevo API
        const brevoResponse = await fetch(
            'https://api.brevo.com/v3/smtp/email',
            {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'api-key': BREVO_API_KEY,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    sender: {
                        name: 'john sanusi Contact Form',
                        email: 'sanusijohn0@gmail.com'
                    },
                    to: [
                        {
                            email: recipientEmail,
                            name: 'Portfolio Owner'
                        }
                    ],
                    subject: `New Contact Form Submission from ${name}`,
                    htmlContent: `
                        <html>
                            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                                <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
                                <div style="background-color: #f4f4f4; padding: 20px; border-radius: 5px;">
                                    <p><strong>Name:</strong> ${name}</p>
                                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                                    <p><strong>Message:</strong></p>
                                    <p style="background-color: white; padding: 15px; border-left: 4px solid #4F46E5;">
                                        ${message.replace(/\n/g, '<br>')}
                                    </p>
                                </div>
                                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                                    This email was sent from your portfolio contact form.
                                </p>
                            </body>
                        </html>
                    `,
                    textContent: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                })
            }
        );

        const brevoData = await brevoResponse.json();

        if (!brevoResponse.ok) {
            console.error('Brevo API error:', brevoData);
            throw new Error('Failed to send email');
        }

        console.log('Email sent successfully via Brevo:', brevoData);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully'
        }, { status: 200 });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
