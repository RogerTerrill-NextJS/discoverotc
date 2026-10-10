import './globals.css';
import Hero from '@/components/Hero';
import AirportSearch from '@/components/AirportSearch';
import About from '@/components/About';
import FeaturedDestinations from '@/components/FeaturedDestination';
import LatestVideo from '@/components/LatestVideo';
import WorkWithUs from '@/components/WorkWithUs';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';
import PatchWallPreview from '@/components/PatchWallPreview';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-white text-slate-950'>
      <Hero />
      <About />
      <FeaturedDestinations />
      <LatestVideo />
      <Suspense fallback={null}>
        <PatchWallPreview />
      </Suspense>
      <AirportSearch />
      <WorkWithUs />
      <Socials />
      <Footer />
    </main>
  );
}
