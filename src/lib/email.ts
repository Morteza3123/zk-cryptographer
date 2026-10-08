import { Resend } from "resend";

/**
 * Sends a lead-notification email via Resend. Silently no-ops when the
 * integration isn't configured (best-effort, same reasoning as
 * googleSheets.ts) rather than failing the whole form submission.
 */
export async function sendLeadNotification({ subject, html }: { subject: string; html: string }): Promise<boolean> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.NOTIFICATION_EMAIL_TO;
  if (!apiKey || !to) {
    console.warn("[email] Resend not configured — skipping notification. See .env.example.");
    return false;
  }

  const from = import.meta.env.NOTIFICATION_EMAIL_FROM || "ZK Cryptographer <onboarding@resend.dev>";
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, html });
  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
  return true;
}

/** Escapes user-supplied text before interpolating it into an HTML email body. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
