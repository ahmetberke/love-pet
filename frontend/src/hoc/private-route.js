import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../contexts/auth-context';

const PrivateRoute = (props) => {
  const authContext = useAuth();
  const isLoggedIn = authContext.isAuthenticated;

  return (
    isLoggedIn ? (
        <Outlet/>
    ) : (
        <Navigate to="/login"/>
    )
  );
};

export default PrivateRoute;
