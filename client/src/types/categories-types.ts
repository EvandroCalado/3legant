export interface CategoriesType {
  data: CategoryType[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface CategoryType {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: Products;
  image: Image;
}

interface Image {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  thumbnail: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}

interface Products {
  data?: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  measurements: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  additionalInfo: string;
  isNew: boolean;
}
