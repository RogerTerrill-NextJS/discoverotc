import React from "react";
import { Airport } from "@/data/types";

const PreviousVideos = ({ airport }: { airport: Airport }) => {
  const links = airport?.youtube?.slice(1);
  if (links?.length === 0) return null;

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">
        Previous Videos
      </h3>
      <ul className="space-y-3">
        {links?.map((link, idx) => (
          <li key={idx}>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 group">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                {link.date}
              </span>

              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {link.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PreviousVideos;
