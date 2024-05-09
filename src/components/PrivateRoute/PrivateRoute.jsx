import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectIsLogin} from '../../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLogin);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};