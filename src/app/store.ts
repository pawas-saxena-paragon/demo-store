import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/productList/productListSlice';
import filterReducer from '../features/filter/filterSlice';
import cartReducer from '../features/cart/ cartSlice';
import checkoutReducer from '../features/checkout/checkoutSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
