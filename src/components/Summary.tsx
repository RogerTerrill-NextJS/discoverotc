import React from 'react';
import {BoltIcon} from '@heroicons/react/24/outline';
import {Airport} from "@/data/types";

const Summary = async ({airport}: { airport: Airport }) => {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-3">
          <BoltIcon className="w-6 h-6"/>
        </div>
        <h3 className="text-xl font-semibold text-slate-800">Summary</h3>
      </div>


      {airport?.description?.summary && (
        <div className="prose prose-slate text-slate-600 max-w-none leading-relaxed whitespace-pre-line">
          {airport?.description?.summary}
        </div>
      )}
    </section>
  );
};

export default Summary;