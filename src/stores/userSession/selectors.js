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
export const currentProject = R.pathOr(undefined, [
  storeName,
  "currentProject",
]);
export const getProjectError = R.pathOr(undefined, [
  storeName,
  "getProjectError",
]);
export const getProjectLoading = R.pathOr(undefined, [
  storeName,
  "getProjectLoading",
]);
export const getAccessCode = R.pathOr(undefined, [
  storeName,
  "joinSession",
  "accessCode",
]);
export const getProjectId = R.pathOr(undefined, [
  storeName,
  "joinSession",
  "projectId",
]);
export const getProfileError = R.pathOr(undefined, [
  storeName,
  "getProfileError",
]);
export const getProfileLoading = R.pathOr(undefined, [
  storeName,
  "getProfileLoading",
]);
export const updateProfileError = R.pathOr(undefined, [
  storeName,
  "updateProfileError",
]);
export const updateProfileLoading = R.pathOr(undefined, [
  storeName,
  "updateProfileLoading",
]);
export const getSessionId = R.pathOr(undefined, [
  storeName,
  "joinSession",
  "id",
]);
export const getProfile = R.pathOr(undefined, [storeName, "profile"]);
