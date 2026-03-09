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
