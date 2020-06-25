import {
  GET_PROFILE,
  CLEAR_PROFILE,
  PROFILE_FAIL,
} from '../actions/actionTypes.js';

const INITIAL_STATE = {
  profile: null,
  loading: true,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };
    case PROFILE_FAIL:
    case CLEAR_PROFILE:
      return { ...state, profile: null, loading: false };
    default:
      return state;
  }
};

export default profileReducer;
