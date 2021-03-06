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
} from '../actions/actionTypes';

const INITIAL_STATE = {
  profile: null,
  loading: true,
  panelView: 'panel',
  activityView: 'commented',
};

const profileReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };
    case PROFILE_FAIL:
    case CLEAR_PROFILE:
      return { ...state, profile: null, loading: false, panelView: 'panel' };
    // PANEL VIEWS
    case DISPLAY_PROFILE_PANEL:
      return { ...state, panelView: 'panel' };
    case DISPLAY_PROFILE_FOLLOWERS:
      return { ...state, panelView: 'followers' };
    case DISPLAY_PROFILE_FOLLOWING:
      return { ...state, panelView: 'following' };
    case DISPLAY_PROFILE_EDITINFO:
      return { ...state, panelView: 'editInfo' };
    case DISPLAY_PROFILE_EDITPASSWORD:
      return { ...state, panelView: 'editPassword' };
    case DISPLAY_PROFILE_DELETEACCOUNT:
      return { ...state, panelView: 'deleteAccount' };
    // ACTIVITY VIEWS
    case DISPLAY_USER_COMMENTED:
      return { ...state, activityView: 'commented' };
    case DISPLAY_USER_SHARED:
      return { ...state, activityView: 'shared' };
    case DISPLAY_USER_LIKED:
      return { ...state, activityView: 'liked' };

    default:
      return state;
  }
};

export default profileReducer;
