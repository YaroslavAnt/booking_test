import * as actionTypes from './actionTypes'
import axios from "axios";

const url = 'https://web-ninjas.net';

export const signUp = (email, password) => {
  return dispatch => {
    const user = {
      email,
      password,
    };

    axios
      .post(`${url}/signUp`, user)
      .then(res => {
        const { id, email } = res.data;
        localStorage.setItem("email", email);
        dispatch(signUpSuccess(id, email));
      })
      .catch(err => {
        dispatch(authFail(err.message));
      });
  };
};

export const signIn = (user) => {
  return dispatch => {
    axios
      .post(`${url}/signIn`, user)
      .then(res => {
        const { token, _id } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", _id);
        dispatch(signInSuccess(token, _id));
      })
      .catch(err => {
        dispatch(authFail(err.message));
      });
  };
};



export const signUpSuccess = (userId, email) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    email,
    userId
  };
};

export const signInSuccess = (token, userId) => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    token,
    userId
  };
};

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    err
  };
};

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  return {
    type: actionTypes.LOGOUT
  };
};