import { put, call } from "redux-saga/effects";
import { createProjectApi } from "../../services/apis";
import apiWrapper from "../../services/apis/apiWrapper";
// import { replace } from "connected-react-router";
import Logger from "../../helpers/Logger";
import { actions } from "../../stores";

const logger = Logger.create("login saga");

//User login may fail die to user new password required
//https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password

export default function* createProject({ payload }) {
  try {
    const { name } = payload;
    const body = { name: name };
    yield put(actions.project.setCreateProjectLoading(true));
    yield put(actions.project.setCreateProjectError(""));
    const result = yield call(apiWrapper, {
      api: createProjectApi,
      body,
    });
    logger.info("PRINT RESULTS", result);
  } catch (e) {
    yield put(actions.project.setCreateProjectError(e.message));
  } finally {
    yield put(actions.project.setCreateProjectLoading(false));
  }
}
