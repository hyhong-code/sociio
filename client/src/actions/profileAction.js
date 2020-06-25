import axios from 'axios';
import {
  GET_PROFILE,
  CLEAR_PROFILE,
  PROFILE_FAIL,
  DISPLAY_PROFILE_PANEL,
  DISPLAY_PROFILE_FOLLOWERS,
  DISPLAY_PROFILE_FOLLOWING,
  DISPLAY_PROFILE_EDITINFO,
  DISPLAY_PROFILE_EDITPASSWORD,
  DISPLAY_PROFILE_DELETEACCOUNT,
  DISPLAY_USER_COMMENTED,
  DISPLAY_USER_SHARED,
  DISPLAY_USER_LIKED,
} from './actionTypes';

export const getProfile = () => async (dispatch) => {
  try {
    const resp = await axios.get('/api/v1/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: resp.data.data.profile,
    });
    console.log(resp.data.data.profile);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// SET PROFILE ACTIVITY VIEWS
export const displayUserCommented = () => (dispatch) => {
  dispatch({
    type: DISPLAY_USER_COMMENTED,
  });
};

export const displayUserShared = () => (dispatch) => {
  dispatch({
    type: DISPLAY_USER_SHARED,
  });
};

export const displayUserLiked = () => (dispatch) => {
  dispatch({
    type: DISPLAY_USER_LIKED,
  });
};

// SET PROFILE PANEL VIEWS
export const displayProfilePanel = () => (dispatch) => {
  dispatch({
    type: DISPLAY_PROFILE_PANEL,
  });
};

export const displayProfileFollowing = () => (dispatch) => {
  dispatch({
    type: DISPLAY_PROFILE_FOLLOWING,
  });
};

export const displayProfileFollowers = () => (dispatch) => {
  dispatch({
    type: DISPLAY_PROFILE_FOLLOWERS,
  });
};

export const displayProfileEditInfo = () => (dispatch) => {
  dispatch({
    type: DISPLAY_PROFILE_EDITINFO,
  });
};

export const displayProfileEditPassword = () => (dispatch) => {
  dispatch({
    type: DISPLAY_PROFILE_EDITPASSWORD,
  });
};

export const displayProfileDelectAccount = () => (dispatch) => {
  dispatch({
    type: DISPLAY_PROFILE_DELETEACCOUNT,
  });
};
