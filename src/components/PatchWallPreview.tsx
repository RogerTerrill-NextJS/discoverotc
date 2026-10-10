import Image from 'next/image';
import Link from 'next/link';
import { getAssetUrl } from '@/lib/assets';
import { getViewerPatches } from '@/lib/viewerPatches';

export default async function PatchWallPreview() {
  const { patches } = await getViewerPatches(4);

  return (
    <section aria-labelledby='patch-wall-preview-title' className='border-t border-slate-200 bg-slate-50 px-6 py-16 md:py-24'>
      <div className={`mx-auto max-w-6xl ${patches.length ? 'grid items-center gap-12 md:grid-cols-2' : ''}`}>
        <div>
          <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>Our community, on display</p>
          <h2 id='patch-wall-preview-title' className='mt-3 text-4xl font-bold md:text-5xl'>The Patch Wall</h2>
          <p className='mt-5 max-w-xl text-lg leading-relaxed text-slate-700'>
            Patches and challenge coins sent by the people who watch Outside the Cockpit. Every piece has a story.
          </p>
          <Link href='/patch-wall' className='mt-8 inline-flex items-center gap-3 rounded-md bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-blue-700'>
            Explore the Patch Wall <span aria-hidden='true'>→</span>
          </Link>
        </div>
        {patches.length > 0 && (
          <Link href='/patch-wall' aria-label='Explore the Patch Wall collection' className='grid grid-cols-2 gap-4 rounded-xl'>
            {patches.map((patch) => (
              <div key={patch.id} className='relative aspect-square rounded-xl bg-slate-100'>
                <Image src={getAssetUrl(patch.image_path)}
                  alt={patch.image_alt?.trim() || patch.name}
                  fill sizes='(min-width: 768px) 270px, 45vw'
                  className='object-contain p-5 drop-shadow-lg md:p-8' />
              </div>
            ))}
          </Link>
        )}
      </div>
    </section>
  );
}
