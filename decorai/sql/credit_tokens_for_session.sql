-- Atomic, idempotent token crediting for one-time Stripe purchases.
--
-- Run this once in the Supabase SQL editor (Dashboard > SQL Editor).
--
-- Why: token crediting is now triggered from two independent paths — the
-- Stripe webhook AND the success-page verification endpoint. This function
-- guarantees a given checkout session is only ever credited once, even if
-- both paths fire concurrently, by using a unique index on the session id as
-- an atomic lock inside a single transaction.

-- 1. Idempotency lock: one payments row per checkout session.
create unique index if not exists payments_stripe_checkout_session_id_key
  on public.payments (stripe_checkout_session_id);

-- 2. Atomic credit function. Returns the user's new token balance.
create or replace function public.credit_tokens_for_session(
  p_user_id        uuid,
  p_session_id     text,
  p_payment_intent text,
  p_tokens         integer,
  p_amount         integer
) returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_balance integer;
begin
  -- The insert is the lock. If this session was already recorded (by a prior
  -- call or a concurrent one), the unique index rejects it and we return the
  -- current balance unchanged — a safe idempotent no-op.
  begin
    insert into payments (
      user_id, stripe_checkout_session_id, stripe_payment_intent_id,
      amount, credits_purchased, status
    ) values (
      p_user_id, p_session_id, p_payment_intent,
      p_amount, p_tokens, 'completed'
    );
  exception when unique_violation then
    select credits into v_balance from user_credits where user_id = p_user_id;
    return coalesce(v_balance, 0);
  end;

  insert into user_credits (user_id, credits)
  values (p_user_id, p_tokens)
  on conflict (user_id) do update
    set credits = user_credits.credits + p_tokens
  returning credits into v_balance;

  return v_balance;
end;
$$;

-- 3. Lock down execution: only the server (service_role) may call this.
--    Clients (anon / authenticated) must NOT be able to mint tokens directly.
revoke execute on function public.credit_tokens_for_session(uuid, text, text, integer, integer) from public;
revoke execute on function public.credit_tokens_for_session(uuid, text, text, integer, integer) from anon, authenticated;
grant  execute on function public.credit_tokens_for_session(uuid, text, text, integer, integer) to service_role;
