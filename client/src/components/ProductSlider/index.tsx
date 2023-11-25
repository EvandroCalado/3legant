'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/product-slider.css';

export type ProductsCardProps = {
  images: string[];
};

export default function ProductSlider({ images }: ProductsCardProps) {
  return (
    <Carousel showArrows={true} showStatus={false} showIndicators={false}>
      <div>
        <img src={images[0]} />
      </div>
      <div>
        <img src={images[1]} />
      </div>
      <div>
        <img src={images[2]} />
      </div>
    </Carousel>
  );
}
