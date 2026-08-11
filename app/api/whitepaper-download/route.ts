import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, whitepaperTitle } = body;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        if (!whitepaperTitle) {
            return NextResponse.json({ error: 'Whitepaper/Business Case title is required' }, { status: 400 });
        }

        const recipientEmail = "info@delonti.com";
        const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || "Delonti.Port@delonti.com";
        const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER || "Delonti.Port@delonti.com";
        const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || "";

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.ionos.com",
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: (process.env.EMAIL_PORT || "587") === "465",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: fromEmail,
            to: recipientEmail,
            subject: `Whitepaper Download Request — ${whitepaperTitle}`,
            html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2b2b4f; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">Whitepaper Download Request — Delonti</h2>
          </div>
          <div style="background-color: white; padding: 30px; color: #334155;">
            <p style="margin-top: 0; font-size: 16px;">A visitor has requested a whitepaper or business case download.</p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Document:</strong> ${whitepaperTitle}</p>
              <p style="margin: 5px 0;"><strong>Requested at:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; color: #64748b; font-size: 14px;">
            <p style="margin: 0;">Please send the PDF to this email address.</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing whitepaper download request:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
