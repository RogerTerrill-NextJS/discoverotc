import { createSupabaseReadonlyClient } from '@/lib/supabaseReadOnly';

export async function getAllAirports() {
  const supabase = await createSupabaseReadonlyClient();

  const { data, error } = await supabase.from('airports').select('*');

  if (error) {
    console.error('Error fetching airports:', error);
    return [];
  }

  return data;
}

export async function getFilteredAirports(search: string) {
  const supabase = await createSupabaseReadonlyClient();

  let query = supabase
    .from('airports')
    .select('*')
    .eq('active', true) // Filter: Only rows where active is true
    .order('name', { ascending: true }); // Sort: Alphabetical by airport name

  if (search) {
    const s = search.toLowerCase().trim().replace(/,/g, '');
    query = query.or(
      `name.ilike.%${s}%,city.ilike.%${s}%,icao.ilike.%${s}%,state.ilike.%${s}%`,
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching filtered airports:', error);
    return [];
  }

  return data;
}
