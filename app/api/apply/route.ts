import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const educationalQualification = formData.get("educationalQualification") as string;
        const otherQualification = formData.get("otherQualification") as string;
        const relevantExperience = formData.get("relevantExperience") as string;
        const jobTitle = formData.get("jobTitle") as string;
        const jobCode = formData.get("jobCode") as string;
        const resumeFile = formData.get("resume") as File | null;

        // Validate required fields
        if (!fullName || !email || !phone || !educationalQualification || !relevantExperience || !jobTitle) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Build resume attachment if provided
        const attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];
        if (resumeFile && resumeFile.size > 0) {
            const arrayBuffer = await resumeFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: resumeFile.name,
                content: buffer,
                contentType: resumeFile.type || "application/octet-stream",
            });
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.ionos.com",
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: (process.env.EMAIL_PORT || "587") === "465",
            auth: {
                user: process.env.EMAIL_USER || process.env.GMAIL_USER || "Delonti.Port@delonti.com",
                pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || "",
            },
        });

        const recipientEmail = "info@delonti.com";
        const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || "Delonti.Port@delonti.com";

        const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="background: #2b2b4f; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Job Application — Delonti</h1>
          <p style="color: #a5b4fc; margin: 8px 0 0 0; font-size: 14px;">${jobTitle} · ${jobCode}</p>
        </div>

        <div style="background: #ffffff; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
          <h2 style="color: #2b2b4f; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%; font-size: 14px;">Full Name</td><td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 600;">${fullName}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 6px 0; color: #111827; font-size: 14px;"><a href="mailto:${email}" style="color: #2b2b4f;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 6px 0; color: #111827; font-size: 14px;">${phone}</td></tr>
          </table>
        </div>

        <div style="background: #ffffff; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
          <h2 style="color: #2b2b4f; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Professional Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%; font-size: 14px; vertical-align: top;">Educational Qualification</td><td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 600;">${educationalQualification}</td></tr>
            ${otherQualification ? `<tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Other Qualification</td><td style="padding: 6px 0; color: #111827; font-size: 14px;">${otherQualification}</td></tr>` : ""}
            <tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Relevant Experience</td><td style="padding: 6px 0; color: #111827; font-size: 14px;">${relevantExperience.replace(/\n/g, "<br>")}</td></tr>
          </table>
        </div>

        <div style="background: #ffffff; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
          <h2 style="color: #2b2b4f; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Position Applied For</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%; font-size: 14px;">Job Title</td><td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 600;">${jobTitle}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Job Code</td><td style="padding: 6px 0; color: #111827; font-size: 14px;">${jobCode}</td></tr>
          </table>
        </div>

        ${resumeFile ? `<p style="color: #6b7280; font-size: 13px; margin: 0;">📎 Resume attached: <strong>${resumeFile.name}</strong></p>` : "<p style=\"color: #6b7280; font-size: 13px;\">No resume attached.</p>"}
      </div>
    `;

        await transporter.sendMail({
            from: `"Delonti Careers" <${fromEmail}>`,
            to: recipientEmail,
            subject: `New Application: ${jobTitle} (${jobCode}) — ${fullName}`,
            html: htmlBody,
            attachments,
        });

        return NextResponse.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        console.error("POST /api/apply error:", error);
        return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
    }
}
