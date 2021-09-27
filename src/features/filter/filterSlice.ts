import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getMetadata } from './filterApi';
import { BrandState, ColorState, FilterState } from './types';

const initialState: FilterState = {
  value: { colors: [], brands: [] },
  status: 'idle',
};

export const getAllMetadataThunk = createAsyncThunk('filter/getMetadata', async () => {
  const response = await getMetadata();
  return response.data;
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setColors: (state, action: PayloadAction<string>) => {
      state.value.colors = state.value.colors.map((color: ColorState) =>
        color.name === action.payload ? { ...color, isChecked: !color.isChecked } : color,
      );
    },
    setBrands: (state, action: PayloadAction<string>) => {
      state.value.brands = state.value.brands.map((brand: BrandState) =>
        brand.name === action.payload ? { ...brand, isChecked: !brand.isChecked } : brand,
      );
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
        state.value.brands = allBrands.map((brandName: string) => ({
          name: brandName,
          isChecked: false,
        }));
        state.value.colors = allColors.map((colorName: string) => ({
          name: colorName,
          isChecked: false,
        }));
      });
  },
});

export const { setColors, setBrands } = filterSlice.actions;
export const selectFilters = (state: RootState) => state.filter;

export default filterSlice.reducer;
