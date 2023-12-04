export interface ProductsType {
  data: ProductType[];
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

export interface ProductType {
  id?: number;
  attributes?: Attributes5;
}

interface Attributes5 {
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
  cover: Cover;
  images: Images;
  product_colors: Productcolors;
  product_categories: Productcategories;
  product_ratings: Productratings;
}

interface Productratings {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Productcategories {
  data?: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Productcolors {
  data?: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
}

interface Images {
  data?: Data[];
}

interface Cover {
  data?: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
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
