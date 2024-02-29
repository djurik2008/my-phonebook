import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import RegistrationForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

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
