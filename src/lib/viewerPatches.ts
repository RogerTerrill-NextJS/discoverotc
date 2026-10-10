import 'server-only';
import { createSupabaseReadonlyClient } from '@/lib/supabaseReadOnly';
import type { ViewerPatch } from '@/types/viewerPatch';

export async function getViewerPatches(limit?: number): Promise<
  { patches: ViewerPatch[]; failed: false } | { patches: []; failed: true }
> {
  try {
    const supabase = createSupabaseReadonlyClient();
    const patches: ViewerPatch[] = [];
    // Stay below Supabase's default row cap as the collection grows.
    const pageSize = 500;
    for (let offset = 0; ; offset += pageSize) {
      const { data, error } = await supabase
        .from('viewer_patches')
        .select('*')
        .eq('active', true)
        .order('sort_order', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: true })
        .order('id', { ascending: true })
        .range(offset, limit === undefined ? offset + pageSize - 1 : Math.min(offset + pageSize - 1, limit - 1))
        .abortSignal(AbortSignal.timeout(10_000));
      if (error) {
        console.error('Unable to load viewer patches:', error);
        return { patches: [], failed: true };
      }
      patches.push(...(data as ViewerPatch[]));
      if (data.length < pageSize || (limit !== undefined && patches.length >= limit)) break;
    }
    return { patches, failed: false };
  } catch (error) {
    console.error('Unable to load viewer patches:', error);
    return { patches: [], failed: true };
  }
}
