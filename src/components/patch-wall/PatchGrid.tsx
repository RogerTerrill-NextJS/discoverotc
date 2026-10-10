'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getAssetUrl } from '@/lib/assets';
import type { ViewerPatch } from '@/types/viewerPatch';

function PatchImage({ patch, large = false, reverse = false, zoomed = false }: { patch: ViewerPatch; large?: boolean; reverse?: boolean; zoomed?: boolean }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className='flex h-full items-center justify-center px-4 text-center text-sm text-slate-500'>
      Patch image unavailable
    </span>
  ) : (
    <Image
      src={getAssetUrl(reverse ? patch.reverse_image_path! : patch.image_path)}
      alt={`${patch.image_alt?.trim() || patch.name}${patch.reverse_image_path ? (reverse ? ' — back' : ' — front') : ''}`}
      fill
      sizes={large ? (zoomed ? '(min-width: 768px) 800px, 170vw' : '(min-width: 768px) 400px, 85vw') : '(min-width: 1024px) 270px, (min-width: 768px) 30vw, 45vw'}
      className='object-contain p-5 drop-shadow-lg md:p-8'
      onError={() => setFailed(true)}
    />
  );
}

function PatchDetailImages({ patch }: { patch: ViewerPatch }) {
  const [reverse, setReverse] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const imageViewport = useRef<HTMLDivElement>(null);
  const hasReverse = Boolean(patch.reverse_image_path?.trim());

  useEffect(() => {
    const viewport = imageViewport.current;
    if (!viewport) return;
    viewport.scrollLeft = zoomed ? (viewport.scrollWidth - viewport.clientWidth) / 2 : 0;
    viewport.scrollTop = zoomed ? (viewport.scrollHeight - viewport.clientHeight) / 2 : 0;
  }, [zoomed, reverse]);

  return (
    <div className='min-w-0'>
      <div ref={imageViewport} role='region' aria-label={zoomed ? 'Zoomed image — scroll to explore' : 'Piece image'}
        tabIndex={zoomed ? 0 : -1}
        className='aspect-square overflow-auto rounded-xl bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
        <div className='relative aspect-square' style={{ width: zoomed ? '200%' : '100%' }}>
          <PatchImage key={reverse ? patch.reverse_image_path : patch.image_path} patch={patch} large reverse={reverse} zoomed={zoomed} />
        </div>
      </div>
      <div className='mt-4 flex flex-wrap items-center justify-center gap-3'>
        <button type='button' aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}
          className='rounded-md bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200'>
          {zoomed ? 'Zoom out' : 'Zoom in'}
        </button>
        {zoomed && <p className='text-sm text-slate-600'>2× · Scroll to explore</p>}
      </div>
      {hasReverse && (
        <div role='group' aria-label='Image side' className='mt-4 flex justify-center gap-2'>
          {(['Front', 'Back'] as const).map((side) => {
            const isBack = side === 'Back';
            return (
              <button key={side} type='button' aria-pressed={reverse === isBack}
                onClick={() => { setReverse(isBack); setZoomed(false); }}
                className={`rounded-md px-5 py-3 text-sm font-semibold ${reverse === isBack ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                {side}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function episodeUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function CopyPatchLink() {
  const [message, setMessage] = useState('');

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setMessage('Link copied');
    } catch {
      setMessage('Copy the link from your address bar.');
    }
  }

  return (
    <div className='flex flex-wrap items-center gap-3'>
      <button type='button' onClick={copyLink} className='rounded-md px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-slate-100'>Copy Link</button>
      <span role='status' className='text-xs text-slate-600'>{message}</span>
    </div>
  );
}

export default function PatchGrid({ patches }: { patches: ViewerPatch[] }) {
  const searchParams = useSearchParams();
  const selected = patches.find((patch) => patch.slug === searchParams.get('patch')) ?? null;
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  function updatePatchUrl(slug: string | null) {
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set('patch', slug);
      window.history.pushState(null, '', url);
    } else {
      url.searchParams.delete('patch');
      window.history.replaceState(null, '', url);
    }
  }

  useEffect(() => {
    if (!dialog.current) return;
    const element = dialog.current;
    if (!selected) {
      if (element.open) {
        element.close();
        opener.current?.focus();
      }
      return;
    }
    opener.current ??= document.getElementById(`patch-${selected.id}`) as HTMLButtonElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!element.open) element.showModal();
    element.scrollTop = 0;
    element.querySelector<HTMLButtonElement>('[aria-label="Close patch details"]')?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const video = episodeUrl(selected?.video_url ?? null);

  return (
    <>
      <div className='grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4'>
        {patches.map((patch) => (
          <button
            key={patch.id}
            id={`patch-${patch.id}`}
            type='button'
            aria-haspopup='dialog'
            aria-label={`View story for ${patch.name}`}
            onClick={(event) => { opener.current = event.currentTarget; updatePatchUrl(patch.slug); }}
            className='group min-w-0 rounded-xl text-left'
          >
            <div className='relative aspect-square rounded-xl bg-slate-100 motion-safe:transition motion-safe:duration-300 motion-safe:group-hover:-translate-y-1 group-hover:bg-slate-200/70'>
              <PatchImage patch={patch} />
            </div>
            <h3 className='mt-4 break-words text-base font-bold text-slate-950'>{patch.name}</h3>
            {(patch.organization?.trim() || patch.location?.trim()) && (
              <p className='mt-1 break-words text-sm text-slate-600'>{patch.organization?.trim() || patch.location}</p>
            )}
            <span className='mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-blue-700'>View Story <span aria-hidden='true'>↗</span></span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-labelledby='patch-detail-title'
        onCancel={(event) => { event.preventDefault(); updatePatchUrl(null); }}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        className='fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-xl bg-white p-0 text-slate-950 shadow-2xl backdrop:bg-slate-950/75'
      >
        {selected && (
          <>
            <div className='sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-5 py-3'>
              <CopyPatchLink key={selected.slug} />
              <button type='button' onClick={() => updatePatchUrl(null)} className='rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100' aria-label='Close patch details'>Close <span aria-hidden='true'>×</span></button>
            </div>
            <div className='grid gap-8 p-6 md:grid-cols-2 md:p-8'>
              <PatchDetailImages key={selected.id} patch={selected} />
              <div className='min-w-0 break-words'>
                {selected.category?.trim() && <p className='text-sm font-bold uppercase tracking-widest text-blue-700'>{selected.category}</p>}
                <h2 id='patch-detail-title' className='mt-2 text-3xl font-bold'>{selected.name}</h2>
                {selected.organization?.trim() && <p className='mt-3 text-lg text-slate-700'>{selected.organization}</p>}
                {selected.location?.trim() && <p className='mt-2 text-sm text-slate-600'>{selected.location}</p>}
                {selected.submitted_by?.trim() && <p className='mt-4 text-sm text-slate-600'>Sent by <span className='font-semibold text-slate-950'>{selected.submitted_by}</span></p>}
                {selected.story?.trim() && (
                  <section className='mt-6 border-l-2 border-blue-600 pl-5'>
                    <h3 className='text-sm font-bold uppercase tracking-wide text-blue-700'>The viewer’s story</h3>
                    <p className='mt-3 whitespace-pre-wrap text-lg leading-relaxed'>{selected.story}</p>
                  </section>
                )}
                {selected.history?.trim() && (
                  <section className='mt-6'>
                    <h3 className='font-bold'>History &amp; context</h3>
                    <p className='mt-2 whitespace-pre-wrap leading-relaxed text-slate-600'>{selected.history}</p>
                  </section>
                )}
                {video && (
                  <section className='mt-6 border-t border-slate-200 pt-6'>
                    <h3 className='font-bold'>Seen in an OTC episode</h3>
                    <a href={video} target='_blank' rel='noopener noreferrer' className='mt-3 inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-blue-700'>Watch the Episode <span className='sr-only'>(opens in a new tab)</span></a>
                  </section>
                )}
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
