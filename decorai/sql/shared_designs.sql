-- Public share links for a design.
--
-- One row per live link. The images themselves (a before/after card and a
-- link-preview image, both built in the user's browser) live in the private
-- designs bucket under shared/<id>/ and are served by the app at /s/<id>.
--
-- A row existing IS the permission to show the share: "Stop sharing" deletes
-- the row, and the page and both images answer 404 from that moment.
--
-- Until this file has been run the app simply doesn't offer "Create a link";
-- the share-as-image button works either way.
--
-- Run in the Supabase SQL editor. Safe to re-run.

create table if not exists shared_designs (
    -- 12 random characters, minted by the server. Unguessable; this is what
    -- makes a link private until the owner hands it to someone.
    id          text primary key,
    -- Deleting the account removes its share records. (Files are removed by
    -- the app on "Stop sharing"; see the housekeeping note below.)
    user_id     uuid not null references auth.users(id) on delete cascade,
    created_at  timestamptz not null default now(),
    view_count  integer not null default 0,
    -- "Report this image" on the public page. Reports are emailed to
    -- FEEDBACK_TO_EMAIL; these columns are the record.
    report_count     integer not null default 0,
    last_reported_at timestamptz
);

-- For a table created by an earlier version of this file.
alter table shared_designs add column if not exists report_count integer not null default 0;
alter table shared_designs add column if not exists last_reported_at timestamptz;

-- The per-account cap and "your shared links" both look up by owner.
create index if not exists shared_designs_user_idx
    on shared_designs(user_id, created_at desc);

alter table shared_designs enable row level security;

drop policy if exists "Service role can manage shared designs" on shared_designs;
create policy "Service role can manage shared designs" on shared_designs
    for all using (auth.role() = 'service_role');

-- Deliberately NO grant to anon/authenticated: shares are read and written
-- only through the server, which checks ownership.

-- Count a view of the public page (atomic; called best-effort by the server).
create or replace function public.record_share_view(p_id text)
returns void
language sql
security definer
set search_path = public
as $$
  update shared_designs set view_count = view_count + 1 where id = p_id;
$$;

revoke execute on function public.record_share_view(text) from public, anon, authenticated;
grant  execute on function public.record_share_view(text) to service_role;

-- Count a report from the public page (atomic; called best-effort by the server).
create or replace function public.record_share_report(p_id text)
returns void
language sql
security definer
set search_path = public
as $$
  update shared_designs
     set report_count = report_count + 1, last_reported_at = now()
   where id = p_id;
$$;

revoke execute on function public.record_share_report(text) from public, anon, authenticated;
grant  execute on function public.record_share_report(text) to service_role;

-- Reported shares, most recent first:
--   select id, user_id, report_count, last_reported_at from shared_designs
--    where report_count > 0 order by last_reported_at desc;
--
-- Take one down (the page and images answer 404 at once; the files are left
-- as described under Housekeeping):
--   delete from shared_designs where id = '<id>';
--
-- Which shares bring visitors:
--   select id, created_at, view_count from shared_designs order by view_count desc limit 20;
--
-- Housekeeping: when an account is deleted its rows cascade away but its files
-- under shared/<id>/ in the bucket are not removed automatically. They are
-- unreachable (no row, so the app answers 404) and can be cleared from the
-- Storage browser.
