import { all } from "redux-saga/effects";

import authSagas from "./auth";
import projectSagas from "./project";

export default function* () {
  yield all([
    ...authSagas,
    ...projectSagas,
    //add more sagas here
  ]);
}
