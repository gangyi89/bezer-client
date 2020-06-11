import { combineReducers } from "redux";

import { authReducer, authTypes, authActions, authSelectors } from "./auth";

const rootReducer = (history) =>
  combineReducers({
    auth: authReducer,
  });

const types = {
  auth: authTypes,
};

const actions = {
  auth: authActions,
};

const selectors = {
  auth: authSelectors,
};

export { rootReducer, types, actions, selectors };
