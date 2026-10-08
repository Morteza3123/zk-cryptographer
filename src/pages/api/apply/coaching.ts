import type { APIRoute } from "astro";
import { appendRow } from "../../../lib/googleSheets";
import { sendLeadNotification, escapeHtml } from "../../../lib/email";

// This route needs to run per-request (not at build time), so it opts out
// of the static output the rest of the site uses.
export const prerender = false;

const REQUIRED_FIELDS = ["name", "email", "plan", "background", "goals", "timeline"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;
  try {
    const form = await request.formData();
    data = Object.fromEntries(
      Array.from(form.entries()).map(([k, v]) => [k, String(v)])
    );
  } catch {
    return jsonResponse({ ok: false, error: "Couldn't read the submitted form." }, 400);
  }

  const missing = REQUIRED_FIELDS.filter((key) => !data[key]?.trim());
  if (missing.length > 0) {
    return jsonResponse({ ok: false, error: `Please fill in: ${missing.join(", ")}` }, 400);
  }
  if (!EMAIL_RE.test(data.email)) {
    return jsonResponse({ ok: false, error: "That email address doesn't look right." }, 400);
  }

  const row = [
    new Date().toISOString(),
    data.name,
    data.email,
    data.contact ?? "",
    data.plan,
    data.background,
    data.goals,
    data.timeline,
    data.portfolio ?? "",
    data.source ?? "",
  ];

  try {
    await appendRow("Coaching", row);
  } catch (err) {
    // A sheet-write failure shouldn't block the applicant from getting
    // their confirmation — it's logged here for the site owner to notice
    // and fix, not surfaced to the person submitting the form.
    console.error("[apply/coaching] Google Sheets append failed:", err);
  }

  try {
    await sendLeadNotification({
      subject: `New coaching application — ${data.name}`,
      html: `
        <p><b>${escapeHtml(data.name)}</b> (${escapeHtml(data.email)}) applied for coaching.</p>
        <p><b>Plan:</b> ${escapeHtml(data.plan)}<br/><b>Timeline:</b> ${escapeHtml(data.timeline)}</p>
        <p><b>Background:</b> ${escapeHtml(data.background)}</p>
        <p><b>Goals:</b> ${escapeHtml(data.goals)}</p>
        ${data.contact ? `<p><b>WhatsApp/Telegram:</b> ${escapeHtml(data.contact)}</p>` : ""}
        ${data.portfolio ? `<p><b>Portfolio:</b> ${escapeHtml(data.portfolio)}</p>` : ""}
        ${data.source ? `<p><b>Heard about us via:</b> ${escapeHtml(data.source)}</p>` : ""}
      `,
    });
  } catch (err) {
    console.error("[apply/coaching] Email notification failed:", err);
  }

  return jsonResponse({ ok: true }, 200);
};
