import AirportEditor from '../AirportEditor';

export default function NewAirportPage() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4 text-green-600'>
        Add New Airport
      </h1>
      <p className='text-gray-600 mb-6'>
        Fill out the details below to create a new airport.
      </p>

      <div className='bg-white shadow-md rounded-lg p-6'>
        <AirportEditor />
      </div>
    </div>
  );
}
