import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} AeroGuide. For flight simulation and demonstration purposes only.</p>
        <p className="mt-2">Not for real-world navigation.</p>
      </div>
    </footer>
  );
};

export default Footer;