-- Atomic credit + subscription-quota operations.
--
-- Security fix (H2): the previous server-side logic read a balance and then
-- wrote `balance - 1` in two separate statements. Concurrent generation
-- requests could interleave between the read and the write and each pass the
-- check, letting a user spend more generations than they had credits for (or
-- exceed the monthly subscription cap). These functions move the check and the
-- decrement into a single atomic statement so the race is impossible.
--
-- Run once in the Supabase SQL editor (Dashboard > SQL Editor).

-- ── Free / purchased token credits ─────────────────────────────────────────

-- Decrement one credit iff the user has at least one. Returns the NEW balance,
-- or -1 when the user had no credits (or no row). The `credits > 0` guard and
-- the decrement execute as one statement under a row lock, so two concurrent
-- callers can never both succeed on the last credit.
create or replace function public.consume_credit(p_user_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_balance integer;
begin
  update user_credits
     set credits = credits - 1
   where user_id = p_user_id
     and credits > 0
  returning credits into v_balance;

  if not found then
    return -1;
  end if;
  return v_balance;
end;
$$;

-- Refund one credit (atomic increment). Used when a downstream AI call fails so
-- the user isn't charged a slot for a no-op.
create or replace function public.refund_credit(p_user_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_balance integer;
begin
  update user_credits
     set credits = credits + 1
   where user_id = p_user_id
  returning credits into v_balance;
  return coalesce(v_balance, 0);
end;
$$;

-- Bump the lifetime generation counter atomically (analytics only).
create or replace function public.increment_lifetime_generations(p_user_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update user_credits
     set total_generations = total_generations + 1
   where user_id = p_user_id;
$$;

-- ── Subscription monthly quota ─────────────────────────────────────────────

-- Atomic check-and-increment of a subscriber's monthly generation count.
-- Resets the counter when the stored period differs from p_period (new month).
-- Returns the count AFTER incrementing on success, -1 when the cap is already
-- reached this period, or -2 when there is no subscription row.
create or replace function public.reserve_subscription_generation(
  p_user_id uuid,
  p_period  date,
  p_limit   integer
) returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  update user_subscriptions
     set monthly_count = case
            when monthly_period_start is distinct from p_period then 1
            else monthly_count + 1
          end,
         monthly_period_start = p_period
   where user_id = p_user_id
     and (
       monthly_period_start is distinct from p_period  -- new month → always allowed
       or monthly_count < p_limit                       -- same month → only under cap
     )
  returning monthly_count into v_count;

  if found then
    return v_count;
  end if;

  -- Nothing updated: distinguish "cap reached" from "no subscription".
  perform 1 from user_subscriptions where user_id = p_user_id;
  if found then
    return -1; -- limit reached
  end if;
  return -2;   -- no subscription row
end;
$$;

-- Refund one monthly generation slot (atomic), only within the current period.
create or replace function public.refund_subscription_generation(
  p_user_id uuid,
  p_period  date
) returns void
language sql
security definer
set search_path = public
as $$
  update user_subscriptions
     set monthly_count = greatest(0, monthly_count - 1)
   where user_id = p_user_id
     and monthly_period_start = p_period;
$$;

-- ── Lock down execution: only the server (service_role) may call these ──────
-- Clients (anon / authenticated) must never be able to mint or spend credits
-- directly via RPC.
revoke execute on function public.consume_credit(uuid)                       from public, anon, authenticated;
revoke execute on function public.refund_credit(uuid)                        from public, anon, authenticated;
revoke execute on function public.increment_lifetime_generations(uuid)       from public, anon, authenticated;
revoke execute on function public.reserve_subscription_generation(uuid, date, integer) from public, anon, authenticated;
revoke execute on function public.refund_subscription_generation(uuid, date) from public, anon, authenticated;

grant execute on function public.consume_credit(uuid)                       to service_role;
grant execute on function public.refund_credit(uuid)                        to service_role;
grant execute on function public.increment_lifetime_generations(uuid)       to service_role;
grant execute on function public.reserve_subscription_generation(uuid, date, integer) to service_role;
grant execute on function public.refund_subscription_generation(uuid, date) to service_role;
