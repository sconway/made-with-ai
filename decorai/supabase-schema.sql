-- DecorAI Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor (Database → SQL Editor) if you need custom tables.
-- For email sign up / login only, Supabase Auth (auth.users) is used automatically; no custom tables required.

-- Optional: Enable UUID extension (usually already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Saved layout per user (one row per user; overwritten on save)
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

-- Service role can manage for server-side upsert
DROP POLICY IF EXISTS "Service role can manage layouts" ON user_layouts;
CREATE POLICY "Service role can manage layouts" ON user_layouts
    FOR ALL USING (auth.role() = 'service_role');
