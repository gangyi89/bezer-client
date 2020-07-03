import { put, call, select } from "redux-saga/effects";
import { getStagesApi } from "../../services/apis";
import { actions, selectors } from "../../stores";
import apiWrapper from "../../services/apis/apiWrapper";

export default function* getStages() {
  try {
    const currentProject = yield select(selectors.project.currentProject);
    const params = { projectId: currentProject.id };
    yield put(actions.project.setGetStagesLoading(true));
    yield put(actions.project.setGetStagesError(""));
    const data = yield call(apiWrapper, {
      api: getStagesApi,
      params,
    });

    yield put(actions.project.setStages(data));
  } catch ({ message }) {
    yield put(actions.project.setGetStagesError(message));
  } finally {
    yield put(actions.project.setGetStagesLoading(false));
  }
}
