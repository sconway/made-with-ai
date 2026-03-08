# Supabase Email Templates for DecorAI

Use these templates in your Supabase project so confirmation and other auth emails match DecorAI branding and send users to the correct URL.

## 1. Redirect URL (required for correct link)

The confirmation link will redirect to the URL you pass when calling `signUp()`. The app already passes `window.location.origin` (e.g. `http://localhost:5173` in dev or `https://yourapp.com` in production).

**You must allow that URL in Supabase:**

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **Authentication** → **URL Configuration**.
3. Set **Site URL** to your production URL (e.g. `https://yourapp.com`).
4. Under **Redirect URLs**, add:
   - `http://localhost:5173` (and `http://localhost:5173/` if needed) for local dev.
   - Your production URL(s), e.g. `https://yourapp.com` and `https://yourapp.com/**`.

Without these, the confirmation email may redirect to the default Site URL instead of where the user signed up.

## 2. Confirm signup email template

1. In Supabase: **Authentication** → **Email Templates**.
2. Open **Confirm signup**.
3. Set **Subject** to: `Confirm your DecorAI account`
4. Paste the contents of `confirm-signup.html` into the **Message body** (HTML).
5. Save.

The template uses `{{ .ConfirmationURL }}` so the button sends users to the correct place after confirmation.
