import React from 'react';
import {Airport} from "@/data/types";

const Frequencies = ({airport}: { airport: Airport }) => {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Frequencies</h3>
      <ul className="space-y-3">
        {airport.frequencies.map((freq, idx) => (
          <li key={idx} className="flex items-center justify-between group">
                  <span
                    className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">{freq.type}</span>
            <span className="font-mono text-lg font-bold text-slate-800">{freq.mhz}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Frequencies;