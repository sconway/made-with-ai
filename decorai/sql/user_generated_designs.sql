-- Generated design history (subscription feature)
-- Run in Supabase SQL Editor after creating the Storage bucket (see below).

-- ============================================================
-- 1. Storage bucket (create in Dashboard → Storage → New bucket)
--    Name: generated-designs
--    Public: OFF (private)
--    Or run (requires service role / dashboard):
--      INSERT INTO storage.buckets (id, name, public)
--      VALUES ('generated-designs', 'generated-designs', false)
--      ON CONFLICT (id) DO NOTHING;
-- ============================================================

-- Storage RLS: users may read objects in their own folder ({user_id}/...)
DROP POLICY IF EXISTS "Users read own generated designs" ON storage.objects;
CREATE POLICY "Users read own generated designs"
    ON storage.objects FOR SELECT
    USING (
        bucket_id = 'generated-designs'
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

DROP POLICY IF EXISTS "Service role manages generated designs storage" ON storage.objects;
CREATE POLICY "Service role manages generated designs storage"
    ON storage.objects FOR ALL
    USING (bucket_id = 'generated-designs' AND auth.role() = 'service_role');

-- ============================================================
-- 2. Metadata table
-- ============================================================

CREATE TABLE IF NOT EXISTS user_generated_designs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    storage_path TEXT NOT NULL,
    prompt TEXT,
    model TEXT,
    source_type TEXT NOT NULL DEFAULT 'room-design',
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS user_generated_designs_user_created_idx
    ON user_generated_designs(user_id, created_at DESC);

ALTER TABLE user_generated_designs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own generated designs" ON user_generated_designs;
CREATE POLICY "Users can manage own generated designs" ON user_generated_designs
    FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage generated designs" ON user_generated_designs;
CREATE POLICY "Service role can manage generated designs" ON user_generated_designs
    FOR ALL USING (auth.role() = 'service_role');

GRANT SELECT ON user_generated_designs TO authenticated;
