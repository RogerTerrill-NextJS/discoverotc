import Image from 'next/image';

import './globals.css';
import Hero from '@/components/Hero';
import AirportSearch from '@/components/AirportSearch';
import About from '@/components/About';
import FeaturedDestinations from '@/components/FeaturedDestination';
import LatestVideo from '@/components/LatestVideo';

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

function WorkWithUs() {
  return (
    <section id='work-with-us' className='bg-blue-700 px-6 py-24 text-white'>
      <div className='mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center'>
        <div>
          <p className='mb-4 text-sm font-bold uppercase tracking-widest text-blue-100'>
            Work With Us
          </p>

          <h2 className='text-2xl font-bold leading-tight md:text-3xl'>
            We&#39;re always open to new adventures and meaningful partnerships.
          </h2>

          <div className='mt-6 space-y-2'>
            <p className='text-lg leading-relaxed text-blue-50'>
              If you think we&#39;d be a great fit, we&#39;d love to hear from
              you.
            </p>

            <p className='text-lg leading-relaxed text-blue-100'>
              Tell us about your brand, destination, or project.
            </p>
          </div>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='mailto:gofly@discoverotc.com'
              className='rounded-md border border-white/70 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-blue-700'
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className='relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl'>
          <Image
            src='https://cdn.discoverotc.com/images/SunsetHannah4.jpg'
            alt='Outside the Cockpit airplane at sunset'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}

function Socials() {
  return (
    <section className='px-6 py-20 text-center'>
      <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>
        Follow the Adventure
      </p>

      <div className='mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-4'>
        <SocialLink
          title='YouTube'
          subtitle='New videos every Friday'
          href='https://www.youtube.com/@outsidethecockpit'
        />
        <SocialLink
          title='Instagram'
          subtitle='Updates, community & more'
          href='https://www.instagram.com/outsidethecockpit/'
        />
        <SocialLink
          title='Patreon'
          subtitle='Behind the scenes & more'
          href='https://www.patreon.com/c/OutsideTheCockpit'
        />
        <SocialLink
          title='Merch'
          subtitle='Go Fly, Go Discover'
          href='https://w503x1-14.myshopify.com/'
        />
      </div>
    </section>
  );
}

function SocialLink({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      className='rounded-xl border border-slate-200 p-8 transition hover:border-blue-600 hover:shadow-lg'
    >
      <h3 className='text-xl font-bold text-blue-600'>{title}</h3>
      <p className='mt-2 text-sm text-slate-600'>{subtitle}</p>
    </a>
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
