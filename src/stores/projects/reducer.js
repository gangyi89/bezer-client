import { Types } from "./actions";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  projects: [],
  currentProject: {},
  stages: [],

  createProjectLoadingError: "",
  createProjectLoadingStatus: false,

  getProjectsLoadingError: "",
  getProjectsLoadingStatus: false,

  getProjectLoadingError: "",
  getProjectLoadingStatus: false,

  dashboardLoadingStatus: false,

  postStageLoading: false,
  postStageError: "",

  getStagesLoading: false,
  getStagesError: "",
});

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PROJECTS:
      return state.merge({ projects: action.payload });
    case Types.SET_CURRENT_PROJECT:
      return state.set("currentProject", action.payload);
    case Types.SET_GET_PROJECTS_LOADING:
      return state.set("getProjectsLoadingStatus", action.payload);
    case Types.SET_GET_PROJECTS_ERROR:
      return state.set("getProjectsLoadingError", action.payload);
    case Types.SET_CREATE_PROJECT_LOADING:
      return state.set("createProjectLoadingStatus", action.payload);
    case Types.SET_CREATE_PROJECT_ERROR:
      return state.set("createProjectLoadingError", action.payload);
    case Types.SET_DASHBOARD_LOADING:
      return state.set("dashboardLoadingStatus", action.payload);
    case Types.SET_GET_PROJECT_LOADING:
      return state.set("getProjectLoadingStatus", action.payload);
    case Types.SET_GET_PROJECT_ERROR:
      return state.set("getProjectLoadingError", action.payload);
    case Types.SET_POST_STAGE_LOADING:
      return state.set("postStageLoading", action.payload);
    case Types.SET_POST_STAGE_ERROR:
      return state.set("postStageError", action.payload);
    case Types.SET_GET_STAGES_LOADING:
      return state.set("getStagesLoading", action.payload);
    case Types.SET_GET_STAGES_ERROR:
      return state.set("getStagesError", action.payload);
    case Types.SET_STAGES:
      return state.set("stages", action.payload);
    default:
      return state;
  }
}

export default projectReducer;
