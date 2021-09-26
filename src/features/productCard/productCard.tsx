import React, { FC } from 'react';
import { Product } from '../../shared/types';

type ProductCardProp = {
  product: Product;
};

const ProductCard: FC<ProductCardProp> = ({ product }: ProductCardProp) => {
  return (
    <div>
      <h1>Product Card</h1>
      {JSON.stringify(product)}
    </div>
  );
};

export default ProductCard;
