import { put, call, all, delay } from "redux-saga/effects";
import { getProjectApi } from "../../services/apis";
import { actions } from "../../stores";
import apiWrapper from "../../services/apis/apiWrapper";

export default function* getProject({ payload }) {
  try {
    yield put(actions.project.setGetProjectLoading(true));
    yield put(actions.project.setGetProjectError(""));
    const path = { id: payload };
    yield put(actions.project.setDashboardLoading(true));
    const { data } = yield all({
      data: call(apiWrapper, {
        api: getProjectApi,
        path,
      }),
      result: delay(2000),
    });
    yield put(actions.project.setCurrentProject(data));
  } catch ({ message }) {
    yield put(actions.project.setGetProjectError(message));
  } finally {
    yield put(actions.project.setGetProjectLoading(false));
    yield put(actions.project.setDashboardLoading(false));
  }
}
