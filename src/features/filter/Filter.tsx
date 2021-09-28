import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './filter.module.css';
import { getAllMetadataThunk, selectFilters, setBrands, setColors } from './filterSlice';
import { BrandState, ColorState } from './types';
import Form from 'react-bootstrap/Form';

const Filter: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(selectFilters);

  useEffect(() => {
    dispatch(getAllMetadataThunk());
  }, []);
  
  return (
    <div className={styles['filter-sidebar']}>
      <h2>Colors</h2>
      <div>
        <Form>
          {filterState.value.colors.map((colorState: ColorState) => (
            <Form.Check
              type="checkbox"
              id={colorState.name}
              checked={colorState.isChecked}
              label={colorState.name}
              onChange={() => {
                dispatch(setColors(colorState.name));
              }}
            />
          ))}
        </Form>
      </div>

      <h2>Brands</h2>
      <div>
        <Form>
          {filterState.value.brands.map((brandState: BrandState) => (
            <Form.Check
              type="checkbox"
              id={brandState.name}
              checked={brandState.isChecked}
              label={brandState.name}
              onChange={() => {
                dispatch(setBrands(brandState.name));
              }}
            />
          ))}
        </Form>
      </div>
    </div>
  );
};

export default Filter;
