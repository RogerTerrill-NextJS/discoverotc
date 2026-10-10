'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'The Patch Wall', href: '/patch-wall' },
  { label: 'Work With Us', href: '/#work-with-us' },
  { label: 'YouTube', href: 'https://www.youtube.com/@outsidethecockpit' },
  { label: 'Instagram', href: 'https://www.instagram.com/outsidethecockpit/' },
  { label: 'Patreon', href: 'https://www.patreon.com/c/OutsideTheCockpit' },
  { label: 'Store', href: 'https://shop.discoverotc.com/' },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const container = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOutside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    const desktop = window.matchMedia('(min-width: 768px)');
    function closeOnDesktop() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <div ref={container} className='relative md:hidden'
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}>
      <button ref={toggle} type='button' aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(!open)}
        className='flex h-12 w-12 items-center justify-center rounded-md border border-white/40 bg-slate-950/50 text-white hover:bg-slate-800'>
        <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' className='h-6 w-6'>
          {open ? <path d='M6 6l12 12M6 18L18 6' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
        </svg>
      </button>

      <nav id={menuId} aria-label='Mobile navigation' hidden={!open}
        className='absolute right-0 top-full mt-3 max-h-[calc(100dvh-8rem)] w-[min(18rem,calc(100vw-3rem))] overflow-y-auto rounded-xl border border-white/15 bg-slate-950 p-2 text-white shadow-2xl'>
        {links.map(({ label, href }) => {
          const external = href.startsWith('https://');
          return (
            <Link key={label} href={href} target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className='block rounded-md px-4 py-3 text-sm font-semibold hover:bg-slate-800'>
              {label}{external && <span className='sr-only'> (opens in a new tab)</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
