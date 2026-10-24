-- Anonymous (pre-signup) generation grants.
--
-- Lets a first-time visitor generate one design before creating an account, so
-- the product proves itself before it asks for anything. Every grant is
-- recorded here, keyed on a signed device cookie, with the client IP kept as a
-- backstop for the obvious abuse (clear the cookie, get another free run).
--
-- Service-role only: the anon/authenticated Supabase roles must never read or
-- write this table, so no RLS policy grants them access.
--
-- Run this in the Supabase SQL editor before setting ANON_DEVICE_SECRET.

CREATE TABLE IF NOT EXISTS anonymous_generations (
    -- Random id minted by the server and returned in a signed HttpOnly cookie.
    -- PRIMARY KEY is what makes the grant atomic: the INSERT itself is the
    -- lock, so two concurrent requests from one device can't both be granted.
    device_id TEXT PRIMARY KEY,
    ip TEXT,
    -- Replicate prediction ids this device started. /replicate/poll checks
    -- membership here before polling on behalf of an anonymous caller, so one
    -- visitor can't read another's in-flight generation.
    prediction_ids TEXT[] NOT NULL DEFAULT '{}',
    used INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Supports the per-IP cap query (count grants from this IP since a cutoff).
CREATE INDEX IF NOT EXISTS anonymous_generations_ip_created_idx
    ON anonymous_generations(ip, created_at DESC);

ALTER TABLE anonymous_generations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can manage anonymous generations" ON anonymous_generations;
CREATE POLICY "Service role can manage anonymous generations" ON anonymous_generations
    FOR ALL USING (auth.role() = 'service_role');

-- Deliberately NO grant to anon/authenticated.

-- Housekeeping: rows older than 90 days serve no purpose (the device cookie
-- has long since expired). Run periodically, or wire to pg_cron:
--   DELETE FROM anonymous_generations WHERE created_at < NOW() - INTERVAL '90 days';
