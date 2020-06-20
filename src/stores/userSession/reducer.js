import { Types } from "./actions";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  joinSession: {},
  joinSessionError: "",
  joinSessionLoading: false,

  currentProject: {},
  getProjectError: "",
  getProjectLoading: false,
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
    default:
      return state;
  }
}

export default authReducer;
