import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-slate-200 mt-auto py-8'>
      <div className='max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm'>
        <p>&copy; {new Date().getFullYear()} Outside The Cockpit, LLC.</p>
        <p className='mt-2'>
          Always use official FAA publications for flight planning.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
