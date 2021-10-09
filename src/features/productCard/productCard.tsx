import React, { FC } from 'react';
import { Product } from '../../shared/types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ProductCard.module.css';
import { useAppDispatch } from '../../app/hooks';
import * as cartSlice from '../cart/ cartSlice';

type ProductCardProp = {
  product: Product;
};

const ProductCard: FC<ProductCardProp> = ({ product }: ProductCardProp) => {
  const dispatch = useAppDispatch();
  const addToCart = (product: Product) => {
    dispatch(cartSlice.addToCart(product));
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={(product.id % 6) + '.jpg'} className={styles.image} />
        <Card.Body>
          <Card.Title>
            {product.car_model} : {product.car}
          </Card.Title>
          <div className={styles.description}>
            <div>Color: {product.car_color}</div>
            <div>Price: ${product.price}</div>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
