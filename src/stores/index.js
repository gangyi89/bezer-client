import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { authReducer, authTypes, authActions, authSelectors } from "./auth";
import {
  projectReducer,
  projectTypes,
  projectActions,
  projectSelectors,
} from "./projects";

import {
  userSessionTypes,
  userSessionActions,
  userSessionReducer,
  userSessionSelectors,
} from "./userSession";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    project: projectReducer,
    userSession: userSessionReducer,
  });

const types = {
  auth: authTypes,
  project: projectTypes,
  userSession: userSessionTypes,
};

const actions = {
  auth: authActions,
  project: projectActions,
  userSession: userSessionActions,
};

const selectors = {
  auth: authSelectors,
  project: projectSelectors,
  userSession: userSessionSelectors,
};

export { rootReducer, types, actions, selectors };
