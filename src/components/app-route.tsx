import React, { useContext } from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../services/auth/auth-context';
import { AppRoutes } from '../services/route/types';


export const AppRoute: React.FC<RouteProps> = ({ children}) => {

  const currentUserContext = useContext(CurrentUserContext);

  const location = useLocation();

  return (currentUserContext?.currentUser) ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to={AppRoutes.AUTH_LOGIN}
      state={{ from: `${location.pathname}?${location.search}` }}
  />
  )
};