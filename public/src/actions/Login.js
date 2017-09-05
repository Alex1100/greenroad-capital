import axios from 'axios';

const requestLogin = credentials => ({
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  credentials
});


const receiveLogin = user => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  user
});


const loginError = message => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message,
});


const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true,
});


const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false,
});


const loginUser = (creds, history) => {
  let axiosBod = window.btoa(JSON.stringify({
    params: {
      email: creds.email,
      password: creds.password
    }
  }));
  console.log("AXIOS BOD IS: ", axiosBod);

  return (dispatch) => {
    dispatch(requestLogin(creds));
    return axios.get(`api/login/${axiosBod}`)
      .then(response => {
        if(!response.data){
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }
        localStorage.setItem('user_token', response.data.user_token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('fullName', response.data.fullName);
        dispatch(receiveLogin(response.data));
        history.push('/');
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  };
};


const signupUser = (creds, history) => {
  const body = {
    email: creds.email,
    fullName: creds.fullName,
    password: creds.password
  };
  return (dispatch) => {
    dispatch(requestLogin(creds));
    return axios.post('api/signup', body)
      .then(response => {
        if (response.statusText !== 'Created') {
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }
        localStorage.setItem('user_token', response.data.user_token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('fullName', response.data.fullName);
        dispatch(receiveLogin(response.data));
        history.push('/');
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
};


const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('user_token');
  localStorage.removeItem('email');
  dispatch(receiveLogout());
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export { signupUser, loginUser, logoutUser };
