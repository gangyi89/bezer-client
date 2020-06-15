import { takeLatest } from "redux-saga/effects";

import { types } from "../../stores";

import createProject from "./createProject";
import getProjects from "./getProjects";

function* watchCreateProjectRequest() {
  yield takeLatest(types.project.CREATE_PROJECT, createProject);
}

function* watchGetProjectsRequest() {
  yield takeLatest(types.project.GET_PROJECTS, getProjects);
}

export default [watchCreateProjectRequest(), watchGetProjectsRequest()];
