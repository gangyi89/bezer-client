import { put } from "redux-saga/effects";
import { replace } from "connected-react-router";

export default function* commonErrorHandler(error) {
  const statusCode = error.response.status;
  const message = error.response.data.message;

  if (statusCode === 401) {
    //if still 401 after the initial refresh, bring user to login page
    yield put(replace("/login"));
    throw new Error("not authorized");
  } else {
    throw new Error(message);
  }
}
