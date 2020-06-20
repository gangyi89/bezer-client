import { all } from "redux-saga/effects";

import authSagas from "./auth";
import projectSagas from "./project";
import userSessionSagas from "./userSession";

export default function* () {
  yield all([
    ...authSagas,
    ...projectSagas,
    ...userSessionSagas,
    //add more sagas here
  ]);
}
