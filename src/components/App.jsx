import AppRoutes from './AppRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from '../redux/auth/auth-operations';
// import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  });

  return <AppRoutes />;
};
