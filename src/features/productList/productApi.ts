import productData from './productData';
import { Product } from './types';

export function fetchAllProducts() {
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: productData }), 500),
  );
}
