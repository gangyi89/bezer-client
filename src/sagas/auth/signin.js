import { put, call } from "redux-saga/effects";
import { signIn } from "../../services/cognito";
import { replace } from "connected-react-router";
import { actions } from "../../stores";

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* signin({ payload }) {
  try {
    const { email: username, password } = payload;

    yield put(actions.auth.setSignInLoading(true));
    yield put(actions.auth.setSignInError(""));
    const result = yield call(signIn, username, password);
    yield put(actions.auth.setUserSession(result));
    yield put(replace("/projects"));
  } catch ({ message }) {
    yield put(actions.auth.setSignInError(message));
  } finally {
    yield put(actions.auth.setSignInLoading(false));
  }
}
