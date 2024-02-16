import css from './navbarUser.module.css';

const NavbarUser = () => {
  return (
    <div className={css.user}>
      <p className={css.greeting}>Welcome, User!</p>
      <button className={css.button}>Logout</button>
    </div>
  );
};

export default NavbarUser;
