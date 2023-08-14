import qs from 'query-string';

import { Product as ProductType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}
const getProducts = async (query: Query): Promise<ProductType[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
    }
  })
  const res = await fetch(URL, { next: { revalidate: 0 } });
  return res.json();
}

export default getProducts;