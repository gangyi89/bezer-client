import { put, delay } from "redux-saga/effects";

import Logger from "../../helpers/Logger";
import { actions } from "../../stores";

const logger = Logger.create("signout saga");

export default function* signout() {
  try {
    yield put(actions.auth.setLogoutLoading(true));
    yield delay(2000);
    yield put(actions.auth.clearAuthToken());

    logger.info("LOG OUT EXECUTED");
  } catch ({ message }) {
    yield put(actions.auth.message);
  } finally {
    // yield putWithSelectCheck({
    //   selector: selectors.auth.getLogoutLoading,
    //   action: actions.auth.setLogoutLoading,
    // });
  }
}
