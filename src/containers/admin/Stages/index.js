import { connect } from "react-redux";

import { actions, selectors } from "../../../stores";

import Stages from "./Stages";

const mapStateToProps = (state) => ({
  postStageLoading: selectors.project.getPostStageLoading(state),
  postStageError: selectors.project.getPostStageError(state),
});
const mapDispatchToProps = (dispatch) => ({
  postStageHandler: (payload) => dispatch(actions.project.postStage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stages);
