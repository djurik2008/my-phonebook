import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAuthIsLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectAuthToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
