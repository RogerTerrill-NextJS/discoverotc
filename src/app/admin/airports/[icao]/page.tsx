import AirportEditor from '../AirportEditor';
import { getAirportByICAO } from '@/lib/data';

export default async function EditAirportPage({
  params,
}: {
  params: Promise<{ icao: string }>;
}) {
  const airport = getAirportByICAO((await params).icao.toUpperCase());

  if (!airport) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-gray-500 text-lg'>Airport not found</p>
      </div>
    );
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
        <AirportEditor initialData={airport} />
      </div>
    </div>
  );
}
