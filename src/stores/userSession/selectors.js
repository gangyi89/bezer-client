import * as R from "ramda";

const storeName = "userSession";

export const getJoinSession = R.pathOr(undefined, [storeName, "joinSession"]);
export const getJoinSessionError = R.pathOr(undefined, [
  storeName,
  "joinSessionError",
]);
export const getJoinSessionLoading = R.pathOr(undefined, [
  storeName,
  "joinSessionLoading",
]);
