import { Product } from '../../shared/types';
import productData from './productData';

export function fetchAllProducts(skip: number) {
  const pageResponseSize = 200;
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: productData.slice(skip, pageResponseSize) }), 500),
  );
}
