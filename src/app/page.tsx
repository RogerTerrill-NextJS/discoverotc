import './globals.css';
import Hero from '@/components/Hero';
import AirportSearch from '@/components/AirportSearch';
import About from '@/components/About';
import FeaturedDestinations from '@/components/FeaturedDestination';
import LatestVideo from '@/components/LatestVideo';
import WorkWithUs from '@/components/WorkWithUs';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';

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
