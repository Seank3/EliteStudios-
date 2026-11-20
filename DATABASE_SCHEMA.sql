-- Elite Studios Kungu — PostgreSQL schema (Supabase-ready)
-- Run in Supabase SQL editor for production. The demo build uses
-- data/store.json; swap the API routes to these tables on launch.

create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text not null default 'admin' check (role in ('super_admin','admin','editor')),
  created_at timestamptz default now()
);

create table if not exists company_settings (
  id int primary key default 1,
  name text default 'Elite Studios Kungu',
  phone text, whatsapp text, email text, address text, hours text,
  instagram text, facebook text, tiktok text, youtube text,
  updated_at timestamptz default now()
);

create table if not exists founder_profiles (
  id int primary key default 1,
  full_name text, title text default 'Founder and CEO',
  bio text, philosophy text, image_url text, links jsonb default '{}',
  updated_at timestamptz default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null, name text not null, short text, description text,
  image_url text, is_active boolean default true, sort int default 0
);

create table if not exists service_packages (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id) on delete cascade,
  name text not null, price numeric, currency text default 'UGX',
  price_type text default 'custom' check (price_type in ('fixed','custom')),
  includes jsonb default '[]', is_active boolean default true
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null, title text not null, category text,
  description text, year text, credits text, cover_url text,
  is_featured boolean default false, is_published boolean default true,
  created_at timestamptz default now()
);

create table if not exists project_media (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  url text not null, media_type text default 'image', sort int default 0
);

create table if not exists gallery_images (
  id uuid primary key default gen_random_uuid(),
  category text, url text not null, alt text, sort int default 0
);

create table if not exists audio_samples (
  id uuid primary key default gen_random_uuid(),
  title text not null, url text not null, artist text, duration text
);

create table if not exists artists (
  id uuid primary key default gen_random_uuid(),
  name text not null, category text, bio text, image_url text, is_active boolean default true
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  customer_name text not null, phone text not null, email text not null,
  service text not null, preferred_date date, preferred_time time,
  details text, status text default 'pending' check (status in ('pending','confirmed','declined','completed')),
  admin_notes text, created_at timestamptz default now()
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null, email text not null, message text not null,
  created_at timestamptz default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null, quote text not null, permission boolean default false
);

create table if not exists social_accounts (
  id uuid primary key default gen_random_uuid(),
  platform text not null, handle text, url text
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor text, action text not null, details jsonb, created_at timestamptz default now()
);

-- Row Level Security (enable + policies per Supabase docs)
alter table bookings enable row level security;
alter table projects enable row level security;
alter table services enable row level security;
