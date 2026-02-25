import React from 'react';

type DisclaimerVariant = 'compact' | 'standard' | 'full';

interface DisclaimerProps {
  variant?: DisclaimerVariant;
  className?: string;
}

const baseStyles =
  'rounded-lg border text-slate-600 bg-slate-50 border-slate-200';

const variantStyles: Record<DisclaimerVariant, string> = {
  compact: 'text-sm p-3',
  standard: 'text-sm p-4',
  full: 'text-base p-6 space-y-4',
};

export const Disclaimer: React.FC<DisclaimerProps> = ({
  variant = 'compact',
  className = '',
}) => {
  return (
    <section
      role='note'
      aria-label='Aviation Disclaimer'
      className={`${baseStyles} ${variantStyles[variant]} ${className} mt-8`}
    >
      {variant === 'compact' && (
        <p className='text-center'>
          This content is for informational and entertainment purposes only and
          is not flight instruction. Always verify current charts, NOTAMs, and
          procedures before flying.
        </p>
      )}

      {variant === 'standard' && (
        <p className='text-center'>
          Outside the Cockpit shares how we experienced this airport or route on
          the day we flew it. This is not flight instruction. Always consult
          current charts, NOTAMs, and a certified flight instructor before
          attempting any procedures shown.
        </p>
      )}

      {variant === 'full' && (
        <>
          <h2 className='font-semibold text-slate-800 text-center'>
            Aviation Disclaimer
          </h2>

          <p>
            Outside the Cockpit provides aviation content for informational and
            entertainment purposes only. The material presented in our videos,
            website, and related content is not flight instruction.
          </p>

          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Procedures, routes, and radio communications may change at any
              time.
            </li>
            <li>
              Always consult current charts, NOTAMs, and official FAA
              publications.
            </li>
            <li>
              Seek guidance from a certified flight instructor before attempting
              unfamiliar airspace, transitions, or procedures.
            </li>
            <li>
              You assume full responsibility for your own flight planning and
              operational decisions.
            </li>
          </ul>

          <p>
            By using this website, you acknowledge and agree to these terms.
          </p>
        </>
      )}
    </section>
  );
};
