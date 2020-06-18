import { connect } from "react-redux";

import { selectors } from "../../../stores";

import ProjectSelector from "./ProjectSelector";

const mapStateToProps = (state) => ({
  currentProject: selectors.project.currentProject(state),
  projects: selectors.project.projects(state),
});

export default connect(mapStateToProps)(ProjectSelector);
