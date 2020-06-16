import { put, call } from "redux-saga/effects";
import { signIn } from "../../services/cognito";
import { replace } from "connected-react-router";
import Logger from "../../helpers/Logger";
import { actions } from "../../stores";

const logger = Logger.create("login saga");

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* signin({ payload }) {
  try {
    const { email: username, password } = payload;

    yield put(actions.auth.setSignInLoading(true));
    yield put(actions.auth.setSignInError(""));
    const result = yield call(signIn, username, password);
    logger.info("PRINT RESULTS", result);
    yield put(actions.auth.setUserSession(result));
    yield put(replace("/dashboard"));
  } catch ({ message }) {
    yield put(actions.auth.setSignInError(message));
  } finally {
    yield put(actions.auth.setSignInLoading(false));
  }
}
