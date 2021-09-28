export type ColorState = { name: string; isChecked: boolean };
export type BrandState = { name: string; isChecked: boolean };
export interface FilterState {
  value: {
    colors: ColorState[];
    brands: BrandState[];
  };
  status: 'idle' | 'loading' | 'failed';
}
