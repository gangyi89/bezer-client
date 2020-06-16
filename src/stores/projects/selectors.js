import * as R from "ramda";

const storeName = "auth";

export const getAuthKey = R.pathOr(undefined, [
  storeName,
  "userSession",
  "idToken",
  "jwtToken",
]);

export const getRefreshToken = R.pathOr(undefined, [
  storeName,
  "userSession",
  "refreshToken",
  "token",
]);
export const getSignInError = R.pathOr(undefined, [
  storeName,
  "signInLoadingError",
]);
export const getSignInLoading = R.pathOr(undefined, [
  storeName,
  "signInLoadingStatus",
]);
