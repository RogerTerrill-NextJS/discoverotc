import React from "react";
import { Airport } from "@/data/types";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

const VideoButton = ({ airport }: { airport: Airport }) => {
  if (!airport?.description?.youtube) return null;

  return (
    <>
      <a
        href={airport.description.youtube[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-700 hover:bg-rose-400 transition-colors shadow-lg"
      >
        <VideoCameraIcon className="w-5 h-5 mr-2 -ml-1" />
        Recent Video
      </a>
    </>
  );
};

export default VideoButton;
