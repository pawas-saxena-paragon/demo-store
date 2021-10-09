import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Product } from '../../shared/types';

type InitialState = {
  cartProducts: Product[];
};

const initialState: InitialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // todo add support for multiple quantity for products
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartProducts.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts.filter((cartProduct: Product) => cartProduct.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
