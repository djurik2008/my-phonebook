import { useState } from 'react';
import css from './loginForm.module.css';

const LoginForm = () => {
  // const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //   dispatch(loginUser(userData));
    // Очистити форму після входу
    setUserData({
      email: '',
      password: '',
    });
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
