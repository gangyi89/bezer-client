const Types = {
  SET_USER_SESSION: "auth.SET_USER_SESSION",
  SET_SIGNIN_ERROR: "auth.SET_SIGNIN_ERROR",
  SET_SIGNIN_LOADING: "auth.SET_SIGNIN_LOADING",

  //sagas
  SIGNIN_REQUEST: "auth.SIGNIN_REQUEST",
  LOGOUT_REQUEST: "auth.LOGOUT_REQUEST",
};

const Actions = {
  setUserSession: (token: Object) => ({
    type: Types.SET_USER_SESSION,
    payload: token,
  }),

  setSignInError: (errorMsg: string) => ({
    type: Types.SET_SIGNIN_ERROR,
    payload: errorMsg,
  }),
  setSignInLoading: (isLoading: boolean) => ({
    type: Types.SET_SIGNIN_LOADING,
    payload: isLoading,
  }),

  //sagas
  signInRequest: (payload: Object) => ({
    type: Types.SIGNIN_REQUEST,
    payload,
  }),
  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST,
  }),
};

export { Types, Actions };
