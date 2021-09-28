import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Product } from '../../shared/types';
import ProductCard from '../productCard/productCard';
import { fetchAsync, selectProducts } from './productListSlice';
import styles from './ProductList.module.css';
import { selectFilters } from '../filter/filterSlice';

function arrangeIntoRows(products: Product[]): Product[][] {
  const itemsPerRow = 4;
  return products.reduce((accumulator: Product[][], current: Product, currentIndex: number) => {
    if (currentIndex % itemsPerRow === 0) {
      accumulator.push([current]);
    } else {
      const lastItemIndex = accumulator.length ? accumulator.length - 1 : 0;
      accumulator[lastItemIndex].push(current);
    }
    return accumulator;
  }, []);
}

const ProductList: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector(selectProducts);
  const filterState = useAppSelector(selectFilters);


  useEffect(() => {
    dispatch(fetchAsync(filterState));
  }, [filterState.value]);


  return (
    <div className={styles.list}>
      {arrangeIntoRows(productState.value).map((productRow: Product[]) => (
        <div className={styles['product-row']} key={'row-' + productRow[0].id}>
          {productRow.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
