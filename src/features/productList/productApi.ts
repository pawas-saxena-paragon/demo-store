import { Product } from '../../shared/types';
import { BrandState, ColorState, FilterState } from '../filter/types';
import productData from './productData';

export function fetchAllProducts(skip: number, filter: FilterState) {
  const pageResponseSize = 200;
  const { brands, colors } = filter.value;
  const selectedBrand = brands
    .filter((brand: BrandState) => brand.isChecked)
    .map((brand: BrandState) => brand.name);
  const selectedColor = colors
    .filter((color: ColorState) => color.isChecked)
    .map((color: ColorState) => color.name);

  const brandFilteredProducts = selectedBrand.length
    ? productData.filter((product: Product) => selectedBrand.includes(product.car))
    : productData;
  const colorFilteredProducts = selectedColor.length
    ? brandFilteredProducts.filter((product: Product) => selectedColor.includes(product.car_color))
    : brandFilteredProducts;
    
  return Promise.resolve({ data: colorFilteredProducts.slice(skip, pageResponseSize) });
}
