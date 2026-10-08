import type { APIRoute } from "astro";
import { appendRow } from "../../../lib/googleSheets";
import { sendLeadNotification, escapeHtml } from "../../../lib/email";

export const prerender = false;

const REQUIRED_FIELDS = ["name", "email", "company", "need", "goals", "timeline"] as const;
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
    data.company,
    data.stage ?? "",
    data.need,
    data.goals,
    data.timeline,
    data.link ?? "",
    data.source ?? "",
  ];

  try {
    await appendRow("Services", row);
  } catch (err) {
    console.error("[apply/services] Google Sheets append failed:", err);
  }

  try {
    await sendLeadNotification({
      subject: `New services application — ${data.company}`,
      html: `
        <p><b>${escapeHtml(data.name)}</b> (${escapeHtml(data.email)}) from <b>${escapeHtml(data.company)}</b> wants help with: ${escapeHtml(data.need)}.</p>
        <p><b>Timeline:</b> ${escapeHtml(data.timeline)}${data.stage ? ` · <b>Team size:</b> ${escapeHtml(data.stage)}` : ""}</p>
        <p><b>Project:</b> ${escapeHtml(data.goals)}</p>
        ${data.contact ? `<p><b>WhatsApp/Telegram:</b> ${escapeHtml(data.contact)}</p>` : ""}
        ${data.link ? `<p><b>Link:</b> ${escapeHtml(data.link)}</p>` : ""}
        ${data.source ? `<p><b>Heard about us via:</b> ${escapeHtml(data.source)}</p>` : ""}
      `,
    });
  } catch (err) {
    console.error("[apply/services] Email notification failed:", err);
  }

  return jsonResponse({ ok: true }, 200);
};
