import axios from "axios";
import { observable, action } from "mobx";

const url = 'https://web-ninjas.net';

export default class AuthStore {
  @observable authData = {
    email: null,
    token: null,
    userId: null,
    err: null,
    loading: false,
  }

  @action signUp(email, password) {
    const user = {
      email,
      password,
    };

    axios
      .post(`${url}/signUp`, user)
      .then(res => {
        const { id, email } = res.data;
        localStorage.setItem("email", email);
        this.authData.userId = id;
        this.authData.email = email;
      })
      .catch(err => {
        this.authData.err = err;
      });
  }

  @action signIn(user) {
    axios
      .post(`${url}/signIn`, user)
      .then(res => {
        console.log(res)
        const { token, _id } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", _id);
        this.authData.token = token;
        this.authData.userId = _id;
      })
      .catch(err => {
        this.authData.err = err.message;
      });
  }

  @action logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.authData = {
      email: null,
      token: null,
      userId: null,
      err: null,
      loading: false,
    }
  }
}

// export const signUp = (email, password) => {
//   return dispatch => {

//   };
// };

// export const signIn = (user) => {
//   return dispatch => {
//     axios
//       .post(`${url}/signIn`, user)
//       .then(res => {
//         const { token, _id } = res.data;
//         localStorage.setItem("token", token);
//         localStorage.setItem("userId", _id);
//         dispatch(signInSuccess(token, _id));
//       })
//       .catch(err => {
//         dispatch(authFail(err.message));
//       });
//   };
// };



// export const signUpSuccess = (userId, email) => {
//   return {
//     type: actionTypes.SIGNUP_SUCCESS,
//     email,
//     userId
//   };
// };

// export const signInSuccess = (token, userId) => {
//   return {
//     type: actionTypes.SIGNIN_SUCCESS,
//     token,
//     userId
//   };
// };

// export const authFail = (err) => {
//   return {
//     type: actionTypes.AUTH_FAIL,
//     err
//   };
// };

// export const logout = () => {
//   localStorage.clear();
//   sessionStorage.clear();
//   return {
//     type: actionTypes.LOGOUT
//   };
// };