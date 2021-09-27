import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './filter.module.css';
import { getAllMetadataThunk, selectFilters } from './filterSlice';

const Filter: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector(selectFilters);

  useEffect(() => {
    dispatch(getAllMetadataThunk());
  }, []);

  return (
    <div className={styles['filter-sidebar']}>
      = Filters go here
      {JSON.stringify(filterState)}
    </div>
  );
};

export default Filter;
