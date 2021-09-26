import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductState } from './types';
import { fetchAllProducts } from './productApi';
import { RootState } from '../../app/store';

const initialState: ProductState = {
  value: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk('productList/fetchAllProducts', async () => {
  const response = await fetchAllProducts();
  return response.data;
});

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});
export const selectProducts = (state: RootState) => state.products;


export default productListSlice.reducer;
