import { connect } from "react-redux";

import { actions, selectors } from "../../../stores";

import Projects from "./Projects";

const mapStateToProps = (state) => ({
  createProjectIsLoading: selectors.project.createProjectLoading(state),
  createProjectError: selectors.project.createProjectError(state),
  getProjectLoading: selectors.project.getProjectLoading(state),
  getProjectError: selectors.project.getProjectError(state),
  projects: selectors.project.projects(state),
});
const mapDispatchToProps = (dispatch) => ({
  createProjectHandler: (payload) =>
    dispatch(actions.project.createProject(payload)),
  getProjectsHandler: () => dispatch(actions.project.getProjects()),
  updateCurrentProjectHandler: (payload) =>
    dispatch(actions.project.updateCurrentProject(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
