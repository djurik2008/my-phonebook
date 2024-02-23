import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/myPhoneBook/contacts/contacs-operations';
import FormButton from 'components/FormButton/FormButton';
import { selectFilteredContacts } from '../../../redux/myPhoneBook/contacts/contacts-selectors';

import css from './PhoneBookForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const TEXT_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const PHONE_PATTERN =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';

const PhoneBookForm = () => {
  const { isLoading } = useSelector(selectFilteredContacts);
  const [state, setState] = useState({ ...INITIAL_STATE });
  console.log(isLoading);
  const dispatch = useDispatch();
  const contactData = { ...state };

  let loading = false;

  if (isLoading === 'add') {
    loading = true;
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value.trim(),
    });
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(contactData));
    if (isLoading === 'addSucces') {
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
          name="number"
          onChange={handleChange}
          value={state.number}
          required
        ></input>
      </label>
      <FormButton text={'Add contact'} loading={loading} />
    </form>
  );
};

export default PhoneBookForm;
