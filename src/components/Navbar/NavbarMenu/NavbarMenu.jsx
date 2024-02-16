import { NavLink } from 'react-router-dom';
import css from './navbarMenu.module.css';
import menuItems from './menuItems';

const NavbarMenu = () => {
  const isLogin = true;

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id} className={css.item}>
      <NavLink className={css.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default NavbarMenu;
