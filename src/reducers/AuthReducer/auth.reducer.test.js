import authReducer from './auth.reducer';
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

describe('Auth Reducer', () => {

  let defaultState;

  beforeEach(()=>{
    defaultState = {
      isAuthenticated: false,
      loading: false,
      user: null,
      errors: null
    }
  })

  it('Should return default state', () => {
    const newState = authReducer(defaultState, undefined);
    expect(newState).toEqual(defaultState);
  })

  it(`Should return changed state when ${SIGNUP_START} dispatched`, () => {
    const expectedState = {
      isAuthenticated: false,
      user: null,
      errors: null,
      loading: true,
    };
    const newState = authReducer(defaultState, {
      type: SIGNUP_START
    });
    expect(newState).toEqual(expectedState);
  })

  it(`Should return changed state when ${SIGNUP_SUCCESS} dispatched`, () => {
    const expectedState = {
      isAuthenticated: true,
      user: null,
      errors: null,
      loading: false,
    };
    const newState = authReducer(defaultState, {
      type: SIGNUP_SUCCESS
    });
    console.log(expectedState, newState);
    expect(newState).toEqual(expectedState);
  })

})
