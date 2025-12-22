'use client'
import React, {useState} from 'react';
import {Modal} from "@/components/Modal";
import {Airport} from "@/data/types";

interface ModalProps {
  airport: Airport;
}

const DiagramModal = ({airport}: ModalProps) => {
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  return (
    <Modal
      isOpen={isDiagramOpen}
      onClose={() => setIsDiagramOpen(false)}
      title={`Airport Diagram - ${airport.icao}`}
    >
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        {/* Mocking a diagram by fetching a different grayscale technical looking image */}
        <img
          src={`https://picsum.photos/seed/${airport.icao}diagram/800/800?grayscale`}
          alt="Airport Diagram Mock"
          className="max-w-full h-auto border border-slate-300 shadow-sm"
        />
        <p className="mt-4 text-sm text-slate-500 text-center">
          * This is a simulated diagram for demonstration purposes.<br/>
          In a production app, this would be a real FAA/Jeppesen SVG chart.
        </p>
      </div>
    </Modal>
  );
};

export default DiagramModal;