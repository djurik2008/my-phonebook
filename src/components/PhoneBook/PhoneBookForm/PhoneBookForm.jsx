import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/myPhoneBook/contacts/contacs-operations';
import FormButton from 'components/Buttons/FormButton';
import { selectFilteredContacts } from '../../../redux/myPhoneBook/contacts/contacts-selectors';
import { Notify, Report } from 'notiflix';

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
  const [state, setState] = useState({ ...INITIAL_STATE });
  const [loading, setLoading] = useState(false);
  const { error } = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  if (error) {
    Report.failure(error);
  }

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

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const actionResult = await dispatch(addContact({ ...state }));
      if (addContact.fulfilled.match(actionResult)) {
        Notify.success('Contact added');
        reset();
      }
    } finally {
      setLoading(false);
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
