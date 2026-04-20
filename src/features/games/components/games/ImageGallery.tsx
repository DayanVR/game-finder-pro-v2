'use client';

import { Carousel } from 'flowbite-react';
import { normalizeImage } from '@/features/libs/normalizeImage';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageGallery({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState(1);
  const screenshotsList = images?.map((image) =>
    normalizeImage(image.replace('t_thumb', 't_1080p'))
  );
  return (
    <div className="space-y-4 py-4 lg:space-y-8 lg:py-8">
      <h2 className="bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary) bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl xl:text-6xl">
        CAPTURES
      </h2>
      <Carousel
        onSlideChange={(index) => setImageIndex(index + 1)}
        className="mx-auto h-56 w-11/12 sm:h-64 sm:w-8/12 md:w-8/12 lg:h-80 lg:w-8/12 xl:w-6/12 2xl:h-96 2xl:w-[800px]"
        slide={true}
        slideInterval={3000}
        indicators={false}
        pauseOnHover
      >
        {screenshotsList?.map((image, index) => (
          <div key={index} className="relative size-fit">
            <Image
              src={image ?? '/img-not-found.jpg'}
              alt="Game Screenshot"
              width={690}
              height={700}
              className="aspect-video object-contain px-1 md:px-2"
            />
          </div>
        ))}
      </Carousel>
      <div className="text-center">
        <span className="text-2xl font-semibold lg:text-3xl">
          {imageIndex} of {screenshotsList?.length}
        </span>
      </div>
    </div>
  );
}
