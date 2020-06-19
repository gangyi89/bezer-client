import { connect } from "react-redux";

import { actions, selectors } from "../../../stores";

import SignIn from "./SignIn";

const mapStateToProps = (state) => ({
  signInError: selectors.auth.getSignInError(state),
  isLoading: selectors.auth.getSignInLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitHandler: (credentials) =>
    dispatch(actions.auth.signInRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
