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
        1440: { slidesPerView: 3 },
      }}
      className="h-56 w-xs max-w-full overflow-hidden sm:h-64 md:w-xl lg:h-80 xl:w-3xl 2xl:w-5xl"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div
            key={i}
            className="relative h-full w-fit overflow-hidden transition duration-200 hover:scale-[1.03]"
          >
            <Image
              src={img}
              alt="Game Screenshot"
              width={720}
              height={720}
              className="aspect-auto h-full w-full rounded-xl"
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
