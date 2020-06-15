import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { authReducer, authTypes, authActions, authSelectors } from "./auth";
import {
  projectReducer,
  projectTypes,
  projectActions,
  projectSelectors,
} from "./projects";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    project: projectReducer,
  });

const types = {
  auth: authTypes,
  project: projectTypes,
};

const actions = {
  auth: authActions,
  project: projectActions,
};

const selectors = {
  auth: authSelectors,
  project: projectSelectors,
};

export { rootReducer, types, actions, selectors };
