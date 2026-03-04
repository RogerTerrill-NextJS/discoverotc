import React from 'react';
import Image from 'next/image';

export type AffiliateProduct = {
  id: number;
  image_url?: string;
  section: string;
  title: string;
  description: string;
  url: string;
  sort_order: number;
  active: boolean;
};

const AffiliateCard = ({ item }: { item: AffiliateProduct }) => {
  return (
    <div className='border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow transition bg-white'>
      {/* Image */}
      <div className='aspect-square bg-slate-100 flex items-center justify-center'>
        {item.image_url ? (
          <Image
            width={300}
            height={300}
            src={item.image_url}
            alt={item.title}
            className='w-full h-full object-cover'
          />
        ) : (
          <span className='text-slate-400 text-sm'>Image coming soon</span>
        )}
      </div>

      {/* Content */}
      <div className='p-4'>
        <a href={item.url}>
          <h3 className='text-base font-semibold text-slate-800'>
            {item.title}
          </h3>
        </a>

        <p className='text-sm text-slate-600 mt-1 whitespace-pre-line'>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AffiliateCard;
