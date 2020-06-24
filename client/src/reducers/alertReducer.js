import { SET_ALERT, CANCEL_ALERT } from '../actions/actionTypes';

const INITIAL_STATE = [];

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case CANCEL_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
