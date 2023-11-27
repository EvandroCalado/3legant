'use client';

import ProductCard from '../ProductCard';

export type ProductsGridProps = {
  products: any;
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: any) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
