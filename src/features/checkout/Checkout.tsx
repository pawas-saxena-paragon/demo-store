import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './checkout.module.css';
import { useSelector } from 'react-redux';
import { selectCart } from '../cart/ cartSlice';
import { Product } from '../../shared/types';

type CheckoutFormDetails = {
  email: string;
  name: string;
  address: string;
  phone: string;
};

type AllowedCoupons = 'DIWALI20' | 'NEW30' | 'NONE';
const couponDiscountFactor: Record<AllowedCoupons, number> = {
  DIWALI20: 0.8,
  NEW30: 0.7,
  NONE: 1,
};

const SingleProductForCheckout: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles['single-product-root']}>
      <Row>
        <Col>
          <img src={(product.id % 6) + '.jpg'} className={styles.image}></img>
        </Col>
        <Col>
          <div>
            {product.car_model} : {product.car}
            <div className={styles.description}>
              <div>Color: {product.car_color}</div>
            </div>
          </div>
        </Col>
        <Col>
          <div>${product.price}</div>
        </Col>
      </Row>
    </div>
  );
};

const Checkout: React.FC<{}> = ({}) => {
  const { cartProducts } = useSelector(selectCart);

  const [userDetails, setUserDetails] = useState<CheckoutFormDetails>({
    email: '',
    name: '',
    address: '',
    phone: '',
  });

  const [coupon, setCoupon] = useState<AllowedCoupons>('NONE');

  const getProductTotal = () => {
    const totalProductPrice = cartProducts.reduce((prev: number, curr: Product) => {
      return prev + parseInt(curr.price);
    }, 0);
    return Math.ceil(totalProductPrice * couponDiscountFactor[coupon]);
  };

  return (
    <div className={styles['checkout-root']}>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              />
            </Form.Group>

            <div className={styles['shipping-heading']}>Shipping Address</div>
            <Form.Group className="mb-3" controlId="Shipping">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={userDetails.name}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={userDetails.address}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, address: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                value={userDetails.phone}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, phone: e.target.value });
                }}
              />
            </Form.Group>
            <Button variant="primary" type="button">
              Continue to shipping
            </Button>
          </Form>
        </Col>

        <Col>
          {cartProducts.map((product: Product) => {
            return <SingleProductForCheckout product={product} />;
          })}
          <br />
          <Form.Group className="mb-2" controlId="Phone">
            <Form.Label>Coupon</Form.Label>
            <Form.Control
              as="select"
              placeholder="Phone"
              value={coupon}
              onChange={(e) => {
                setCoupon(e.target.value as AllowedCoupons);
              }}
            >
              <option value="NONE">Select Coupon</option>
              <option value="DIWALI20">DIWALI20</option>
              <option value="NEW30">NEW30</option>
            </Form.Control>
          </Form.Group>

          <div>Total: $ {getProductTotal()}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
