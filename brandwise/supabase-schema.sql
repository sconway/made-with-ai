-- BrandWise Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor (Database → SQL Editor)

-- Enable UUID extension (usually already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user_credits table to track generation credits
CREATE TABLE IF NOT EXISTS user_credits (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    credits INTEGER DEFAULT 2 NOT NULL, -- Start with 2 free credits
    total_generations INTEGER DEFAULT 0 NOT NULL, -- Track total generations used
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create payments table to track purchase history
CREATE TABLE IF NOT EXISTS payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    stripe_payment_intent_id TEXT UNIQUE,
    stripe_checkout_session_id TEXT UNIQUE,
    amount INTEGER NOT NULL, -- Amount in cents
    credits_purchased INTEGER NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL, -- pending, completed, failed, refunded
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create function to automatically create user_credits row when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_credits (user_id, credits)
    VALUES (NEW.id, 2); -- 2 free credits for new users
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call function on new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_user_credits_updated_at ON user_credits;
CREATE TRIGGER update_user_credits_updated_at
    BEFORE UPDATE ON user_credits
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_credits
-- Users can only read their own credits
CREATE POLICY "Users can view own credits" ON user_credits
    FOR SELECT USING (auth.uid() = user_id);

-- Only the server (service role) can insert/update credits
CREATE POLICY "Service role can manage credits" ON user_credits
    FOR ALL USING (auth.role() = 'service_role');

-- Create RLS policies for payments
-- Users can only view their own payments
CREATE POLICY "Users can view own payments" ON payments
    FOR SELECT USING (auth.uid() = user_id);

-- Only the server (service role) can insert payments
CREATE POLICY "Service role can manage payments" ON payments
    FOR ALL USING (auth.role() = 'service_role');

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_credits_user_id ON user_credits(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_session ON payments(stripe_checkout_session_id);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON user_credits TO authenticated;
GRANT SELECT ON payments TO authenticated;
