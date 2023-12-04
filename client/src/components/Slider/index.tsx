'use client';

import Image from 'next/image';
import { SlidesType } from '../../types/slides-types';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/globals.css';

export type SliderProps = {
  slides: SlidesType[];
};

export default function Slider({ slides }: SliderProps) {
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
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[536px]">
              <Image
                src={slide.attributes.image.data.attributes.url}
                alt={slide.attributes.title}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
