-- Run once in the Supabase SQL editor. Keep service-role key server-side only.
create table if not exists public.customer_reviews (
 id uuid primary key default gen_random_uuid(),
 name text not null check (char_length(name) between 2 and 80),
 rating smallint not null check (rating between 1 and 5),
 message text not null check (char_length(message) between 15 and 1500),
 status text not null default 'pending' check (status in ('pending','approved','rejected')),
 submission_fingerprint text unique,
 created_at timestamptz not null default now()
);
create index if not exists customer_reviews_public_idx on public.customer_reviews (created_at desc) where status='approved';
alter table public.customer_reviews enable row level security;
-- No anonymous policies: only the server-side service role can read/write.
-- To moderate: Supabase > Table Editor > customer_reviews > change status to approved or rejected.
