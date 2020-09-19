import { put, call } from "redux-saga/effects";
import { deleteStageApi } from "../../services/apis";
import { actions } from "../../stores";
import apiWrapper from "../../services/apis/apiWrapper";

export default function* deleteStage({ payload }) {
  try {
    yield put(actions.project.setDeleteStageLoading(true));
    yield put(actions.project.setDeleteStageError(""));
    const path = { id: payload.data.id };
    yield call(apiWrapper, {
      api: deleteStageApi,
      path,
    });
    yield call(payload.handleClose);
    yield call(payload.updateTable, payload.data);
  } catch ({ message }) {
    yield put(actions.project.setDeleteStageError(message));
  } finally {
    yield put(actions.project.setDeleteStageLoading(false));
  }
}
