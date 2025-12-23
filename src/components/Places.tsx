import React from 'react';
import {MapPinIcon} from "@heroicons/react/24/outline";

const Places = () => {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-3">
          <MapPinIcon className="w-6 h-6"/>
        </div>
        <h3 className="text-xl font-semibold text-slate-800">Nearby Attractions</h3>
      </div>

      {/*{places.loading ? (*/}
      {/*  <div className="animate-pulse space-y-3">*/}
      {/*    <div className="h-4 bg-slate-100 rounded w-full"></div>*/}
      {/*    <div className="h-4 bg-slate-100 rounded w-2/3"></div>*/}
      {/*  </div>*/}
      {/*) : places.data ? (*/}
      {/*  <div className="space-y-4">*/}
      {/*    <div className="prose prose-slate text-slate-600 max-w-none leading-relaxed whitespace-pre-line">*/}
      {/*      {places.data.text}*/}
      {/*    </div>*/}

      {/*    /!* Grounding Chips *!/*/}
      {/*    {places.data.chunks.length > 0 && (*/}
      {/*      <div className="mt-4">*/}
      {/*        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sources & Map*/}
      {/*          Links</h4>*/}
      {/*        <div className="flex flex-wrap gap-2">*/}
      {/*          {places.data.chunks.map((chunk, idx) => {*/}
      {/*            // Handle Web Links*/}
      {/*            if (chunk.web?.uri) {*/}
      {/*              return (*/}
      {/*                <a key={`web-${idx}`} href={chunk.web.uri} target="_blank" rel="noopener noreferrer"*/}
      {/*                   className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200">*/}
      {/*                  <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
      {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
      {/*                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>*/}
      {/*                  </svg>*/}
      {/*                  {chunk.web.title}*/}
      {/*                </a>*/}
      {/*              );*/}
      {/*            }*/}
      {/*            // Handle Google Maps Links*/}
      {/*            if (chunk.maps?.uri) {*/}
      {/*              return (*/}
      {/*                <a key={`map-${idx}`} href={chunk.maps.uri} target="_blank" rel="noopener noreferrer"*/}
      {/*                   className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 transition-colors border border-green-200">*/}
      {/*                  <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
      {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
      {/*                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>*/}
      {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
      {/*                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>*/}
      {/*                  </svg>*/}
      {/*                  {chunk.maps.title || 'View on Map'}*/}
      {/*                </a>*/}
      {/*              );*/}
      {/*            }*/}
      {/*            return null;*/}
      {/*          })}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <p className="text-slate-400 italic">No nearby place information available.</p>*/}
      {/*)}*/}
    </section>
  );
};

export default Places;