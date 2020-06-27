import { Types } from "./actions";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  joinSession: {},
  joinSessionError: "",
  joinSessionLoading: false,

  currentProject: {},
  getProjectError: "",
  getProjectLoading: false,

  profile: {},
  getProfileError: "",
  getProfileLoading: true,

  updateProfileError: "",
  updateProfileLoading: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_JOIN_SESSION:
      return state.set("joinSession", action.payload);
    case Types.SET_JOIN_SESSION_LOADING:
      return state.set("joinSessionLoading", action.payload);
    case Types.SET_JOIN_SESSION_ERROR:
      return state.set("joinSessionError", action.payload);
    case Types.SET_CURRENT_PROJECT:
      return state.set("currentProject", action.payload);
    case Types.SET_GET_PROJECT_LOADING:
      return state.set("getProjectLoading", action.payload);
    case Types.SET_GET_PROJECT_ERROR:
      return state.set("getProjectError", action.payload);
    case Types.SET_GET_PROFILE_ERROR:
      return state.set("getProfileError", action.payload);
    case Types.SET_GET_PROFILE_LOADING:
      return state.set("getProfileLoading", action.payload);
    case Types.SET_UPDATE_PROFILE_ERROR:
      return state.set("updateProfileError", action.payload);
    case Types.SET_UPDATE_PROFILE_LOADING:
      return state.set("updateProfileLoading", action.payload);
    case Types.SET_PROFILE:
      return state.set("profile", action.payload);
    default:
      return state;
  }
}

export default authReducer;
