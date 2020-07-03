import { connect } from "react-redux";

import { actions, selectors } from "../../../stores";

import Stages from "./Stages";

const mapStateToProps = (state) => ({
  postStageLoading: selectors.project.getPostStageLoading(state),
  postStageError: selectors.project.getPostStageError(state),
  getStagesLoading: selectors.project.getStagesLoading(state),
  getStagesError: selectors.project.getStagesError(state),
  stages: selectors.project.getStages(state),
});
const mapDispatchToProps = (dispatch) => ({
  postStageHandler: (payload) => dispatch(actions.project.postStage(payload)),
  getStagesHandler: () => dispatch(actions.project.getStages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stages);
