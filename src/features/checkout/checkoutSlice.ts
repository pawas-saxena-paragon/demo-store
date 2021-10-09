import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { checkoutApiCall } from './checkoutApi';

const initialState = {
  value: {},
  status: 'idle',
};

export const checkoutApiCallThunk = createAsyncThunk('checkout/checkoutApiCallThunk', async () => {
  const response = await checkoutApiCall({});
  console.log('checkout api call success', response);
});

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkoutApiCallThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkoutApiCallThunk.fulfilled, (state) => {
        state.status = 'idle';
      });
  },
});

export const selectFilters = (state: RootState) => state.checkout;

export default checkoutSlice.reducer;
