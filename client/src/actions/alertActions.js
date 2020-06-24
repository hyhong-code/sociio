import { SET_ALERT, CANCEL_ALERT } from '../actions/actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, isError = true, timeout = 5000) => (dispatch) => {
  const id = uuidv4();

  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      isError,
      id,
    },
  });

  setTimeout(() => {
    dispatch({
      type: CANCEL_ALERT,
      payload: id,
    });
  }, timeout);
};
