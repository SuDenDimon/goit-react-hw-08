import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={e => dispatch(setNameFilter(e.target.value))}
      placeholder="Search contacts"
      className={css.input}
    />
  );
};

export default Filter;