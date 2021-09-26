import React, { FC } from 'react';
import { Product } from '../../shared/types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ProductCard.module.css';

type ProductCardProp = {
  product: Product;
};

const ProductCard: FC<ProductCardProp> = ({ product }: ProductCardProp) => {
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
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
