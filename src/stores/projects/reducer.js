import { Types } from "./actions";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  projects: [],

  createProjectLoadingError: "",
  createProjectLoadingStatus: false,

  getProjectsLoadingError: "",
  getProjectsLoadingStatus: false,
});

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PROJECTS:
      return state.merge({ projects: action.payload });
    case Types.SET_GET_PROJECTS_LOADING:
      return state.set("getProjectsLoadingStatus", action.payload);
    case Types.SET_GET_PROJECTS_ERROR:
      return state.set("getProjectsLoadingError", action.payload);
    case Types.SET_CREATE_PROJECT_LOADING:
      return state.set("createProjectLoadingStatus", action.payload);
    case Types.SET_CREATE_PROJECT_ERROR:
      return state.set("createProjectLoadingError", action.payload);
    default:
      return state;
  }
}

export default projectReducer;
