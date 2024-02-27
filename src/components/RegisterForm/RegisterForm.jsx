import { useState } from 'react';
import css from './registerForm.module.css';
import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import FormButton from 'components/Buttons/FormButton';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ ...INITIAL_STATE });
  const isLoading = useSelector(selectAuthLoading);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const reset = () => {
    setUserData({ ...INITIAL_STATE });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...userData });
    if (isLoading === 'signupSucces') {
      reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Email:
        <input
          className={css.input}
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Password:
        <input
          className={css.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
          minLength={7}
        />
      </label>
      <FormButton text="Register" loading={isLoading} />
    </form>
  );
};

export default RegistrationForm;
