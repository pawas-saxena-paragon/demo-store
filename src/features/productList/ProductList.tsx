import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Product } from '../../shared/types';
import ProductCard from '../productCard/productCard';
import { fetchAsync, selectProducts } from './productListSlice';

const ProductList: FC<any> = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector(selectProducts);

  dispatch(fetchAsync());

  return (
    <div>
      <h1>Product List</h1>
      {productState.value.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
