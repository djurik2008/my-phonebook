import { useState } from 'react';
import css from './registerForm.module.css';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthIsLogin,
} from '../../redux/auth/auth-selectors';
import FormButton from 'components/Buttons/FormButton';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ ...INITIAL_STATE });
  const isLoading = useSelector(selectAuthLoading);
  const isLogin = useSelector(selectAuthIsLogin);

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
    if (isLogin) {
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
          name="username"
          value={userData.username}
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
          minLength={6}
        />
      </label>
      <FormButton text="Register" loading={isLoading} />
    </form>
  );
};

export default RegistrationForm;
