import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            tabId,
            tabName,
            name,
            email,
            phone,
            company,
            message,
            customFields = {},
        } = body;

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required fields." },
                { status: 400 }
            );
        }

        // Configure transporter based on environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.ionos.com",
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: (process.env.EMAIL_PORT || "587") === "465",
            auth: {
                user: process.env.EMAIL_USER || process.env.GMAIL_USER || "Delonti.Port@delonti.com",
                pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || "",
            },
        });
        const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || "Delonti.Port@delonti.com";
        
        // Map tab IDs to the respective department emails
        const emailMap: Record<string, string> = {
            hq: "info@delonti.com",
            sales: "Sales@delonti.com",
            partnerships: "Partnerships@delonti.com",
            government: "GovInquiries@delonti.com",
            support: "support@delonti.com",
            demo: "ReqDemo@delonti.com",
        };

        const targetDeptEmail = emailMap[tabId] || "info@delonti.com";
        const recipientEmail = targetDeptEmail;

        // Build HTML table rows for custom fields
        let customRows = "";
        Object.entries(customFields).forEach(([key, val]) => {
            if (val) {
                // CamelCase/snake_case to Title Case helper
                const formattedKey = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/_/g, " ")
                    .replace(/^\w/, (c) => c.toUpperCase());

                customRows += `
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc; color: #475569; width: 35%; font-size: 14px;">${formattedKey}</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${val}</td>
          </tr>
        `;
            }
        });

        const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="background: #2b2b4f; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Inquiry</h1>
          <p style="color: #a5b4fc; margin: 8px 0 0 0; font-size: 14px;">Inquiry Type: <strong>${tabName || "General Contact"}</strong></p>
        </div>

        <div style="background: #ffffff; border-radius: 8px; padding: 24px; margin-bottom: 16px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h2 style="color: #2b2b4f; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Contact details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc; color: #475569; width: 35%; font-size: 14px;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc; color: #475569; font-size: 14px;">Email</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #2b2b4f; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc; color: #475569; font-size: 14px;">Phone</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${phone}</td>
            </tr>
            ` : ""}
            ${company ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc; color: #475569; font-size: 14px;">Company/Org</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${company}</td>
            </tr>
            ` : ""}
            ${customRows}
          </table>
        </div>

        ${message ? `
        <div style="background: #ffffff; border-radius: 8px; padding: 24px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h2 style="color: #2b2b4f; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Message / Details</h2>
          <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        ` : ""}
      </div>
    `;

        const subject = `New Inquiry: ${tabName || "General"} — ${name}`;

        await transporter.sendMail({
            from: fromEmail,
            to: recipientEmail,
            subject,
            html: htmlBody,
        });

        return NextResponse.json({
            success: true,
            message: "Inquiry submitted successfully.",
        });
    } catch (error) {
        console.error("POST /api/contact error:", error);
        return NextResponse.json(
            { error: "Failed to submit your inquiry. Please try again." },
            { status: 500 }
        );
    }
}
