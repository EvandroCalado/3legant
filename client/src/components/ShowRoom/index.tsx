import { CategoryType } from '../../types/categories-types';
import ProductDestak from '../ProductDestak';

export type ShowRoomProps = {
  categories: CategoryType[];
};

export default function ShowRoom({ categories }: ShowRoomProps) {
  return (
    <section className="container mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 md:flex-row">
      <div className="flex-[2]">
        <ProductDestak
          title={categories[0].attributes.title}
          image={categories[0].attributes.image.data.attributes.url}
          slug={categories[0].attributes.slug}
        />
      </div>

      <div className="flex-1">
        <ProductDestak
          title={categories[1].attributes.title}
          image={categories[1].attributes.image.data.attributes.url}
          slug={categories[1].attributes.slug}
          isLandscape
        />
        <ProductDestak
          title={categories[4].attributes.title}
          image={categories[4].attributes.image.data.attributes.url}
          slug={categories[4].attributes.slug}
          isLandscape
        />
      </div>
    </section>
  );
}
