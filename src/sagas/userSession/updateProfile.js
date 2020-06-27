import { put, call, select } from "redux-saga/effects";
import { postProfileApi } from "../../services/apis";
import apiWrapper from "../../services/apis/apiWrapper";
import { push } from "connected-react-router";
import { actions, selectors } from "../../stores";

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* updateProfile({ payload }) {
  try {
    const body = { ...payload };
    yield put(actions.userSession.setUpdateProfileLoading(true));
    yield put(actions.userSession.setUpdateProfileError(""));

    const result = yield call(apiWrapper, {
      api: postProfileApi,
      body,
    });
    const currentProject = yield select(selectors.userSession.getProjectId);
    yield put(push(`/session/${currentProject}`));
  } catch (e) {
    yield put(actions.userSession.setUpdateProfileError(e.message));
  } finally {
    yield put(actions.userSession.setUpdateProfileLoading(false));
  }
}
