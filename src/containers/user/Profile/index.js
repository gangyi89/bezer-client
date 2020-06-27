import { connect } from "react-redux";

import { actions, selectors } from "../../../stores";

import Profile from "./Profile";

const mapStateToProps = (state) => ({
  getProfileError: selectors.userSession.getProfileError(state),
  getProfileLoading: selectors.userSession.getProfileLoading(state),
  profile: selectors.userSession.getProfile(state),

  updateProfileError: selectors.userSession.updateProfileError(state),
  updateProfileLoading: selectors.userSession.updateProfileLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProfileHandler: () => dispatch(actions.userSession.getProfile()),
  submitHandler: (profile) =>
    dispatch(actions.userSession.updateProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
