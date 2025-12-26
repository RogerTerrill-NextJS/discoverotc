import React from "react";
import { Airport } from "@/data/types";

const PreviousVideos = ({ airport }: { airport: Airport }) => {
  const links = airport?.youtube?.slice(1);
  if (!links) return null;

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">
        Previous Videos
      </h3>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <span className="text-md font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
              {link.date}:
            </span>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PreviousVideos;
