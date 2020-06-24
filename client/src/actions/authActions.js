import axios from 'axios';
import { setAlert } from '../actions/alertActions';
import { SIGNUP_SUCCESS } from '../actions/actionTypes';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const resp = await axios.post('/api/v1/auth/signup', formData, config);
    console.log(resp.data);
    dispatch({
      type: SIGNUP_SUCCESS,
    });
    dispatch(setAlert(`Sign up success`, false));

    const profile = await axios.get('/api/v1/profile/me');
    console.log(profile.data);
    history.push('/profile');
  } catch (error) {
    console.log(error.response.data);
    dispatch(setAlert(error.response.data.message, true, 8000));
  }
};
