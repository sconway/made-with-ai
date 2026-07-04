-- Signup credits are granted by the app server (FREE_TOKENS env) on the
-- user's first GET /api/credits — not by a hardcoded value in the database.
--
-- Run this in the Supabase SQL Editor for existing projects that still have
-- the old handle_new_user trigger (which always inserted 2 credits).

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Optional: align column default for manual inserts / documentation
ALTER TABLE public.user_credits
  ALTER COLUMN credits SET DEFAULT 0;
