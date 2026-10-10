# The Patch Wall

Public route: `/patch-wall`. The page uses the existing slate/blue palette, page width,
image optimization, footer, and email contact workflow. No dependencies were added.

## Files added

- `src/app/patch-wall/page.tsx`: SEO, server-rendered page, dynamic count, empty/error states, contribution CTA.
- `src/app/patch-wall/loading.tsx`: reduced-motion-aware loading placeholders.
- `src/components/patch-wall/PatchGrid.tsx`: responsive wall, image fallback, accessible scrolling detail dialog.
- `src/lib/assets.ts`: centralized URL resolver for the existing public asset domain.
- `src/lib/viewerPatches.ts`: server-only, active-only query with stable ordering, pagination, timeout, and error logging.
- `src/types/viewerPatch.ts`: shared metadata type; this repository has no generated database types.
- `supabase/migrations/20261003000000_create_viewer_patches.sql`: table, constraints, index, RLS, grants, trigger.
- `docs/patch-wall.md`: implementation and administration guide.

## Files modified

- `src/components/Footer.tsx`: public Patch Wall discovery link, including on mobile.
- `src/app/layout.tsx`: removed the hardcoded HTML title so Next.js page metadata controls the title.

## Database setup

Apply `supabase/migrations/20261003000000_create_viewer_patches.sql` to the existing
Supabase project using your normal migration workflow, or paste the complete file into
the Supabase SQL Editor and run it once. There was no existing migration directory or
checked-in updated-at trigger convention, so this migration establishes a conventional
Supabase migrations directory and a table-specific updated-at trigger.

The migration creates:

- `public.viewer_patches` with all fields from the brief.
- UUID primary key and unique URL-safe slug.
- Nonblank name, object path constrained to `patches/<filename>`, and HTTP(S) episode URL constraints.
- A partial index on `(sort_order ASC NULLS LAST, created_at ASC, id ASC)` for active records.
- Enabled RLS and one SELECT policy for `anon` and `authenticated`, limited to `active = true`.
- SELECT-only grants for public app roles; no INSERT, UPDATE, DELETE grants or policies.
- Administrative access for the existing service role; no service-role credentials are used by the website.
- `set_viewer_patch_updated_at()` and `viewer_patches_updated_at`, updating timestamps on every edit.

The page requests active records ordered by manual order first, then creation time,
then ID to break ties. It fetches in batches of 500 to avoid silently truncating a larger
collection at Supabase's default row cap. A failed batch shows the error fallback instead
of a partial wall or misleading count. Each request times out after ten seconds.

The route is dynamic: each visit reads current metadata. After adding, editing, hiding,
or reordering a patch, refresh the page to see the change; no frontend deployment is required.

## Cloudflare R2

Use the existing **`discoverotc-assets`** bucket and **`patches/`** prefix. R2 prefixes
are created by uploading the first object under that path; a separate folder resource is
unnecessary. No existing objects or folders need to move.

Use lowercase kebab-case filenames such as `patches/your-unit-name.webp`. Center the
patch, preserve transparency where practical, correct glare/white balance, and upload an
optimized source suitable for the larger detail view. Different dimensions and shapes
are supported; images use `object-contain` and are never cropped or stretched.

Store only `patches/your-unit-name.webp` in `image_path`. `getAssetUrl()` resolves it to
`https://cdn.discoverotc.com/patches/your-unit-name.webp`, using the site's existing R2
public domain. Next.js uses the existing allowed domain and optimizes responsive image
sizes; gallery images are lazy loaded. No additional storage or transformation provider
is used. If the domain changes later, update `src/lib/assets.ts` and the allowed hostname
in `next.config.ts`; patch rows do not change.

## Adding a patch

1. Prepare an optimized image, preferably transparent WebP, with a meaningful filename.
2. Upload it to `discoverotc-assets/patches/` through the existing Cloudflare R2 workflow.
3. Confirm its public CDN URL loads.
4. Open Supabase Table Editor → `public.viewer_patches` → Insert row.
5. Enter a unique lowercase kebab-case `slug`, the display `name`, and the object-only `image_path`.
6. Fill in available metadata and descriptive `image_alt`. Use only viewer-approved attribution; leave absent metadata null. Use an HTTP(S) URL for `video_url`.
7. Set `active = true`. Optionally set `sort_order`, preferably in increments of ten.
8. Save and refresh `/patch-wall`. The count and gallery update automatically.

## Editing a patch

### Sharing a piece

Clicking a piece updates the address bar to `/patch-wall?patch=<slug>` and opens
its details. The Copy Link button copies that URL. Opening or refreshing a shared
link opens the matching active piece automatically. Browser Back closes the dialog
and Forward reopens it; closing the dialog removes the patch query parameter.
Unknown or inactive slugs show the wall without a dialog. Keep slugs stable after
sharing links. No database changes are needed.

### Two-sided challenge coins

Run `supabase/migrations/20261009000000_add_patch_reverse_image.sql` in Supabase
SQL Editor to add the optional `reverse_image_path` column. Existing records need
no changes. The count now uses “piece/pieces” to cover patches and coins.

Keep one active record per coin. Set `image_path` to the front object path and
`reverse_image_path` to the back object path, for example:

```text
image_path: patches/FLAMCoinFront.png
reverse_image_path: patches/FLAMCoinBack.png
```

The wall shows the front; the detail dialog offers Front / Back buttons only when
a reverse path is provided. Each opening starts on the front. Both sides share the
same metadata and story. If the back was previously entered as its own row, set
that separate row's `active` to `false` so the coin appears and counts once. No
image files need to be renamed, moved, or deleted.

For the FLAM entries imported from the filename list, run this after the migration:

```sql
begin;
update public.viewer_patches
set reverse_image_path = 'patches/FLAMCoinBack.png'
where image_path = 'patches/FLAMCoinFront.png';

update public.viewer_patches
set active = false
where image_path = 'patches/FLAMCoinBack.png'
  and exists (
    select 1 from public.viewer_patches
    where image_path = 'patches/FLAMCoinFront.png'
      and active = true
      and reverse_image_path = 'patches/FLAMCoinBack.png'
  );
commit;
```

Pair other coins the same way after confirming which files belong together.
Leave `reverse_image_path` null for single-sided pieces.

The detail image also has a Zoom in / Zoom out button. Zooming displays the image
at 2× within a scrollable area, centered initially. Touch scrolling and keyboard
scrolling work inside that area. Switching coin sides or reopening the dialog
resets zoom. No database change or library is needed for zoom.

1. Open Supabase Table Editor → `public.viewer_patches` and find the row by slug.
2. Update the desired fields and save. `updated_at` updates automatically.
3. For replacement artwork, upload a new meaningfully named file under `patches/`, then
   change `image_path` to that object path. A new path avoids serving a cached old image.
4. Refresh `/patch-wall` and open its details to verify the changes.

## Hiding a patch

1. Find the row in Supabase Table Editor.
2. Set `active = false` and save.
3. Refresh `/patch-wall`. It disappears and the active count decreases. Set `active = true` to restore it.

## Reordering patches

1. Find the rows in Supabase Table Editor.
2. Set ascending `sort_order` values, for example `10`, `20`, `30`. Save the changes.
3. Refresh the wall. Lower numbers come first. Null values follow manually ordered rows;
   creation time and ID provide a predictable fallback. Consecutive numbers are unnecessary.

## Verification

Verified locally against isolated HTTP metadata fixtures, with no fake production rows:

- Desktop (1440px): four columns, no horizontal overflow.
- Tablet (820px): three columns, no horizontal overflow.
- Mobile (390px): two columns, no horizontal overflow; detail dialog internally scrolls with a long story and retains a sticky visible close control.
- Keyboard: Enter opens a card; Close receives initial focus; Tab and Shift+Tab wrap within the dialog; Escape closes; focus returns to the triggering card. A minimal record with only the Close control also traps focus.
- Empty state: zero active records show `0 patches and counting.` and the getting-started message.
- Singular count: one record shows `1 patch and counting.`
- Query error: the actual configured Supabase connection returned a missing-table error; the public page returned HTTP 200 with a restrained fallback and no internal error or fake count.
- Minimal metadata: no empty labels, story, history, attribution, or episode sections.
- Long story: multiline content remains readable and scrollable on mobile.
- SEO: browser title is `The Patch Wall | Outside the Cockpit`.
- Query inspection: emitted request contains `active=eq.true`, `sort_order.asc.nullslast,created_at.asc,id.asc`, and the expected range limit.
- TypeScript and feature lint pass. Full repository lint has one pre-existing unused-variable warning in `src/lib/importAirports.ts` and no errors.
- Production build (`next build --webpack`) passes and identifies `/patch-wall` as a dynamic server-rendered route. Webpack was used after the local Turbopack development server encountered a compiler panic.

The fixtures used the existing OTC logo as an explicitly identified image stand-in.
Real patch artwork, live row ordering/hiding, and database policy enforcement require
the migration and actual records; they have not been verified against production.

## Remaining setup / TODOs

- **Apply the migration.** The configured Supabase project currently reports that `viewer_patches` is missing. No production database schema was modified by this implementation.
- **Supply actual records and images.** None were invented or uploaded. The first upload creates the R2 `patches/` prefix.
- **Verify live RLS after migration.** With the public key, confirm active rows can be selected, inactive rows are omitted, and INSERT/UPDATE/DELETE are denied.
- **Environment:** reuse `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`; they must exist in the deployment environment. No new variable or secret is required.
- **CTA:** complete; it uses `gofly@discoverotc.com` with a Patch Wall contribution subject. There is no missing destination or public submission system.
- **Deployment:** the changes are local and have not been published.
