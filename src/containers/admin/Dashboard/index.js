import { connect } from "react-redux";

import { selectors, actions } from "../../../stores";

import Dashboard from "../../../layout/Dashboard";

const mapStateToProps = (state) => ({
  dashboardLoading: selectors.project.dashboardLoading(state),
  currentProject: selectors.project.currentProject(state),
  projects: selectors.project.projects(state),
});
const mapDispatchToProps = (dispatch) => ({
  getProjectHandler: (payload) => dispatch(actions.project.getProject(payload)),
  getProjectsHandler: (payload) => dispatch(actions.project.getProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
