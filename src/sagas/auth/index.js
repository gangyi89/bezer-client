import { takeLatest } from "redux-saga/effects";

import { types } from "../../stores";

import signin from "./signin";
import signout from "./signout";

function* watchSignInRequest() {
  yield takeLatest(types.auth.SIGNIN_REQUEST, signin);
}

function* watchSignOutRequest() {
  yield takeLatest(types.auth.LOGOUT_REQUEST, signout);
}

export default [watchSignInRequest(), watchSignOutRequest()];
