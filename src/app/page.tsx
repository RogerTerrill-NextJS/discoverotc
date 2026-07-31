import Image from 'next/image';

import './globals.css';
import Hero from '@/components/Hero';
import AirportSearch from '@/components/AirportSearch';
import About from '@/components/About';
import FeaturedDestinations from '@/components/FeaturedDestination';
import LatestVideo from '@/components/LatestVideo';
import WorkWithUs from '@/components/WorkWithUs';
import Socials from '@/components/Socials';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-white text-slate-950'>
      <Hero />
      <About />
      <FeaturedDestinations />
      <LatestVideo />
      <AirportSearch />
      <WorkWithUs />
      <Socials />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className='bg-slate-950 px-6 py-10 text-white'>
      <div className='mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://cdn.discoverotc.com/images/NewLogo.png'
            alt='Outside the Cockpit'
            width={64}
            height={64}
          />

          <div>
            <p className='font-semibold'>Outside the Cockpit</p>

            <a
              href='mailto:gofly@discoverotc.com?subject=Partnership Inquiry'
              className='text-sm text-white/70 transition-colors hover:text-white'
            >
              gofly@discoverotc.com
            </a>
          </div>
        </div>

        <div className='text-sm text-white/60'>
          © {new Date().getFullYear()} Outside The Cockpit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
