import Image from 'next/image';

export default function About() {
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
          Our Philosophy
        </p>

        <h2 className='text-4xl font-bold leading-tight md:text-5xl'>
          We don&#39;t just visit places, we experience them.
        </h2>

        <p className='mt-6 text-lg leading-relaxed text-slate-700'>
          Outside the Cockpit is a husband and wife team creating content that
          inspires pilots and travelers to explore incredible destinations. We
          believe in slow travel, hidden gems, local flavor and stories that go
          beyond the runway.
        </p>

        <p className='mt-4 text-lg leading-relaxed text-slate-700'>
          Our audience trusts our recommendations because we only share the
          places and products we genuinely love.
        </p>
      </div>
    </section>
  );
}
