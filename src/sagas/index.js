import { all } from "redux-saga/effects";

import authSagas from "./auth";

export default function* () {
  yield all([
    ...authSagas,
    //add more sagas here
  ]);
}
