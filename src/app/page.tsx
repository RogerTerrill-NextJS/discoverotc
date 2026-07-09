import Image from 'next/image';

import './globals.css';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-white text-slate-950'>
      <Hero />
      <About />
      <FeaturedDestinations />
      <LatestVideo />
      <WorkWithUs />
      <Socials />
      <Footer />
    </main>
  );
}

function About() {
  return (
    <section className='mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center'>
      <div className='relative aspect-4/3 overflow-hidden rounded-xl shadow-xl'>
        <Image
          src='https://cdn.discoverotc.com/images/WhoAreWe.jpg'
          alt='Roger and Irene with Hannah'
          fill
          className='object-cover'
        />
      </div>

      <div>
        <p className='mb-4 text-sm font-bold uppercase tracking-widest text-blue-600'>
          Meet Roger & Irene
        </p>

        <h2 className='text-4xl font-bold leading-tight md:text-5xl'>
          Hi, we’re Roger & Irene.
        </h2>

        <p className='mt-6 text-lg leading-relaxed text-slate-700'>
          We’re passionate about showing that some of America’s most
          unforgettable destinations aren’t reached by airline — they’re
          discovered through general aviation.
        </p>

        <p className='mt-4 text-lg leading-relaxed text-slate-700'>
          Every week we fly our Piper Arrow, Hannah, to explore hidden towns,
          incredible restaurants, aviation history, scenic coastlines, and
          unique experiences that inspire people to travel differently.
        </p>
      </div>
    </section>
  );
}

function FeaturedDestinations() {
  const destinations = [
    {
      title: 'Half Moon Bay',
      image: 'https://cdn.discoverotc.com/images/KHAF_Thumbnail.jpg',
      label: 'Explore',
      href: 'https://youtu.be/-kfx2zNsNe8',
    },
    {
      title: 'Hangar Hotel',
      image: 'https://cdn.discoverotc.com/images/T82_Thumbnail.png',
      label: 'Discover',
      href: 'https://youtu.be/_C1ViuvwYKk',
    },
    {
      title: 'San Jose',
      image: 'https://cdn.discoverotc.com/images/KSJC_Thumbnail.png',
      label: 'Experience',
      href: 'https://youtu.be/RfZT4NttshU',
    },
  ];

  return (
    <section className='bg-slate-50 px-6 py-24'>
      <div className='mx-auto max-w-6xl text-center'>
        <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>
          Featured Destinations
        </p>

        <h2 className='mt-3 text-4xl font-bold md:text-5xl'>
          Where Will You Go Next?
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {destinations.map((destination) => (
            <a
              key={destination.title}
              href={destination.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative block aspect-4/3 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
            >
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />

              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent' />

              <div className='absolute bottom-0 left-0 p-6 text-left text-white'>
                <p className='font-serif text-2xl italic'>
                  {destination.label}
                </p>

                <h3 className='mt-1 text-2xl font-bold uppercase'>
                  {destination.title}
                </h3>

                <div className='mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition-all duration-300 group-hover:gap-3 group-hover:text-white'>
                  Watch Adventure
                  <span
                    aria-hidden='true'
                    className='transition-transform duration-300 group-hover:translate-x-1'
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestVideo() {
  return (
    <section className='mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:items-center'>
      <div className='aspect-video overflow-hidden rounded-xl shadow-xl'>
        <iframe
          className='h-full w-full'
          src='https://www.youtube.com/embed/OsXaoUHg6v4'
          title='Outside the Cockpit latest adventure'
          allowFullScreen
        />
      </div>

      <div>
        <p className='mb-4 text-sm font-bold uppercase tracking-widest text-blue-600'>
          Latest Adventure
        </p>

        <h2 className='text-4xl font-bold leading-tight'>
          Weekend Getaway: Harris Ranch
        </h2>

        <p className='mt-5 text-lg leading-relaxed text-slate-700'>
          Join us as we fly to Harris Ranch for incredible food, beautiful
          views, and a weekend we won’t soon forget.
        </p>

        <a
          href='https://youtube.com'
          target='_blank'
          className='mt-8 inline-block rounded-md bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-blue-700'
        >
          Watch on YouTube
        </a>
      </div>
    </section>
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
              href='/media-kit.pdf'
              className='rounded-md bg-white px-6 py-4 text-sm font-bold uppercase tracking-wide text-blue-700 hover:bg-blue-50'
            >
              Download Media Kit
            </a>

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

      <div className='mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3'>
        <SocialLink
          title='YouTube'
          subtitle='New videos every Friday'
          href='https://youtube.com'
        />
        <SocialLink
          title='Instagram'
          subtitle='Behind the scenes & stories'
          href='https://instagram.com'
        />
        <SocialLink
          title='Patreon'
          subtitle='Updates, community & more'
          href='https://facebook.com'
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
          <p className='text-sm text-white/70'></p>
        </div>

        <div className='text-sm text-white/60'>
          © {new Date().getFullYear()} Outside The Cockpit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
