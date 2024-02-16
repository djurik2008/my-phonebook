import { useState } from 'react';
import css from './registerForm.module.css';

const RegistrationForm = () => {
  // const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
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
    //   dispatch(registerUser(userData));
    // Очистити форму після реєстрації
    setUserData({
      name: '',
      email: '',
      password: '',
    });
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
        />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
