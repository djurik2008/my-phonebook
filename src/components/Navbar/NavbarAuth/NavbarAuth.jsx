import { NavLink } from 'react-router-dom';
import css from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={css.auth}>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
