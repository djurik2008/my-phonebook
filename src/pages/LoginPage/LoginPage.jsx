import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  selectAuthUser,
} from '../../redux/auth/auth-selectors';
import LoginForm from 'components/LoginForm/LoginForm';
import Notiflix from 'notiflix';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const user = useSelector(selectAuthUser);

  if (error) {
    Notiflix.Report.failure('Oops! Something Went Wrong', error);
  }

  if (isLoading === 'loginSucces') {
    Notiflix.Report.success(
      'Hello',
      `Welcome back ${user.name}`,
      'Move to My contacts'
    );
  }

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
