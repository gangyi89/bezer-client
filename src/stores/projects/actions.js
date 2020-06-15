const Types = {
  SET_CREATE_PROJECT_LOADING: "projects.SET_CREATE_PROJECT_LOADING",
  SET_CREATE_PROJECT_ERROR: "projects.SET_CREATE_PROJECT_ERROR",

  SET_GET_PROJECTS_LOADING: "projects.SET_GET_PROJECTS_LOADING",
  SET_GET_PROJECTS_ERROR: "projects.SET_GET_PROJECTS_ERROR",
  SET_PROJECTS: "projects.SET_PROJECTS",

  //sagas
  CREATE_PROJECT: "projects.CREATE_PROJECT",
  GET_PROJECTS: "projects.GET_PROJECTS",
};

const Actions = {
  setProjects: (payload: object) => ({
    type: Types.SET_PROJECTS,
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

  //sagas
  createProject: (payload: Object) => ({
    type: Types.CREATE_PROJECT,
    payload,
  }),
  getProjects: (payload: Object) => ({
    type: Types.GET_PROJECTS,
    payload,
  }),
};

export { Types, Actions };
