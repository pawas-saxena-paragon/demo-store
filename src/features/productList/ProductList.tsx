import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchAsync, selectProducts } from './productListSlice';

const ProductList: FC<any> = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  dispatch(fetchAsync());

  return (
    <div>
      <h1>Product List</h1>
      {JSON.stringify(products)}
    </div>
  );
};

export default ProductList;
