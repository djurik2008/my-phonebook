import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/myPhoneBook/filter/filterslice';

import css from './PhoneBookFilter.module.css';

const PhoneBookFilter = () => {
  const dispatch = useDispatch();
  const changeFitler = ({ target }) =>
    dispatch(setFilter(target.value.toLowerCase()));
  return (
    <div className={css.filter}>
      <input
        onChange={changeFitler}
        name="filter"
        placeholder="Find contact"
        className={css.filterInput}
      />
    </div>
  );
};

export default PhoneBookFilter;
