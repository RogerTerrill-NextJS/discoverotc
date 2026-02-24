import React from 'react';
import tzLookup from 'tz-lookup';
import { Airport } from '@/data/types';

const LocalTime = ({ airport }: { airport: Airport }) => {
  const timeZone = tzLookup(airport.latitude, airport.longitude);
  return (
    <section className='bg-blue-50 rounded-xl border border-blue-100 p-6'>
      <h4 className='text-blue-800 font-semibold mb-2'>Local Time</h4>
      <p className='text-3xl font-bold text-blue-900 font-mono'>
        {new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          timeZone,
        })}
      </p>
      <p className='text-blue-600 text-sm mt-1'>
        UTC {new Date().toISOString().slice(11, 16)}Z
      </p>
    </section>
  );
};

export default LocalTime;
