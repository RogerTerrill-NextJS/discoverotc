import React from 'react';
import {Airport} from "@/data/types";
import {CalendarIcon} from "@heroicons/react/24/outline";

const DisplayDay = async ({airport}: { airport: Airport }) => {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 bg-green-500 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Display Day: <span className="font-light">{airport.displayDay}</span>
          </h3>
          <CalendarIcon className="w-5 h-5 text-blue-100"/>
        </div>
      </div>
    </section>
  );
};

export default DisplayDay;