'use client'
import React from 'react';
import DiagramModal from "@/components/DiagramModal";
import {Airport} from "@/data/types";
import {MapIcon} from "@heroicons/react/24/outline";

const DiagramButton = ({airport}: { airport: Airport }) => {
  const [isDiagramOpen, setIsDiagramOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setIsDiagramOpen(true)}
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-lg"
      >
        <MapIcon className="w-5 h-5 mr-2 -ml-1"/>
        View Diagram
      </button>

      <DiagramModal airport={airport} isOpen={isDiagramOpen} onClose={() => setIsDiagramOpen(false)}/>
    </>
  );
};

export default DiagramButton;