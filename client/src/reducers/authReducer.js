import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: true,
  success: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, success: true };
    case SIGNUP_FAIL:
      return { ...state, loading: false, success: false };
    default:
      return state;
  }
};

export default authReducer;
