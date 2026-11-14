-- Generation events: one row per image generation.
--
-- Answers the questions the app could not answer before: how many runs did
-- each model serve today, how many failed, how long did they take, and (if
-- MODEL_COST_USD is set on the server) roughly what did they cost.
--
-- The server writes a row when a provider accepts a generation and completes
-- it when the outcome is known. Writes are best-effort — if this table does
-- not exist the app works exactly the same and the events only go to the log.
--
-- Run in the Supabase SQL editor. Safe to re-run.

create table if not exists generation_events (
    id            bigint generated always as identity primary key,
    created_at    timestamptz not null default now(),
    completed_at  timestamptz,
    -- 'replicate' | 'openai'
    provider      text not null,
    -- 'owner/name' (the pinned version hash is dropped so runs group by model)
    model         text not null,
    -- Replicate prediction id; null for providers that answer in one request.
    prediction_id text,
    -- Null for a pre-signup (anonymous) generation.
    user_id       uuid references auth.users(id) on delete set null,
    -- 'started' (accepted, outcome not yet seen — also what an abandoned run
    -- stays as) | 'succeeded' | 'failed' | 'canceled' | 'timeout'
    outcome       text not null default 'started',
    duration_ms   integer,
    -- Provider's error message, truncated. Never user content.
    error         text,
    -- Estimated dollars for this run, from MODEL_COST_USD. Null if unknown.
    est_cost_usd  numeric(10, 4)
);

-- The outcome update looks a row up by prediction id.
create index if not exists generation_events_prediction_idx
    on generation_events(prediction_id) where prediction_id is not null;
create index if not exists generation_events_created_idx
    on generation_events(created_at desc);

alter table generation_events enable row level security;

drop policy if exists "Service role can manage generation events" on generation_events;
create policy "Service role can manage generation events" on generation_events
    for all using (auth.role() = 'service_role');

-- Deliberately NO grant to anon/authenticated.

-- Per model, per UTC day. Read it in the SQL editor:
--   select * from generation_daily_stats where day >= current_date - 7;
create or replace view generation_daily_stats
with (security_invoker = true) as
select
    (created_at at time zone 'utc')::date                         as day,
    provider,
    model,
    count(*)                                                      as runs,
    count(*) filter (where outcome = 'succeeded')                 as succeeded,
    count(*) filter (where outcome in ('failed', 'timeout'))      as failed,
    count(*) filter (where outcome = 'canceled')                  as canceled,
    count(*) filter (where outcome = 'started')                   as unfinished,
    count(*) filter (where user_id is null)                       as anonymous_runs,
    round(
        100.0 * count(*) filter (where outcome in ('failed', 'timeout'))
        / nullif(count(*) filter (where outcome <> 'started'), 0), 1
    )                                                             as failure_pct,
    round(avg(duration_ms) filter (where outcome = 'succeeded'))  as avg_success_ms,
    sum(est_cost_usd)                                             as est_cost_usd
from generation_events
group by 1, 2, 3
order by 1 desc, runs desc;

revoke all on generation_daily_stats from anon, authenticated;

-- Housekeeping: run periodically, or wire to pg_cron:
--   delete from generation_events where created_at < now() - interval '180 days';
