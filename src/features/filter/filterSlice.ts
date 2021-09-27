import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getMetadata } from './filterApi';

interface FilterState {
  value: {
    selectedColors: string[];
    selectedBrands: string[];
    allColors: string[];
    allBrands: string[];
  };
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FilterState = {
  value: { selectedBrands: [], selectedColors: [], allColors: [], allBrands: [] },
  status: 'idle',
};

export const getAllMetadataThunk = createAsyncThunk('filter/getMetadata', async () => {
  const response = await getMetadata();
  return response.data;
});

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setColors: (state, action: PayloadAction<string[]>) => {
      state.value.selectedColors = action.payload;
    },
    setBrands: (state, action: PayloadAction<string[]>) => {
      state.value.selectedBrands = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMetadataThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllMetadataThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        const { allBrands, allColors } = action.payload;
        state.value.allBrands = allBrands;
        state.value.allColors = allColors;
      });
  },
});

export const selectFilters = (state: RootState) => state.filter;

export default filterSlice.reducer;
