import { Types } from "./actions";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  userSession: {},

  signInLoadingError: "",
  signInLoadingStatus: false,

  // logoutLoadingError: "",
  // logoutLoadingStatus: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_USER_SESSION:
      return state.merge({
        userSession: action.payload,
      });
    case Types.SET_SIGNIN_LOADING:
      return state.set("signInLoadingStatus", action.payload);
    case Types.SET_SIGNIN_ERROR:
      return state.set("signInLoadingError", action.payload);
    // case Types.SET_LOGOUT_LOADING:
    //   return state.set("logoutLoadingStatus", action.payload);
    // case Types.SET_LOGOUT_ERROR:
    //   return state.set("logoutLoadingError", action.payload);
    // case Types.CLEAR_AUTH_TOKEN:
    //return initialState;
    default:
      return state;
  }
}

export default authReducer;
