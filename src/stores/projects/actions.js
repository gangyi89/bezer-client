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

  SET_GET_STAGES_LOADING: "projects.SET_GET_STAGES_LOADING",
  SET_GET_STAGES_ERROR: "projects.SET_GET_STAGES_ERROR",
  SET_STAGES: "projects.SET_STAGES",

  SET_DELETE_STAGE_LOADING: "projects.SET_DELETE_STAGE_LOADING",
  SET_DELETE_STAGE_ERROR: "projects.SET_DELETE_STAGE_ERROR",

  //sagas
  CREATE_PROJECT: "projects.CREATE_PROJECT",
  GET_PROJECTS: "projects.GET_PROJECTS",
  GET_PROJECT: "projects.GET_PROJECT",
  POST_STAGE: "projects.POST_STAGE",
  GET_STAGES: "projects.GET_STAGES",
  DELETE_STAGE: "projects.DELETE_STAGE",
};

const Actions = {
  setProjects: (payload) => ({
    type: Types.SET_PROJECTS,
    payload: payload,
  }),
  setCurrentProject: (payload) => ({
    type: Types.SET_CURRENT_PROJECT,
    payload: payload,
  }),
  setCreateProjectError: (errorMsg) => ({
    type: Types.SET_CREATE_PROJECT_ERROR,
    payload: errorMsg,
  }),
  setCreateProjectLoading: (isLoading) => ({
    type: Types.SET_CREATE_PROJECT_LOADING,
    payload: isLoading,
  }),

  setGetProjectsError: (errorMsg) => ({
    type: Types.SET_GET_PROJECTS_ERROR,
    payload: errorMsg,
  }),
  setGetProjectsLoading: (isLoading) => ({
    type: Types.SET_GET_PROJECTS_LOADING,
    payload: isLoading,
  }),
  setProjectsLoading: (isLoading) => ({
    type: Types.SET_PROJECTS,
    payload: isLoading,
  }),
  setDashboardLoading: (isLoading) => ({
    type: Types.SET_DASHBOARD_LOADING,
    payload: isLoading,
  }),
  setGetProjectError: (errorMsg) => ({
    type: Types.SET_GET_PROJECT_ERROR,
    payload: errorMsg,
  }),
  setGetProjectLoading: (isLoading) => ({
    type: Types.SET_GET_PROJECT_LOADING,
    payload: isLoading,
  }),

  //Stages
  setPostStageError: (errorMsg) => ({
    type: Types.SET_POST_STAGE_ERROR,
    payload: errorMsg,
  }),
  setPostStageLoading: (isLoading) => ({
    type: Types.SET_POST_STAGE_LOADING,
    payload: isLoading,
  }),
  setGetStagesError: (errorMsg) => ({
    type: Types.SET_GET_STAGES_ERROR,
    payload: errorMsg,
  }),
  setGetStagesLoading: (isLoading) => ({
    type: Types.SET_GET_STAGES_LOADING,
    payload: isLoading,
  }),
  setStages: (payload) => ({
    type: Types.SET_STAGES,
    payload: payload,
  }),
  setDeleteStageError: (errorMsg) => ({
    type: Types.SET_DELETE_STAGE_ERROR,
    payload: errorMsg,
  }),
  setDeleteStageLoading: (isLoading) => ({
    type: Types.SET_DELETE_STAGE_LOADING,
    payload: isLoading,
  }),

  //sagas
  createProject: (payload) => ({
    type: Types.CREATE_PROJECT,
    payload,
  }),
  getProjects: () => ({
    type: Types.GET_PROJECTS,
  }),
  getProject: (payload) => ({
    type: Types.GET_PROJECT,
    payload,
  }),
  postStage: (payload) => ({
    type: Types.POST_STAGE,
    payload,
  }),
  getStages: () => ({
    type: Types.GET_STAGES,
  }),
  deleteStages: (payload) => ({
    type: Types.DELETE_STAGE,
    payload,
  }),
};

export { Types, Actions };
