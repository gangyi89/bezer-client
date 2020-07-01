const Types = {
  SET_CREATE_PROJECT_LOADING: "projects.SET_CREATE_PROJECT_LOADING",
  SET_CREATE_PROJECT_ERROR: "projects.SET_CREATE_PROJECT_ERROR",

  SET_GET_PROJECTS_LOADING: "projects.SET_GET_PROJECTS_LOADING",
  SET_GET_PROJECTS_ERROR: "projects.SET_GET_PROJECTS_ERROR",
  SET_PROJECTS: "projects.SET_PROJECTS",
  SET_CURRENT_PROJECT: "projects.SET_CURRENT_PROJECT",

  SET_DASHBOARD_LOADING: "projects.SET_DASHBOARD_LOADING",

  SET_GET_PROJECT_LOADING: "projects.SET_GET_PROJECT_LOADING",
  SET_GET_PROJECT_ERROR: "projects.SET_GET_PROJECT_ERROR",

  SET_POST_STAGE_LOADING: "projects.SET_POST_STAGE_LOADING",
  SET_POST_STAGE_ERROR: "projects.SET_POST_STAGE_ERROR",

  //sagas
  CREATE_PROJECT: "projects.CREATE_PROJECT",
  GET_PROJECTS: "projects.GET_PROJECTS",
  GET_PROJECT: "projects.GET_PROJECT",
  POST_STAGE: "projects.POST_STAGE",
};

const Actions = {
  setProjects: (payload: object) => ({
    type: Types.SET_PROJECTS,
    payload: payload,
  }),
  setCurrentProject: (payload: object) => ({
    type: Types.SET_CURRENT_PROJECT,
    payload: payload,
  }),
  setCreateProjectError: (errorMsg: string) => ({
    type: Types.SET_CREATE_PROJECT_ERROR,
    payload: errorMsg,
  }),
  setCreateProjectLoading: (isLoading: boolean) => ({
    type: Types.SET_CREATE_PROJECT_LOADING,
    payload: isLoading,
  }),

  setGetProjectsError: (errorMsg: string) => ({
    type: Types.SET_GET_PROJECTS_ERROR,
    payload: errorMsg,
  }),
  setGetProjectsLoading: (isLoading: boolean) => ({
    type: Types.SET_GET_PROJECTS_LOADING,
    payload: isLoading,
  }),
  setProjectsLoading: (isLoading: boolean) => ({
    type: Types.SET_PROJECTS,
    payload: isLoading,
  }),
  setDashboardLoading: (isLoading: boolean) => ({
    type: Types.SET_DASHBOARD_LOADING,
    payload: isLoading,
  }),
  setGetProjectError: (errorMsg: string) => ({
    type: Types.SET_GET_PROJECT_ERROR,
    payload: errorMsg,
  }),
  setGetProjectLoading: (isLoading: boolean) => ({
    type: Types.SET_GET_PROJECT_LOADING,
    payload: isLoading,
  }),
  setPostStageError: (errorMsg: string) => ({
    type: Types.SET_POST_STAGE_ERROR,
    payload: errorMsg,
  }),
  setPostStageLoading: (isLoading: boolean) => ({
    type: Types.SET_POST_STAGE_LOADING,
    payload: isLoading,
  }),

  //sagas
  createProject: (payload: Object) => ({
    type: Types.CREATE_PROJECT,
    payload,
  }),
  getProjects: () => ({
    type: Types.GET_PROJECTS,
  }),
  getProject: (payload: object) => ({
    type: Types.GET_PROJECT,
    payload,
  }),
  postStage: (payload: object) => ({
    type: Types.POST_STAGE,
    payload,
  }),
};

export { Types, Actions };
