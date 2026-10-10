alter table public.viewer_patches
  add column if not exists reverse_image_path text
  check (
    reverse_image_path is null or (
      reverse_image_path ~ '^patches/[^/]+$'
      and reverse_image_path !~ '\.\.'
    )
  );
