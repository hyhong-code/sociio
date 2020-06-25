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
} from './actionTypes';

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
