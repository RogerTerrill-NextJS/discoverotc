import React from 'react';

type YoutubeVideoProps = {
  videoId: string;
};

const YoutubeVideo = ({ videoId }: YoutubeVideoProps) => {
  return (
    <div className='w-full overflow-hidden rounded-xl shadow-sm border border-slate-200'>
      <div className='relative aspect-video'>
        <iframe
          className='absolute inset-0 w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='Airport Overview Video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;
