import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative min-h-screen overflow-hidden'>
      <Image
        src='https://cdn.discoverotc.com/images/HeroImage_02.png'
        alt='Outside the Cockpit airplane adventure'
        fill
        priority
        className='object-cover'
      />

      <div className='absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20' />

      <header className='absolute top-0 z-20 flex w-full items-center justify-between px-6 py-6 md:px-12'>
        <Image
          src='https://cdn.discoverotc.com/images/NewLogo.png'
          alt='Outside the Cockpit'
          width={110}
          height={110}
          className='h-20 w-20 md:h-28 md:w-28'
        />

        <nav className='hidden items-center gap-8 text-sm font-semibold text-white md:flex'>
          <Link href='#home'>Home</Link>
          <Link href='#work-with-us'>Work With Us</Link>
          <a href='https://www.youtube.com/@outsidethecockpit' target='_blank'>
            YouTube
          </a>
          <a
            href='https://www.instagram.com/outsidethecockpit/'
            target='_blank'
          >
            Instagram
          </a>
          <a href='https://www.patreon.com/c/OutsideTheCockpit' target='_blank'>
            Patreon
          </a>
          <a href='https://w503x1-14.myshopify.com/' target='_blank'>
            Merch
          </a>
        </nav>
      </header>

      <div className='relative z-10 flex min-h-screen items-center px-6 md:px-12'>
        <div className='max-w-3xl pt-28 text-white'>
          <h1 className='text-5xl font-bold leading-tight md:text-7xl'>
            Go Fly <br /> Go Discover
          </h1>

          <p className='mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-2xl'>
            Discover remarkable destinations through the freedom of general
            aviation.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='https://www.youtube.com/@outsidethecockpit'
              target='_blank'
              className='rounded-md bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-700'
            >
              Watch on YouTube
            </a>

            <a
              href='#work-with-us'
              className='rounded-md border border-white/70 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-950'
            >
              Work With Us
            </a>
          </div>

          <p className='mt-10 text-sm font-semibold text-white/80'>
            ✈ New adventures every Friday.
          </p>
        </div>
      </div>
    </section>
  );
}
