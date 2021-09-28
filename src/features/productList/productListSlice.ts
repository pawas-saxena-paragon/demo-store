import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductState } from './types';
import { fetchAllProducts } from './productApi';
import { RootState } from '../../app/store';
import { FilterState } from '../filter/types';

const initialState: ProductState = {
  value: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk('productList/fetchAllProducts', async (filter: FilterState) => {
  const response = await fetchAllProducts(0, filter);
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
