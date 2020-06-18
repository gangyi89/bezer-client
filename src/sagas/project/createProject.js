import { put, call } from "redux-saga/effects";
import { createProjectApi } from "../../services/apis";
import apiWrapper from "../../services/apis/apiWrapper";
import { push } from "connected-react-router";
import { actions } from "../../stores";

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* createProject({ payload }) {
  try {
    const { name } = payload;
    const body = { name: name };
    yield put(actions.project.setCreateProjectLoading(true));
    yield put(actions.project.setCreateProjectError(""));
    const result = yield call(apiWrapper, {
      api: createProjectApi,
      body,
    });
    yield put(push(`/dashboard/${result.id}`));
  } catch (e) {
    yield put(actions.project.setCreateProjectError(e.message));
  } finally {
    yield put(actions.project.setCreateProjectLoading(false));
  }
}
