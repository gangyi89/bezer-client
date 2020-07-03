import { put, call, select } from "redux-saga/effects";
import { postStageApi } from "../../services/apis";
import apiWrapper from "../../services/apis/apiWrapper";
import { push } from "connected-react-router";
import { actions, selectors } from "../../stores";

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* createProject({ payload }) {
  try {
    const currentProject = yield select(selectors.project.currentProject);
    const body = { ...payload.data, projectId: currentProject.id };
    yield put(actions.project.setPostStageLoading(true));
    yield put(actions.project.setPostStageError(""));
    const result = yield call(apiWrapper, {
      api: postStageApi,
      body,
    });
    yield call(payload.handleClose);
    yield call(payload.clearState);
    yield call(payload.updateTable, payload.data);
  } catch (e) {
    yield put(actions.project.setPostStageError(e.message));
  } finally {
    yield put(actions.project.setPostStageLoading(false));
  }
}
