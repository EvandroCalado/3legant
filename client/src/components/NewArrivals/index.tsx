'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/globals.css';
import { ProductType } from '../../types/products-types';

export type ProductsCardProps = {
  products: ProductType[];
};

export default function NewArrivals({ products }: ProductsCardProps) {
  return (
    <section className="container mx-auto my-8 px-4">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Novidades</h2>

        <Link
          href={'/shop'}
          className="hidden w-[123px] items-center border-b border-primary text-sm text-primary sm:flex [&>img]:ml-1 [&>img]:hover:ml-2"
        >
          Mais Produtos{' '}
          <Image
            src={'/icons/arrow-black.svg'}
            alt="Arrow"
            width={24}
            height={24}
            className="h-4 w-4 text-primary duration-150"
          />
        </Link>
      </div>

      <Swiper
        className="slideWrapper"
        modules={[Navigation, Pagination]}
        navigation
        loop
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="my-16 text-primary" />
    </section>
  );
}
