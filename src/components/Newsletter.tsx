'use client';
import React, { useState } from 'react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className='bg-slate-900 py-16 border-t border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='max-w-2xl mx-auto'>
          <h2 className='text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4'>
            Join the Outside The Cockpit Community
          </h2>
          <p className='text-lg text-slate-300 mb-8'>
            Get monthly updates on airport conditions, new charts, and general
            aviation news delivered straight to your inbox.
          </p>

          {status === 'success' ? (
            <div className='bg-green-500/10 border border-green-500/20 rounded-xl p-6 animate-in fade-in zoom-in-95 duration-300'>
              <div className='flex flex-col items-center justify-center'>
                <div className='bg-green-500 rounded-full p-2 mb-3 shadow-lg shadow-green-500/20'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-white'>
                  Thanks for subscribing!
                </h3>
                <p className='text-green-200 mt-2'>
                  Check your inbox for a welcome message.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className='mt-4 text-sm text-slate-400 hover:text-white underline decoration-slate-600 underline-offset-4'
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='flex flex-col sm:flex-row gap-3'
            >
              <div className='grow relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-slate-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <input
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  disabled={status === 'submitting'}
                  className='w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed'
                />
              </div>
              <button
                type='submit'
                disabled={status === 'submitting'}
                className='sm:shrink-0 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none min-w-35 flex items-center justify-center'
              >
                {status === 'submitting' ? (
                  <svg
                    className='animate-spin h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}
          <p className='mt-4 text-sm text-slate-500'>
            We care about your data. Read our{' '}
            <a href='#' className='text-slate-400 hover:text-white underline'>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
