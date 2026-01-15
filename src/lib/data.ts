import { createSupabaseServerClient } from './supabaseServer';

export async function getAllAirports() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.from('airports').select('*');

  if (error) {
    console.error('Error fetching airports:', error);
    return [];
  }

  return data;
}

export async function getFilteredAirports(search: string) {
  const supabase = await createSupabaseServerClient();

  let query = supabase.from('airports').select('*');

  if (search) {
    const s = search.toLowerCase();
    query = query.or(`name.ilike.%${s}%,city.ilike.%${s}%,icao.ilike.%${s}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching filtered airports:', error);
    return [];
  }

  return data;
}
