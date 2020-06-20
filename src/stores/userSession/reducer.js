import { Types } from "./actions";

import Immutable from "seamless-immutable";

const initialState = Immutable({
  joinSession: {},
  joinSessionError: "",
  joinSessionLoading: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_JOIN_SESSION:
      return state.set("joinSession", action.payload);
    case Types.SET_JOIN_SESSION_LOADING:
      return state.set("joinSessionLoading", action.payload);
    case Types.SET_JOIN_SESSION_ERROR:
      return state.set("joinSessionError", action.payload);
    default:
      return state;
  }
}

export default authReducer;
