import { Link } from 'react-router-dom';
import css from './navbar.module.css';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarMenu from './NavbarMenu/NavbarMenu';

const Navbar = () => {
  const isLogin = false;

  return (
    <header className={css.navbar}>
      <Link to="/" className={css.logo}>
        <svg className={css.logoSvg}>
          <use href="#logo" />
        </svg>
        logo
      </Link>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </header>
  );
};

export default Navbar;
