import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Product } from '../../shared/types';
import ProductCard from '../productCard/productCard';
import { fetchAsync, selectProducts } from './productListSlice';
import styles from './ProductList.module.css';

const ProductList: FC<any> = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className={styles.list}>
      {productState.value.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
