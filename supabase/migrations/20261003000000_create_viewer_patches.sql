create table public.viewer_patches (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  name text not null check (length(trim(name)) > 0),
  organization text,
  category text,
  location text,
  submitted_by text,
  story text,
  history text,
  image_path text not null check (
    image_path ~ '^patches/[^/]+$' and image_path !~ '\.\.'
  ),
  image_alt text,
  video_url text check (video_url is null or video_url ~ '^https?://'),
  active boolean not null default true,
  sort_order integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index viewer_patches_public_order_idx
  on public.viewer_patches (sort_order asc nulls last, created_at asc, id asc)
  where active = true;

alter table public.viewer_patches enable row level security;
revoke all on public.viewer_patches from public, anon, authenticated;
grant select on public.viewer_patches to anon, authenticated;
grant all on public.viewer_patches to service_role;

create policy "Public can read active viewer patches"
  on public.viewer_patches for select to anon, authenticated
  using (active = true);

-- No existing trigger convention is checked into this repository.
create function public.set_viewer_patch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger viewer_patches_updated_at
  before update on public.viewer_patches
  for each row execute function public.set_viewer_patch_updated_at();
