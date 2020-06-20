import { connect } from "react-redux";

import { actions, selectors } from "../../../stores";

import Landing from "./Landing";

const mapStateToProps = (state) => ({
  joinSessionError: selectors.userSession.getJoinSessionError(state),
  isLoading: selectors.userSession.getJoinSessionLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitHandler: (accessCode) =>
    dispatch(actions.userSession.joinSessionRequest(accessCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
