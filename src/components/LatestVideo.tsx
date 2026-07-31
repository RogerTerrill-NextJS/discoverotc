export default function LatestVideo() {
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
          href='https://www.youtube.com/watch?v=OsXaoUHg6v4'
          target='_blank'
          className='mt-8 inline-block rounded-md bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-blue-700'
        >
          Watch on YouTube
        </a>
      </div>
    </section>
  );
}
