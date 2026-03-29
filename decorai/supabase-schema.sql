-- DecorAI Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor (Database → SQL Editor) if you need custom tables.
-- For email sign up / login only, Supabase Auth (auth.users) is used automatically; no custom tables required.

-- Optional: Enable UUID extension (usually already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Legacy: one layout per user (overwritten on save). Kept for migration.
CREATE TABLE IF NOT EXISTS user_layouts (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    state JSONB NOT NULL DEFAULT '{}',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS: users can only read/write their own row
ALTER TABLE user_layouts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own layout" ON user_layouts;
CREATE POLICY "Users can manage own layout" ON user_layouts
    FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage layouts" ON user_layouts;
CREATE POLICY "Service role can manage layouts" ON user_layouts
    FOR ALL USING (auth.role() = 'service_role');

-- Multiple saved layouts per user (list + load)
CREATE TABLE IF NOT EXISTS user_saved_layouts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL DEFAULT 'My layout',
    state JSONB NOT NULL DEFAULT '{}',
    preview_data_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- If table already exists, add preview column (run once if needed):
-- ALTER TABLE user_saved_layouts ADD COLUMN IF NOT EXISTS preview_data_url TEXT;

CREATE INDEX IF NOT EXISTS user_saved_layouts_user_id_idx ON user_saved_layouts(user_id);

ALTER TABLE user_saved_layouts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own saved layouts" ON user_saved_layouts;
CREATE POLICY "Users can manage own saved layouts" ON user_saved_layouts
    FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage saved layouts" ON user_saved_layouts;
CREATE POLICY "Service role can manage saved layouts" ON user_saved_layouts
    FOR ALL USING (auth.role() = 'service_role');

-- Migration: copy existing user_layouts into user_saved_layouts (run once)
-- Run this once to migrate existing single layouts into the new table:
-- INSERT INTO user_saved_layouts (user_id, name, state, updated_at)
-- SELECT user_id, 'Saved layout', state, updated_at FROM user_layouts;

-- ============================================================
-- Token / Payment System
-- ============================================================

-- User tokens table: tracks each user's available generation tokens
CREATE TABLE IF NOT EXISTS user_credits (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    credits INTEGER DEFAULT 2 NOT NULL,         -- Start with 2 free tokens
    total_generations INTEGER DEFAULT 0 NOT NULL, -- Lifetime count of successful generations
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table: records Stripe purchase history
CREATE TABLE IF NOT EXISTS payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    stripe_payment_intent_id TEXT UNIQUE,
    stripe_checkout_session_id TEXT UNIQUE,
    amount INTEGER NOT NULL,           -- Amount in cents
    credits_purchased INTEGER NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL, -- pending | completed | failed | refunded
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Automatically create a credits row (2 free tokens) when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_credits (user_id, credits)
    VALUES (NEW.id, 2)
    ON CONFLICT (user_id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Auto-update updated_at on user_credits changes
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_user_credits_updated_at ON user_credits;
CREATE TRIGGER update_user_credits_updated_at
    BEFORE UPDATE ON user_credits
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security
ALTER TABLE user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own credits" ON user_credits;
CREATE POLICY "Users can view own credits" ON user_credits
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage credits" ON user_credits;
CREATE POLICY "Service role can manage credits" ON user_credits
    FOR ALL USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Users can view own payments" ON payments;
CREATE POLICY "Users can view own payments" ON payments
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage payments" ON payments;
CREATE POLICY "Service role can manage payments" ON payments
    FOR ALL USING (auth.role() = 'service_role');

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_credits_user_id ON user_credits(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_session ON payments(stripe_checkout_session_id);

-- Permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON user_credits TO authenticated;
GRANT SELECT ON payments TO authenticated;
