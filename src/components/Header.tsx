import React from "react";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-3 shadow-sm">
            <Image
              src="/logo.png"
              width={20}
              height={20}
              alt="Outside The Cockpit Logo"
              className="w-5 h-5"
            />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            <span className="text-blue-600">Outside The Cockpit</span>
          </h1>
        </Link>
        {/* Right Side */}
        <div className="flex text-sm items-center font-medium text-slate-500">
          <div className="items-center hidden sm:block">
            <SocialMediaIcons social="youtube" />
            <SocialMediaIcons social="instagram" />
            <SocialMediaIcons social="email" />
          </div>
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
