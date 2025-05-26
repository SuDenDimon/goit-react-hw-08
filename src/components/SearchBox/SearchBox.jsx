import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
}
