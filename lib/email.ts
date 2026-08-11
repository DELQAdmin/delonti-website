import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.ionos.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: (process.env.EMAIL_PORT || "587") === "465",
  auth: {
    user: process.env.EMAIL_USER || process.env.GMAIL_USER || "Delonti.Port@delonti.com",
    pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || "",
  },
});

export interface ContactInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  interest?: string;
}

export async function sendContactEmail(contact: ContactInfo): Promise<string> {
  const to = "info@delonti.com";
  const from = process.env.EMAIL_FROM || "Delonti Technology Solutions <Delonti.Port@delonti.com>";

  const subject = `New Inquiry from ${contact.name || "Website Visitor"} - ${
    contact.interest || "General"
  }`;

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Name</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${contact.name || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Email</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${contact.email || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Phone</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${contact.phone || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Company</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${contact.company || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Interest</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${contact.interest || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Message</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${contact.message || "Not provided"}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; color: #666; font-size: 12px;">
      This email was sent from the Delonti Technology Solutions website.
    </p>
  `;

  const textBody = `
New Contact Form Submission

Name: ${contact.name || "Not provided"}
Email: ${contact.email || "Not provided"}
Phone: ${contact.phone || "Not provided"}
Company: ${contact.company || "Not provided"}
Interest: ${contact.interest || "Not provided"}
Message: ${contact.message || "Not provided"}

---
This email was sent from the Delonti Technology Solutions website.
  `.trim();

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return "Email sent successfully! Delonti team will contact you soon.";
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email. Please try again or contact us directly.");
  }
}
