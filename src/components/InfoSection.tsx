import { Airport, DescriptionType } from '@/data/types';
import IconComponent from '@/components/Icon';
import { toCamelCase } from '@/lib/utils';

type InfoSectionProps = {
  title: string;
  airport: Airport;
  accentClass?: string;
};

function linkify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline hover:text-blue-800'
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

export default function InfoSection({ title, airport }: InfoSectionProps) {
  const type = toCamelCase(title) as DescriptionType;

  if (!airport?.[type]) return null;

  return (
    <section className='bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
      <div className='flex items-center mb-4'>
        <IconComponent type={type} />
        <h3 className='text-xl font-semibold text-slate-800'>{title}</h3>
      </div>

      <div className='prose prose-slate text-slate-600 max-w-none leading-relaxed whitespace-pre-line'>
        {linkify(airport?.[type])}
      </div>
    </section>
  );
}
