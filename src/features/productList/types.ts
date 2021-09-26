import { Product } from "../../shared/types";

export interface ProductState {
  value: Product[];
  status: 'idle' | 'loading' | 'failed';
}
