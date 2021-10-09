import React from 'react';
import { useSelector  } from 'react-redux';
import { selectCart } from './ cartSlice';

const Cart: React.FC<{}> = ({}) => {
    const products = useSelector(selectCart);
  return <div>Hi I am cart
      {JSON.stringify(products)}
  </div>;
};

export default Cart;
