import React from 'react';
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      href={'/'}
      className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-6 transition-colors"
    >
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      Back to Directory
    </Link>
  );
};

export default HomeButton;