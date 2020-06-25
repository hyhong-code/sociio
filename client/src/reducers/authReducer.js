import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: true,
  isAuthorized: null,
  myProfile: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: true,
        myProfile: payload,
      };
    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
      return { ...state, loading: false, isAuthorized: false, myProfile: null };
    default:
      return state;
  }
};

export default authReducer;
