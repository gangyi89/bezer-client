import { put } from "redux-saga/effects";
import { replace } from "connected-react-router";

export default function* commonErrorHandler(error) {
  const statusCode = error.response.status;

  if (statusCode === 401) {
    //if still 401 after the initial refresh, bring user to login page
    yield put(replace("/login"));
    throw new Error("not authorized");
  } else {
    throw new Error("common error, we need to fix it");
  }
}
