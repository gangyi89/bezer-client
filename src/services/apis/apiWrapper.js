import { selectors } from "../../stores";
import { select, call, put } from "redux-saga/effects";
import { replace } from "connected-react-router";
import { actions } from "../../stores";

import { refreshToken } from "../cognito";

import commonErrorHandler from "./commonErrorHandler";

function* apiWrapper({ api, body, params, path }) {
  const authKey = yield select(selectors.auth.getAuthKey);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authKey}`,
  };

  try {
    var result = yield call(api, { body, headers, params, path });
  } catch (error) {
    const statusCode = error.response.status;
    const message = error.response.data.message;

    if (statusCode === 401 && message === "The incoming token has expired") {
      // do something
      const token = yield select(selectors.auth.getRefreshToken);
      const username = yield select(selectors.auth.getUserName);
      try {
        const refreshTokenResult = yield call(refreshToken, username, token);
        yield put(actions.auth.setUserSession(refreshTokenResult));
      } catch (refreshTokenError) {
        //refresh token failed && redirecting user to login
        yield put(replace("/login"));
        return;
      }
      try {
        //re-attampt api with new authKey
        const newAuthKey = yield select(selectors.auth.getAuthKey);
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAuthKey}`,
        };
        const reattemptResult = yield call(api, { body, headers, path });
        console.log(reattemptResult);
        return yield reattemptResult.data;
      } catch (error) {
        //retry failed. no idea why
        yield call(commonErrorHandler, error);
      }
    } else {
      yield call(commonErrorHandler, error);
    }
  }

  return yield result.data;
}

export default apiWrapper;
