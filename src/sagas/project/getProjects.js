import { put, call } from "redux-saga/effects";
import { getProjectsApi } from "../../services/apis";
import { actions } from "../../stores";
import apiWrapper from "../../services/apis/apiWrapper";

export default function* getProjects() {
  try {
    yield put(actions.project.setGetProjectsLoading(true));
    yield put(actions.project.setGetProjectsError(""));
    const data = yield call(apiWrapper, {
      api: getProjectsApi,
    });
    yield put(actions.project.setProjects(data));
  } catch ({ message }) {
    yield put(actions.project.setGetProjectsError(message));
  } finally {
    yield put(actions.project.setGetProjectsLoading(false));
  }
}
