'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Gallery({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={20}
      loop
      navigation
      pagination={{ clickable: true, el: '.custom-pagination', type: 'fraction' }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="h-56 sm:h-64 lg:h-80"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div
            key={i}
            className="relative size-full overflow-hidden transition duration-200 hover:scale-[1.03]"
          >
            <Image
              src={img}
              alt="Game Screenshot"
              width={690}
              height={700}
              className="aspect-auto h-full w-full rounded-xl object-fill"
            />
          </div>
          {/* <div className="overflow-hidden rounded-xl border border-gray-800 bg-black">
            <Image alt={img} fill={true} src={img} className="h-60 w-full object-cover" />
            <p className="py-2 text-center text-sm text-gray-400">Screenshot {i + 1}</p>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
