import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { authReducer, authTypes, authActions, authSelectors } from "./auth";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
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
