import css from './navbarUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

const NavbarUser = () => {
  const { username } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <div className={css.user}>
      <p className={css.greeting}>{username}</p>
      <button className={css.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
