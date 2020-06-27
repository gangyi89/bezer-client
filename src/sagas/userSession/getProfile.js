import { put, call, all, delay, select } from "redux-saga/effects";
import { getProfileApi } from "../../services/apis";
import { actions, selectors } from "../../stores";
import apiWrapper from "../../services/apis/apiWrapper";

export default function* getProfile() {
  try {
    const sessionId = yield select(selectors.userSession.getSessionId);
    yield put(actions.userSession.setGetProfileLoading(true));
    yield put(actions.userSession.setGetProfileError(""));
    const path = { id: sessionId };
    const { data } = yield all({
      data: call(apiWrapper, {
        api: getProfileApi,
        path,
      }),
      result: delay(2000),
    });
    yield put(actions.userSession.setProfile(data));
  } catch ({ message }) {
    yield put(actions.userSession.setGetProfileError(message));
  } finally {
    yield put(actions.userSession.setGetProfileLoading(false));
  }
}
