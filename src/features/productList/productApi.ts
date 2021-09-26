import { Product } from '../../shared/types';
import productData from './productData';

export function fetchAllProducts() {
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: productData }), 500),
  );
}
