import axios from 'axios';

import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export const auth = (email, password, isLogin) => {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6EyyYge5mHGBkXU5TPAXXB4hdYAZUprU';

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6EyyYge5mHGBkXU5TPAXXB4hdYAZUprU';
    }

    const response = await axios.post(url, authData);
    const data = response.data;

    const expirationDate = new Date(new Date().getTime + data.expiresIn * 1000);

    localStorage.setItem('Token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
};

export const autoLogout = (time) => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, time * 1000);
};

export const logout = () => {
  localStorage.removeItem('Token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return { type: AUTH_LOGOUT };
};

export const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  token,
});
