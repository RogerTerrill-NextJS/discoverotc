import Image from 'next/image';

export default function WorkWithUs() {
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
