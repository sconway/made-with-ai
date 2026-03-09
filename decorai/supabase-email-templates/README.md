# Supabase Email Templates for DecorAI

Use these templates in your Supabase project so confirmation and other auth emails match DecorAI branding and send users to the correct URL.

## 1. Redirect URL (required for correct link)

The app passes `window.location.origin` when calling `signUp()` (e.g. `https://decorai.onrender.com` in production). **If the confirmation email link shows `localhost:3000` (or another wrong URL), Supabase is using its default Site URL** — fix it in the dashboard:

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **Authentication** → **URL Configuration**.
3. Set **Site URL** to your **production** URL, e.g. `https://decorai.onrender.com` (not `http://localhost:3000`).
4. Under **Redirect URLs**, add:
   - Production: `https://decorai.onrender.com` and `https://decorai.onrender.com/**`
   - Local dev (optional): `http://localhost:5173` and `http://localhost:5173/**`
5. Save.

After this, new confirmation emails will use the correct redirect. Existing emails already sent will still contain the old link.

## 2. Confirm signup email template

1. In Supabase: **Authentication** → **Email Templates**.
2. Open **Confirm signup**.
3. Set **Subject** to: `Confirm your DecorAI account`
4. Paste the contents of `confirm-signup.html` into the **Message body** (HTML).
5. Save.

The template uses `{{ .ConfirmationURL }}` so the button sends users to the correct place after confirmation.
