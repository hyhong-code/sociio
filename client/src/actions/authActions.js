import axios from 'axios';
import { setAlert } from '../actions/alertActions';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from '../actions/actionTypes';

const axiosPostConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const resp = await axios.post(
      '/api/v1/auth/signup',
      formData,
      axiosPostConfig
    );
    console.log(resp.data);
    dispatch({
      type: SIGNUP_SUCCESS,
    });
    dispatch(setAlert(`Sign up success`, false));
    history.push('/profile');
  } catch (error) {
    console.log(error.response.data);
    dispatch(setAlert(error.response.data.message, true, 8000));
  }
};

export const signIn = (formData) => async (dispatch) => {
  try {
    const resp = await axios.post(
      '/api/v1/auth/login',
      formData,
      axiosPostConfig
    );
    dispatch(getMyProfile());
    dispatch(setAlert(`Sign in success`, false));
    console.log(resp.data);
  } catch (error) {
    console.log(error.response.data);
    dispatch(setAlert(error.response.data.message, true, 8000));
  }
};

export const getMyProfile = () => async (dispatch) => {
  const myProfile = await axios.get(`/api/v1/profile/me`);
  dispatch({
    type: SIGNIN_SUCCESS,
    payload: myProfile.data.data.profile,
  });
};
