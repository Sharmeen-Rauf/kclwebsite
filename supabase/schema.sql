-- =============================================================================
-- Kashmir Corporation Pvt Ltd (KCL) — Supabase PostgreSQL Schema
-- File: /supabase/schema.sql
-- Purpose: Production-ready tables & Row Level Security (RLS) policies for:
--   1. permit_requests
--   2. contact_messages
--   3. news_posts
--   4. newsletter_subscribers
-- =============================================================================

create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- 1. permit_requests
-- Stores overflight and landing permit requests submitted via /request-permit
-- -----------------------------------------------------------------------------
create table if not exists public.permit_requests (
  id uuid primary key default gen_random_uuid(),
  reference_code text unique not null,
  operator_name text not null,
  contact_name text not null,
  email text not null,
  phone_or_whatsapp text not null,
  flight_type text not null check (flight_type in ('schedule', 'non-schedule')),
  permit_type text not null check (permit_type in ('overflight', 'landing', 'both')),
  route_from text not null,
  route_to text not null,
  date_time_utc text not null,
  aircraft_type_and_reg text not null,
  services_needed text[] not null default '{}',
  notes text,
  status text not null default 'received' check (status in ('received', 'filed', 'under_review', 'approved', 'confirmed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_permit_requests_created_at on public.permit_requests (created_at desc);
create index if not exists idx_permit_requests_status on public.permit_requests (status);

alter table public.permit_requests enable row level security;

-- Only service_role (Server Actions) can insert or read permit requests by default
-- create policy "Service role full access on permit_requests"
--   on public.permit_requests for all
--   using (auth.role() = 'service_role');

-- -----------------------------------------------------------------------------
-- 2. contact_messages
-- Stores general operational and commercial inquiries from /contact
-- -----------------------------------------------------------------------------
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  reference_code text unique not null,
  name text not null,
  company text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_contact_messages_created_at on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

-- -----------------------------------------------------------------------------
-- 3. news_posts
-- Optional database backing for /news when migrating from local MDX files
-- -----------------------------------------------------------------------------
create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content_mdx text not null,
  category text not null,
  author text not null default 'KCL Flight Operations Desk',
  reading_time text not null default '4 min read',
  cover_image text not null default '/img/news-ops-desk.svg',
  cover_alt text not null,
  related_slugs text[] not null default '{}',
  published boolean not null default true,
  published_at date not null default current_date,
  created_at timestamptz not null default now()
);

create index if not exists idx_news_posts_slug on public.news_posts (slug);

alter table public.news_posts enable row level security;

create policy "Public read access for published news_posts"
  on public.news_posts for select
  using (published = true);

-- -----------------------------------------------------------------------------
-- 4. newsletter_subscribers
-- Stores aviation briefing & NOTAM digest subscribers
-- -----------------------------------------------------------------------------
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  subscribed_at timestamptz not null default now(),
  active boolean not null default true
);

alter table public.newsletter_subscribers enable row level security;

