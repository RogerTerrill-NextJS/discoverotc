import React from 'react';
import { Airport } from '@/data/types';

const Runways = ({ airport }: { airport: Airport }) => {
  return (
    <section className='bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
      <h3 className='text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2'>
        Runway Information
      </h3>
      <div className='grid gap-4 sm:grid-cols-1'>
        {airport.runways.map((rw) => (
          <div
            key={rw.id}
            className='flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100'
          >
            <div>
              <span className='block text-2xl font-bold text-slate-700 font-mono'>
                {rw.runway_id}
              </span>
              <span className='text-xs font-medium text-slate-400 uppercase'>
                {rw.surface}
              </span>
            </div>
            <div className='text-right'>
              <span className='block text-lg font-semibold text-slate-800'>
                {rw.length}&#39;
              </span>
              <span className='text-xs text-slate-500'>x {rw.width} &#39;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Runways;
