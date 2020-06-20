import { takeLatest } from "redux-saga/effects";

import { types } from "../../stores";

import joinSession from "./joinSession";

function* watchJoinSessionRequest() {
  yield takeLatest(types.userSession.JOIN_SESSION_REQUEST, joinSession);
}

export default [watchJoinSessionRequest()];
