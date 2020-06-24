import axios from 'axios';
import { setAlert } from '../actions/alertActions';
import { SIGNUP_SUCCESS } from '../actions/actionTypes';

export const signUp = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(formData);
    dispatch({
      type: SIGNUP_SUCCESS,
    });

    const resp = await axios.post('/api/v1/auth/signup', formData, config);
    console.log(resp.data);
  } catch (error) {
    console.log(error.response.data);
    dispatch(setAlert(error.response.data.message, true, 8000));
  }
};
