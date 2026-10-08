# Wiring up the apply forms (Google Sheets + email)

The Coaching and Services apply forms (`/coaching/apply`, `/services/apply`) post to two API
routes (`src/pages/api/apply/coaching.ts` and `.../services.ts`) that, on a valid submission:

1. append a row to a Google Sheet (one tab per form), and
2. send you an email notification via Resend.

Both steps are optional and independent — if either isn't configured, that step is skipped (and
logged as a warning) rather than failing the submission, so the site works end-to-end even before
you've set these up. This doc is the one-time setup for both.

## 1. Google Sheet + service account

Google Sheets needs a *service account* (a machine identity) to write to a sheet on the site's
behalf — your own Google login isn't used.

1. **Create the spreadsheet.** In Google Sheets, create a new spreadsheet (name it anything, e.g.
   "ZK Cryptographer Leads"). Add two tabs named exactly `Coaching` and `Services` (tab names are
   case-sensitive and must match — the code appends to whichever tab matches the form). A header
   row is optional (new rows are appended below existing content either way) but recommended:
   - `Coaching` tab header row: `Timestamp, Name, Email, Contact, Plan, Background, Goals, Timeline, Portfolio, Source`
   - `Services` tab header row: `Timestamp, Name, Email, Contact, Company, Stage, Need, Goals, Timeline, Link, Source`
2. **Create a Google Cloud project** (if you don't already have one) at
   [console.cloud.google.com](https://console.cloud.google.com/projectcreate).
3. **Enable the Google Sheets API** for that project: in the console's search bar, search
   "Google Sheets API" → open it → click **Enable**.
4. **Create a service account**: left sidebar → *IAM & Admin* → *Service Accounts* → **Create
   Service Account**. Give it any name (e.g. "zk-cryptographer-forms"). You can skip the optional
   "grant access" steps — click through to **Done**.
5. **Create a key for it**: open the service account you just created → *Keys* tab → **Add Key** →
   **Create new key** → choose **JSON** → it downloads a `.json` file. Keep this file private —
   it's a credential, not something to commit to the repo.
6. **Share the spreadsheet with the service account.** Open the downloaded JSON file and copy the
   `client_email` value (it looks like `something@your-project.iam.gserviceaccount.com`). Back in
   the spreadsheet, click **Share** and add that email address with **Editor** access, same as
   you'd share it with a person.
7. **Collect the three values** for your `.env` (see `.env.example`):
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — the `client_email` from the JSON file.
   - `GOOGLE_PRIVATE_KEY` — the `private_key` value from the JSON file, pasted as-is (it already
     contains literal `\n` sequences instead of real line breaks — that's expected and the code
     handles it).
   - `GOOGLE_SHEET_ID` — from the spreadsheet's URL: `https://docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`.

## 2. Resend (email notifications)

1. Sign up at [resend.com](https://resend.com) (free tier is enough for this volume).
2. **Quick start (no domain needed):** skip straight to step 3 and use
   `onboarding@resend.dev` as `NOTIFICATION_EMAIL_FROM` — this sandbox address works immediately
   but only delivers to the email address on your Resend account.
3. **For production** (delivering to any address, e.g. your own inbox you check regularly):
   add and verify your own domain under *Domains* in the Resend dashboard (it'll give you a few
   DNS records to add wherever your domain is hosted), then use an address at that domain as
   `NOTIFICATION_EMAIL_FROM`, e.g. `ZK Cryptographer <notifications@zkcryptographer.com>`.
4. Create an API key under *API Keys* → **Create API Key**. Copy it into `RESEND_API_KEY`.
5. Set `NOTIFICATION_EMAIL_TO` to whichever address should receive new-lead emails.

## 3. Applying the values

**Locally:** copy `.env.example` to `.env` and fill in the values above, then `npm run dev`.

**On Vercel (production):** in the project's dashboard, go to *Settings → Environment Variables*
and add each of the six variables from `.env.example` with the same names. Redeploy after adding
them (existing deployments don't pick up new environment variables until the next build).

## Notes

- Neither integration is required for the site to build or for the forms to accept submissions —
  this is deliberate, so you can deploy now and wire up leads whenever you're ready.
- The API routes (`src/pages/api/apply/*.ts`) are the only server-rendered part of the site
  (`export const prerender = false`); everything else is static, which is why the Vercel adapter
  is configured in `"hybrid"` output mode in `astro.config.mjs`.
