import SocialLink from '@/components/SocialLinks';

export default function Socials() {
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
