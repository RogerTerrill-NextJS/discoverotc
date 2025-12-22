'use client'
import React from 'react';
import {AIRPORTS} from "@/data/airports";

import {usePathname, useSearchParams, useRouter} from "next/navigation";

const Search = ({term}: { term?: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('term', term);
    } else {
      params.delete('term');
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <div
        className="flex flex-col sm:flex-row gap-4 shadow-sm bg-white p-2 rounded-2xl border border-slate-200">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search name, ICAO, or city..."
            className="block w-full pl-10 pr-3 py-3 border-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 rounded-xl"
            defaultValue={term}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/*<div className="relative min-w-[140px]">*/}
        {/*  <select*/}
        {/*    className="block w-full pl-3 pr-10 py-3 text-base border-l border-slate-100 focus:outline-none focus:ring-0 sm:text-sm rounded-xl text-slate-700 bg-transparent"*/}
        {/*    value={"selectedState"}*/}
        {/*    // onChange={(e) => handleSearch(e.target.value)}*/}
        {/*  >*/}
        {/*    <option value="ALL">All States</option>*/}
        {/*    {AIRPORTS.map(state => (*/}
        {/*      <option key={state.icao} value={state.icao}>{state.state}</option>*/}
        {/*    ))}*/}
        {/*  </select>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Search;