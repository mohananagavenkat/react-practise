import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  PROFILE_START,
  PROFILE_SUCCESS,
  PROFILE_FAILED
} from '../config/types';
import axios from '../config/axios';
import consts from '../config/consts';

export const signup = userData => {
  return async function (dispatch) {
    dispatch({ type: SIGNUP_START });
    try {
      const response = await axios.post(
        `${consts.API_URI}/auth/signup`,
        userData
      );
      window.localStorage.setItem('token', response.data.token);
      dispatch({ type: SIGNUP_SUCCESS });
      dispatch(getProfile());
    } catch (err) {
      console.log(err.response);
      // let errors = err.data.errors || [{ msg: err.message }];
      // dispatch({
      //   type: SIGNUP_FAILED,
      //   payload: { errors }
      // });
    }
  };
};

export const login = userData => {
  return async function (dispatch) {
    console.log('Login Action')
    dispatch({ type: LOGIN_START });
    try {
      const response = await axios.post(
        `${consts.API_URI}/auth/login`,
        userData
      );
      window.localStorage.setItem('token', response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
      dispatch(getProfile());
      return;
    } catch (err) {
      console.log(err.response);
      // const { errors } = err.data;
      // dispatch({ type: LOGIN_FAILED, payload: { errors } });
    }
  };
};

export const getProfile = () => {
  return async function (dispatch) {
    dispatch({ type: PROFILE_START });
    try {
      const response = await axios.get(`${consts.API_URI}/profile`);
      console.log('[PROFILE ACTION]', response);
      dispatch({ type: PROFILE_SUCCESS, payload: response.data.profile });
    } catch (err) {
      const { errors } = err.data || [];
      dispatch({ type: PROFILE_FAILED, payload: { errors } });
    }
  };
};
