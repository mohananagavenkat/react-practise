import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  PROFILE_START,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  LOGOUT
} from '../../config/types';

const defaultState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  errors: null
}
export default function authReducer(state = defaultState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_START:
    case LOGIN_START:
    case PROFILE_START:
      return {
        isAuthenticated: false,
        user: null,
        errors: null,
        loading: true,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        user: null,
        errors: null,
        loading: false,
      };
    case SIGNUP_FAILED:
    case LOGIN_FAILED:
    case PROFILE_FAILED:
      return {
        isAuthenticated: false,
        user: null,
        errors: payload.errors,
        loading: false,
      };
    case PROFILE_SUCCESS:
      return {
        isAuthenticated: true,
        user: payload,
        errors: null,
        loading: false,
      }
    case LOGOUT:
      window.localStorage.removeItem('token');
      return defaultState;
    default:
      return state;
  }
}