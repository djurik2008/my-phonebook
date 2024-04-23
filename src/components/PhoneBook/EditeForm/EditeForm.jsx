import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editeContact } from '../../../redux/myPhoneBook/contacts/contacs-operations';
import { selectContactsState } from '../../../redux/myPhoneBook/contacts/contacts-selectors';
import FormButton from '../../Buttons/FormButton';
import css from '../PhoneBookForm/PhoneBookForm.module.css';

const TEXT_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const PHONE_PATTERN =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';

const EditeForm = ({ contact, onSubmit }) => {
  const { _id: id, name, phone } = contact;
  const [state, setState] = useState({ name, phone });
  const dispatch = useDispatch();
  const { editeLoading, error } = useSelector(selectContactsState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editeContact({ id, body: { ...state } }));
    if (!error) {
      onSubmit();
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
      <FormButton text={'Save changes'} loading={editeLoading} />
    </form>
  );
};

export default EditeForm;
