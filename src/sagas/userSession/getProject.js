import { put, call, all, delay } from "redux-saga/effects";
import { getProjectApi } from "../../services/apis";
import { actions } from "../../stores";
import apiWrapper from "../../services/apis/apiWrapper";

export default function* getProject({ payload }) {
  try {
    yield put(actions.userSession.setGetProjectLoading(true));
    yield put(actions.userSession.setGetProjectError(""));
    const path = { id: payload };
    yield put(actions.project.setDashboardLoading(true));
    const { data } = yield all({
      data: call(apiWrapper, {
        api: getProjectApi,
        path,
      }),
      result: delay(2000),
    });
    yield put(actions.userSession.setCurrentProject(data));
  } catch ({ message }) {
    yield put(actions.userSession.setGetProjectError(message));
  } finally {
    yield put(actions.userSession.setGetProjectLoading(false));
    yield put(actions.project.setDashboardLoading(false));
  }
}
