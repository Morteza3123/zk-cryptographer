import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getClient() {
  const email = import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = import.meta.env.GOOGLE_PRIVATE_KEY;
  if (!email || !rawKey) return null;
  // The private key is stored as a single-line env var with literal "\n"
  // sequences (that's how most hosts, including Vercel, require multi-line
  // secrets to be entered) — turn them back into real newlines here.
  const key = rawKey.replace(/\\n/g, "\n");
  return new JWT({ email, key, scopes: SCOPES });
}

/**
 * Appends one row to the given sheet/tab. Returns false (rather than
 * throwing) when the Google Sheets integration isn't configured, so local
 * development and a not-yet-wired-up deploy can still accept form
 * submissions (the email notification is the fallback in that case).
 */
export async function appendRow(sheetName: string, row: string[]): Promise<boolean> {
  const sheetId = import.meta.env.GOOGLE_SHEET_ID;
  const client = getClient();
  if (!sheetId || !client) {
    console.warn("[googleSheets] Not configured — skipping sheet write. See .env.example.");
    return false;
  }

  const range = encodeURIComponent(`${sheetName}!A1`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  await client.request({
    url,
    method: "POST",
    data: { values: [row] },
  });
  return true;
}
