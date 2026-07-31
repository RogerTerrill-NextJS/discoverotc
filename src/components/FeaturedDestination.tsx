import Image from 'next/image';

export default function FeaturedDestinations() {
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
