-- Daily cap on free generations per account.
--
-- Free-model runs don't touch the token balance or the subscriber monthly
-- quota, but each one is a paid prediction on the owner's Replicate account.
-- The in-memory rate limiters only bound bursts; this table is what bounds
-- how many a single account can run in a day (FREE_DAILY_GENERATION_LIMIT in
-- server.js, default 30; subscribers FREE_DAILY_GENERATION_LIMIT_SUBSCRIBER).
--
-- Until this file has been run the server enforces the same cap with an
-- in-process counter, which resets on deploy and is per-instance. Running it
-- makes the cap durable and correct across instances.
--
-- Run in the Supabase SQL editor. Safe to re-run.

create table if not exists free_generation_usage (
    user_id uuid not null references auth.users(id) on delete cascade,
    -- UTC calendar day, supplied by the server so every instance agrees.
    day     date not null,
    count   integer not null default 0,
    primary key (user_id, day)
);

alter table free_generation_usage enable row level security;

drop policy if exists "Service role can manage free generation usage" on free_generation_usage;
create policy "Service role can manage free generation usage" on free_generation_usage
    for all using (auth.role() = 'service_role');

-- Deliberately NO grant to anon/authenticated: a client must never be able to
-- read or reset its own counter.

-- Atomic check-and-increment. The upsert is the lock: two concurrent requests
-- at count = limit - 1 cannot both succeed.
-- Returns the count AFTER incrementing, or -1 when the cap is already reached.
create or replace function public.reserve_free_generation(
  p_user_id uuid,
  p_day     date,
  p_limit   integer
) returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  if p_limit <= 0 then
    return -1;
  end if;

  insert into free_generation_usage (user_id, day, count)
  values (p_user_id, p_day, 1)
  on conflict (user_id, day) do update
     set count = free_generation_usage.count + 1
   where free_generation_usage.count < p_limit
  returning count into v_count;

  if found then
    return v_count;
  end if;
  return -1; -- cap reached
end;
$$;

-- Give one slot back (the provider refused or never started the prediction).
create or replace function public.refund_free_generation(
  p_user_id uuid,
  p_day     date
) returns void
language sql
security definer
set search_path = public
as $$
  update free_generation_usage
     set count = greatest(0, count - 1)
   where user_id = p_user_id
     and day = p_day;
$$;

revoke execute on function public.reserve_free_generation(uuid, date, integer) from public, anon, authenticated;
revoke execute on function public.refund_free_generation(uuid, date)           from public, anon, authenticated;
grant  execute on function public.reserve_free_generation(uuid, date, integer) to service_role;
grant  execute on function public.refund_free_generation(uuid, date)           to service_role;

-- Housekeeping: old rows are only useful for looking at usage over time.
-- Run periodically, or wire to pg_cron:
--   delete from free_generation_usage where day < current_date - 90;
