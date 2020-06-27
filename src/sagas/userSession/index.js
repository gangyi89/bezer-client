import { takeLatest } from "redux-saga/effects";

import { types } from "../../stores";

import joinSession from "./joinSession";
import getProject from "./getProject";
import updateProfile from "./updateProfile";
import getProfile from "./getProfile";

function* watchJoinSessionRequest() {
  yield takeLatest(types.userSession.JOIN_SESSION_REQUEST, joinSession);
}

function* watchGetProjectRequest() {
  yield takeLatest(types.userSession.GET_PROJECT, getProject);
}

function* watchUpdateProfileRequest() {
  yield takeLatest(types.userSession.UPDATE_PROFILE, updateProfile);
}

function* watchGetProfileRequest() {
  yield takeLatest(types.userSession.GET_PROFILE, getProfile);
}

export default [
  watchJoinSessionRequest(),
  watchGetProjectRequest(),
  watchUpdateProfileRequest(),
  watchGetProfileRequest(),
];
