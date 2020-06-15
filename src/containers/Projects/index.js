import { connect } from "react-redux";

import { actions, selectors } from "../../stores";

import Projects from "./Projects";

const mapDispatchToProps = (dispatch) => ({
  createProject: (payload) => dispatch(actions.project.createProject(payload)),
});

export default connect(null, mapDispatchToProps)(Projects);
