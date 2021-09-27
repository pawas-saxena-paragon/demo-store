import { Product } from '../../shared/types';
import productData from '../productList/productData';

type FilterMetadata = { allColors: string[]; allBrands: string[] };

export const getMetadata = (): Promise<{ data: FilterMetadata }> => {
  const metadata: FilterMetadata = productData.reduce(
    (prev: FilterMetadata, curr: Product): FilterMetadata => {
      !prev.allBrands.includes(curr.car) && prev.allBrands.push(curr.car);
      !prev.allColors.includes(curr.car_color) && prev.allColors.push(curr.car_color);
      return prev;
    },
    {
      allColors: [],
      allBrands: [],
    },
  );
  return Promise.resolve({ data: metadata });
};
