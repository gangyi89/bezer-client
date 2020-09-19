import { connect } from "react-redux";

import { selectors, actions } from "../../../stores";

import Dashboard from "../../../layout/dashboard";

const mapStateToProps = (state) => ({
  dashboardLoading: selectors.project.dashboardLoading(state),
  currentProject: selectors.project.currentProject(state),
  projects: selectors.project.projects(state),
});
const mapDispatchToProps = (dispatch) => ({
  getProjectHandler: (payload) => dispatch(actions.project.getProject(payload)),
  getProjectsHandler: () => dispatch(actions.project.getProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
