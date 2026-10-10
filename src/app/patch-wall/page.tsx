import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import PatchGrid from '@/components/patch-wall/PatchGrid';
import { getAssetUrl } from '@/lib/assets';
import { getViewerPatches } from '@/lib/viewerPatches';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'The Patch Wall | Outside the Cockpit',
  description: 'Explore patches sent to Outside the Cockpit by viewers from military squadrons, aviation organizations, departments, agencies, and units around the country.',
};

export default async function PatchWallPage() {
  const { patches, failed } = await getViewerPatches();
  return (
    <div className='min-h-screen bg-white text-slate-950'>
      <header className='relative z-20 bg-slate-950 px-6 py-5 text-white'>
        <div className='mx-auto flex max-w-6xl items-center justify-between gap-6'>
          <Link href='/' aria-label='Outside the Cockpit home'><Image src={getAssetUrl('images/OTCLogoWhite.svg')} alt='Outside the Cockpit' width={64} height={64} /></Link>
          <Link href='/' className='hidden rounded-md text-sm font-semibold text-white/90 hover:text-white md:flex'>← Back to Home</Link>
          <MobileNavigation />
        </div>
      </header>
      <main>
        <section className='bg-slate-50 px-6 py-16 md:py-24'>
          <div className='mx-auto max-w-6xl'>
            <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>Our community, on display</p>
            <h1 className='mt-3 text-5xl font-bold tracking-tight md:text-7xl'>The Patch Wall</h1>
            <p className='mt-6 max-w-2xl text-xl leading-relaxed text-slate-700 md:text-2xl'>A collection built by the people who watch Outside the Cockpit.</p>
            {!failed && <p className='mt-6 text-sm font-bold uppercase tracking-wide text-blue-700'>{patches.length} {patches.length === 1 ? 'piece' : 'pieces'} and counting.</p>}
            <p className='mt-6 max-w-2xl leading-relaxed text-slate-600'>These patches were sent to us by viewers from squadrons, departments, units, agencies, and organizations they’ve been part of. Each one represents a story, a place, and a connection to the aviation community.</p>
          </div>
        </section>
        <section aria-label='Viewer patch collection' className='px-6 py-16 md:py-20'>
          <div className='mx-auto max-w-6xl'>
            {failed ? (
              <div role='status' className='rounded-xl bg-slate-50 px-6 py-16 text-center'>
                <h2 className='text-2xl font-bold'>The wall is temporarily unavailable.</h2>
                <p className='mt-3 text-slate-600'>Please check back soon to explore the collection.</p>
                <Link href='/patch-wall' className='mt-5 inline-block rounded-md font-semibold text-blue-700 underline underline-offset-4'>Try again</Link>
              </div>
            ) : patches.length ? <PatchGrid patches={patches} /> : (
              <div className='rounded-xl bg-slate-50 px-6 py-16 text-center'>
                <h2 className='text-2xl font-bold'>The wall is getting started.</h2>
                <p className='mt-3 text-slate-600'>Check back soon. Every patch adds a story.</p>
              </div>
            )}
          </div>
        </section>
        <section className='bg-blue-700 px-6 py-16 text-white md:py-20'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='text-3xl font-bold md:text-4xl'>Have a patch for the wall?</h2>
            <p className='mt-5 max-w-2xl text-lg leading-relaxed text-blue-50'>If you’ve served with a squadron, department, unit, agency, or organization and would like to add a patch to the OTC Patch Wall, we’d love to include it.</p>
            <a href='mailto:gofly@discoverotc.com?subject=Patch%20Wall%20Contribution' className='mt-8 inline-flex rounded-md border border-white/70 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-blue-700'>Send Us a Patch</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
