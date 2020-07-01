import { put, call, select } from "redux-saga/effects";
import { joinSessionApi, postProfileApi } from "../../services/apis";
import apiWrapper from "../../services/apis/apiWrapper";
import { push } from "connected-react-router";
import { actions, selectors } from "../../stores";

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* joinSession({ payload }) {
  try {
    const body = { accessCode: payload };
    yield put(actions.userSession.setJoinSessionLoading(true));
    yield put(actions.userSession.setJoinSessionError(""));
    const currentSession = yield select(selectors.userSession.getJoinSession);

    if (currentSession.accessCode === payload) {
      yield put(push(`/session/${currentSession.projectId}`));
    } else {
      const result = yield call(apiWrapper, {
        api: joinSessionApi,
        body,
      });
      yield put(actions.userSession.setJoinSession(result));

      const createProfileBody = {
        id: result.id,
        projectId: result.projectId,
      };

      const createResult = yield call(apiWrapper, {
        api: postProfileApi,
        body: createProfileBody,
      });
      yield put(actions.userSession.setJoinSession(result));
      yield put(push(`/session/${result.projectId}`));
    }
  } catch (e) {
    yield put(actions.userSession.setJoinSessionError(e.message));
  } finally {
    yield put(actions.userSession.setJoinSessionLoading(false));
  }
}
