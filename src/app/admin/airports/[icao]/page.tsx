import { createSupabaseServerClient } from '@/lib/supabaseServer';
import AirportEditor from '../../../../components/AirportEditor';

export default async function EditAirportPage({
  params,
}: {
  params: Promise<{ icao: string }>;
}) {
  const supabase = await createSupabaseServerClient();

  const { data: airport, error } = await supabase
    .from('airports')
    .select('*')
    .eq('icao', (await params).icao.toUpperCase())
    .single();

  if (error || !airport) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-gray-500 text-lg'>Airport not found</p>
      </div>
    );
  }

  // ✅ Fetch runways
  const { data: runways, error: runwayError } = await supabase
    .from('runways')
    .select('*')
    .eq('airport_id', airport.id)
    .order('id');

  if (runwayError) {
    console.error('Error fetching runways:', runwayError);
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4 text-blue-600'>
        Edit Airport: {airport.icao}
      </h1>

      <p className='text-gray-600 mb-6'>
        Update the airport details below. Changes will be saved instantly.
      </p>

      <div className='bg-white shadow-md rounded-lg p-6'>
        <AirportEditor initialData={airport} initialRunways={runways ?? []} />
      </div>
    </div>
  );
}
