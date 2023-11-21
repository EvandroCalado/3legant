'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/globals.css';

export default function Slider() {
  return (
    <section className="container mx-auto px-4">
      <Swiper
        className="slideWrapper"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay
        loop
        pagination={{ clickable: true }}
        spaceBetween={20}
      >
        <SwiperSlide>
          <div className="relative h-[300px] w-full md:h-[400px] lg:h-[536px]">
            <Image
              src={'/image-placeholder.png'}
              alt="Slider"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[300px] w-full md:h-[400px] lg:h-[536px]">
            <Image
              src={'/image-placeholder.png'}
              alt="Slider"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[300px] w-full md:h-[400px] lg:h-[536px]">
            <Image
              src={'/image-placeholder.png'}
              alt="Slider"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
