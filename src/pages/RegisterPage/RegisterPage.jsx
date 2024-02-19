import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  selectAuthUser,
} from '../../redux/auth/auth-selectors';
import RegistrationForm from 'components/RegisterForm/RegisterForm';
import Notiflix from 'notiflix';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const user = useSelector(selectAuthUser);

  if (isLoading === 'signupSucces') {
    Notiflix.Report.success(
      'Success',
      `Congratulations ${user.name}, you have successfully registered`,
      'Move to My contacts'
    );
  }

  if (error) {
    Notiflix.Report.failure('Oops! Something Went Wrong', error);
  }

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <RegistrationForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
