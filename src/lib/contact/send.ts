import { CONTACT_EMAIL } from "@/config/site";
import { Resend } from "resend";

export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export type SendResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Server-side email — Resend only (Web3Forms runs in the browser). */
export async function sendContactEmail(fields: ContactFields): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return {
      ok: false,
      error:
        "Contact form is not configured. Please email gjataluarda@gmail.com directly.",
      status: 503,
    };
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Luarda Gjata Website <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: fields.email,
    subject: `Website enquiry from ${fields.name}`,
    text: [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      "",
      "Message:",
      fields.message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(fields.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      error: "Could not send your message. Please try again or email directly.",
      status: 500,
    };
  }

  return { ok: true };
}
