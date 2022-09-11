/* eslint linebreak-style: ["error", "windows"]*/
import React, {useContext, useState} from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {
  },
  logout: () => {
  },
  isExpired: () => {
  },
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const isExpired = () => {
    const token = localStorage.getItem('authToken');
    if (token === null) {
      return true;
    }

    const decodedToken = jwtDecode(token);
    console.log(decodedToken);

    const dateNow = new Date();
    if (decodedToken.exp < (dateNow.getTime() / 1000)) {
      return true;
    }

    return false;
  };

  const [isAuthenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem('authToken');
    if (token === null) {
      return false;
    }

    return !isExpired();
  });

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthenticated(true);
  };

  const logout = () => {
    const token = localStorage.getItem('authToken');
    if (token !== null) {
      localStorage.removeItem('authToken');
    }
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout, isExpired}}>
      {children}
    </AuthContext.Provider>
  );
};
