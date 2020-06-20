import { takeLatest } from "redux-saga/effects";

import { types } from "../../stores";

import joinSession from "./joinSession";
import getProject from "./getProject";

function* watchJoinSessionRequest() {
  yield takeLatest(types.userSession.JOIN_SESSION_REQUEST, joinSession);
}

function* watchGetProjectRequest() {
  yield takeLatest(types.userSession.GET_PROJECT, getProject);
}

export default [watchJoinSessionRequest(), watchGetProjectRequest()];
