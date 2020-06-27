const Types = {
  SET_JOIN_SESSION_ERROR: "userSession.SET_JOIN_SESSION_ERROR",
  SET_JOIN_SESSION_LOADING: "userSession.SET_JOIN_SESSION_LOADING",
  SET_JOIN_SESSION: "userSession.SET_JOIN_SESSION",

  SET_CURRENT_PROJECT: "userSession.SET_CURRENT_PROJECT",
  SET_GET_PROJECT_LOADING: "userSession.SET_GET_PROJECT_LOADING",
  SET_GET_PROJECT_ERROR: "userSession.SET_GET_PROJECT_ERROR",

  SET_PROFILE: "userSession.SET_PROFILE",
  SET_UPDATE_PROFILE_LOADING: "userSession.SET_UPDATE_PROFILE_LOADING",
  SET_UPDATE_PROFILE_ERROR: "userSession.SET_UPDATE_PROFILE_ERROR",

  SET_GET_PROFILE_LOADING: "userSession.SET_GET_PROFILE_LOADING",
  SET_GET_PROFILE_ERROR: "userSesion.SET_GET_PROFILE_ERROR",

  //saga
  JOIN_SESSION_REQUEST: "userSession.JOIN_SESSION_REQUEST",
  GET_PROJECT: "userSession.GET_PROJECT",
  UPDATE_PROFILE: "userSession.UPDATE_PROFILE,",
  GET_PROFILE: "userSession.GET_PROFILE",
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
  setCurrentProject: (payload: object) => ({
    type: Types.SET_CURRENT_PROJECT,
    payload: payload,
  }),
  setGetProjectError: (errorMsg: string) => ({
    type: Types.SET_GET_PROJECT_ERROR,
    payload: errorMsg,
  }),
  setGetProjectLoading: (isLoading: boolean) => ({
    type: Types.SET_GET_PROJECT_LOADING,
    payload: isLoading,
  }),

  setUpdateProfile: (payload: object) => ({
    type: Types.SET_PROFILE,
    payload: payload,
  }),
  setUpdateProfileError: (errorMsg: string) => ({
    type: Types.SET_UPDATE_PROFILE_ERROR,
    payload: errorMsg,
  }),
  setUpdateProfileLoading: (isLoading: boolean) => ({
    type: Types.SET_UPDATE_PROFILE_LOADING,
    payload: isLoading,
  }),

  setProfile: (payload: object) => ({
    type: Types.SET_PROFILE,
    payload: payload,
  }),
  setGetProfileError: (errorMsg: string) => ({
    type: Types.SET_GET_PROFILE_ERROR,
    payload: errorMsg,
  }),
  setGetProfileLoading: (isLoading: boolean) => ({
    type: Types.SET_GET_PROFILE_LOADING,
    payload: isLoading,
  }),

  //sagas
  joinSessionRequest: (payload: string) => ({
    type: Types.JOIN_SESSION_REQUEST,
    payload,
  }),
  getProject: (payload: object) => ({
    type: Types.GET_PROJECT,
    payload,
  }),
  updateProfile: (payload: object) => ({
    type: Types.UPDATE_PROFILE,
    payload,
  }),
  getProfile: () => ({
    type: Types.GET_PROFILE,
  }),
};

export { Types, Actions };
