import { Types } from "./actions";

import Jwt from "jsonwebtoken";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  userSession: {},
  userDetails: {},

  signInLoadingError: "",
  signInLoadingStatus: false,

  // logoutLoadingError: "",
  // logoutLoadingStatus: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_USER_SESSION:
      const decoded = Jwt.decode(action.payload.idToken.jwtToken);
      return state.merge({
        userSession: action.payload,
        userDetails: decoded,
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
