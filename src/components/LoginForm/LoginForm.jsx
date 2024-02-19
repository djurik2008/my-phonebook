import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import css from './loginForm.module.css';
import RegisterLoader from 'components/Loader/RegisterLoader';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ ...INITIAL_STATE });
  const isLoading = useSelector(selectAuthLoading);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const reset = () => {
    setUserData({ ...INITIAL_STATE });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...userData });
    if (isLoading === 'loginSucces') {
      reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
        />
      </label>
      <button className={css.button} type="submit">
        {isLoading === 'loginPending' ? <RegisterLoader /> : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
