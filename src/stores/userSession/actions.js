const Types = {
  SET_JOIN_SESSION_ERROR: "userSession.SET_JOIN_SESSION_ERROR",
  SET_JOIN_SESSION_LOADING: "userSession.SET_JOIN_SESSION_LOADING",
  SET_JOIN_SESSION: "userSession.SET_JOIN_SESSION",

  //saga
  JOIN_SESSION_REQUEST: "userSession.JOIN_SESSION_REQUEST",
};

const Actions = {
  setJoinSession: (token: Object) => ({
    type: Types.SET_JOIN_SESSION,
    payload: token,
  }),
  setJoinSessionError: (errorMsg: string) => ({
    type: Types.SET_JOIN_SESSION_ERROR,
    payload: errorMsg,
  }),
  setJoinSessionLoading: (isLoading: boolean) => ({
    type: Types.SET_JOIN_SESSION_LOADING,
    payload: isLoading,
  }),

  //sagas
  joinSessionRequest: (payload: string) => ({
    type: Types.JOIN_SESSION_REQUEST,
    payload,
  }),
};

export { Types, Actions };
