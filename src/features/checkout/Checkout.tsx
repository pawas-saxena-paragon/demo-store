import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './checkout.module.css';

type CheckoutFormDetails = {
  email: string;
  name: string;
  address: string;
  phone: string;
};

const Checkout: React.FC<{}> = ({}) => {
  const [userDetails, setUserDetails] = useState<CheckoutFormDetails>({
    email: '',
    name: '',
    address: '',
    phone: '',
  });

  const [coupon, setCoupon] = useState<string>('');

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
          <h1>Total Panel</h1>
          {JSON.stringify(userDetails)}
          {coupon}

          <Form.Group className="mb-2" controlId="Phone">
            <Form.Label>Coupon</Form.Label>
            <Form.Control
              as="select"
              placeholder="Phone"
              value={coupon}
              onChange={(e) => {
                setCoupon(e.target.value);
              }}
            >
              <option>Select Coupon</option>
              <option value="DIWALI20">DIWALI20</option>
              <option value="NEW30">NEW30</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
