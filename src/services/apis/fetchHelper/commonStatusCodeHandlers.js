import { put } from "redux-saga/effects";

import Logger from "../../../helpers/Logger";
import { actions } from "../../../stores";

const logger = Logger.create("eatsy fetch status handle");
const UNEXPECTED_ERROR_MSG =
  "Something went wrong when we tried to fetch the data. Please try again in later";
const TOKEN_INVALID_MSG = "Please log in to continue.";

const handleInvalidAuthData = function* () {
  yield put(actions.auth.logoutRequest());
  throw new Error(TOKEN_INVALID_MSG);
};

const createUnexpectedErrorHandler = (code) => {
  return function* handleUnexpectedError({ response }) {
    const result = yield response.json();
    logger.error(`API return ${code} code`, result);
    throw new Error(UNEXPECTED_ERROR_MSG);
  };
};

export default {
  //"400": createUnexpectedErrorHandler(400),
  "401": handleInvalidAuthData,
  "403": handleInvalidAuthData,
  "404": createUnexpectedErrorHandler(404),
  "500": createUnexpectedErrorHandler(500),
};
