import React from 'react';
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-3 shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            <span className="text-blue-600">Outside The Cockpit</span>
          </h1>
        </Link>
        <div className="text-sm font-medium text-slate-500 hidden sm:block">
          <SocialMediaIcons social="youtube"/>
          <SocialMediaIcons social="instagram"/>
          <SocialMediaIcons social="email"/>
        </div>
      </div>
    </header>
  );
};

export default Header;