import { put, call } from "redux-saga/effects";
import { signIn, config } from "../../services/cognito";
import Logger from "../../helpers/Logger";
// import API from "../apis/endpoints";
// import FetchHelper from "../apis/fetchHelper";
import { actions } from "../../stores";

const logger = Logger.create("login saga");

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* signin({ payload }) {
  try {
    const { email: username, password, history } = payload;

    config.set({
      region: "ap-southeast-1",
      IdentityPoolId: "",
      UserPoolId: "ap-southeast-1_ME7Urx1e3",
      ClientId: "77sufqgpreo5qnvtbklaovtrqm",
    });

    yield put(actions.auth.setSignInLoading(true));
    yield put(actions.auth.setSignInError(""));
    const result = yield call(signIn, username, password);
    logger.info("PRINT RESULTS", result);
    yield put(actions.auth.setUserSession(result));
    history.replace("/dashboard");
    yield call([history, history.push], "/dashboard");
  } catch ({ message }) {
    yield put(actions.auth.setSignInError(message));
  } finally {
    yield put(actions.auth.setSignInLoading(false));
  }
}
