import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/myPhoneBook/contacts/contacs-operations';
import FormButton from 'components/Buttons/FormButton';
import { selectContactsState } from '../../../redux/myPhoneBook/contacts/contacts-selectors';

import css from './PhoneBookForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const TEXT_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$";

const PHONE_PATTERN =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';

const PhoneBookForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { addLoading, error } = useSelector(selectContactsState);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ ...state }));
    if (!error) {
      reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          className={css.input}
          pattern={TEXT_PATTERN}
          name="name"
          onChange={handleChange}
          value={state.name}
          required
        ></input>
      </label>
      <label className={css.label}>
        Number
        <input
          type="phone"
          className={css.input}
          pattern={PHONE_PATTERN}
          name="phone"
          onChange={handleChange}
          value={state.phone}
          required
        ></input>
      </label>
      <FormButton text={'Add contact'} loading={addLoading} />
    </form>
  );
};

export default PhoneBookForm;
