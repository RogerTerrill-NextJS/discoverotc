'use client';

import { useState, type FormEvent } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || status === 'submitting') return;

    setStatus('submitting');

    try {
      const response = await fetch('/.netlify/functions/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id='newsletter'
      aria-labelledby='newsletter-title'
      className='border-b border-slate-200 bg-slate-50 px-6 py-16 text-slate-950 md:py-24'
    >
      <div className='mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12'>
        <div>
          <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>
            Stay in the Loop
          </p>
          <h2 id='newsletter-title' className='mt-3 text-4xl font-bold leading-tight md:text-5xl'>
            The Adventure Doesn&apos;t End Here!
          </h2>
          <p className='mt-5 max-w-xl text-lg leading-relaxed text-slate-700'>
            Join the Outside the Cockpit newsletter and stay connected with our
            latest adventures, upcoming destinations, and everything happening
            behind the scenes.
          </p>
          <p className='mt-5 max-w-xl text-lg leading-relaxed text-slate-700'>
            Be the first to hear about <strong>new merchandise drops, exclusive
            discount codes, upcoming trips, and special announcements.</strong>{' '}
            Plus, we&apos;ll share occasional updates and discoveries that don&apos;t
            always make it into our videos.
          </p>
          <p className='mt-5 max-w-xl text-lg leading-relaxed text-slate-700'>
            <strong>No spam. Just aviation, adventure, and a little something extra
            from us to you.</strong>
          </p>
        </div>

        <div className='min-w-0 rounded-xl border border-slate-200 bg-white p-6 md:p-8'>
          {status === 'success' ? (
            <div role='status' aria-live='polite'>
              <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>
                You’re on the List
              </p>
              <h3 className='mt-3 text-2xl font-bold'>Thanks for joining us.</h3>
              <p className='mt-3 leading-relaxed text-slate-600'>
                You’re signed up for the Outside the Cockpit newsletter. We’re glad
                to have you along for the adventure.
              </p>
              <button
                type='button'
                onClick={() => setStatus('idle')}
                className='mt-6 rounded-md text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800'
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
              <label htmlFor='newsletter-email' className='block text-sm font-semibold text-slate-950'>
                Email address
              </label>
              <input
                id='newsletter-email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='you@example.com'
                disabled={status === 'submitting'}
                aria-describedby={status === 'error' ? 'newsletter-note newsletter-error' : 'newsletter-note'}
                className='mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 disabled:cursor-wait disabled:opacity-60'
              />
              <button
                type='submit'
                disabled={status === 'submitting'}
                className='mt-4 inline-flex w-full items-center justify-center gap-3 rounded-md bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-70'
              >
                {status === 'submitting' ? 'Subscribing…' : 'Join the Adventure'}
                {status !== 'submitting' && <span aria-hidden='true'>→</span>}
              </button>
              {status === 'error' && (
                <p id='newsletter-error' role='alert' className='mt-4 text-sm leading-relaxed text-red-700'>
                  We couldn’t complete your signup. Please try again in a moment.
                </p>
              )}
              <p id='newsletter-note' className='mt-4 text-sm leading-relaxed text-slate-500'>
                By subscribing, you agree to receive the Outside the Cockpit
                newsletter. You can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
