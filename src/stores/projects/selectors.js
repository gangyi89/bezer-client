import * as R from "ramda";

const storeName = "project";

export const createProjectError = R.pathOr(undefined, [
  storeName,
  "createProjectLoadingError",
]);
export const createProjectLoading = R.pathOr(undefined, [
  storeName,
  "createProjectLoadingStatus",
]);
export const dashboardLoading = R.pathOr(undefined, [
  storeName,
  "dashboardLoadingStatus",
]);
export const currentProject = R.pathOr(undefined, [
  storeName,
  "currentProject",
]);
export const getProjectLoading = R.pathOr(undefined, [
  storeName,
  "getProjectsLoadingStatus",
]);
export const getProjectError = R.pathOr(undefined, [
  storeName,
  "getProjectsLoadingError",
]);
export const projects = R.pathOr(undefined, [storeName, "projects"]);

//stages
export const getPostStageLoading = R.pathOr(undefined, [
  storeName,
  "postStageLoading",
]);
export const getPostStageError = R.pathOr(undefined, [
  storeName,
  "postStageError",
]);
export const getStages = R.pathOr(undefined, [storeName, "stages"]);
export const getStagesLoading = R.pathOr(undefined, [
  storeName,
  "getStagesLoading",
]);
export const getStagesError = R.pathOr(undefined, [
  storeName,
  "getStagesError",
]);
export const deleteStageLoading = R.pathOr(undefined, [
  storeName,
  "deleteStageLoading",
]);
export const deleteStageError = R.pathOr(undefined, [
  storeName,
  "deleteStageError",
]);
