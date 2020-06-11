import { call, select, race, delay } from "redux-saga/effects";

import { selectors } from "../../../stores";
import Logger from "../../../helpers/Logger";
import commonStatusCodeHandlers from "./commonStatusCodeHandlers";

const logger = Logger.create("eatsy fetch");

const MISSING_FUNC_PARAMS_MSG =
  "Tried to run fetchHelper without apiFunc params";
const TIMEOUT_ERROR_MSG = "There was a problem connecting to the server";

const TIMEOUT_DURATION = 10000; // 10s timeout
const throwTimeoutError = () => {
  throw new Error(TIMEOUT_ERROR_MSG);
};

/**
 * Help calling API request to Eatsy server
 * - AuthKey params will be provide for apiFunc
 * - Check request timeout
 * - Default handlers for error status code
 *
 * @param {{
 *   apiFunc: Function,
 *   postBody: Object,
 *   params: Object,
 *   statusHandlers: Object,
 * }} {
 *   apiFunc,
 *   postBody,
 *   params,
 *   statusHandlers,
 * }
 * @returns
 */
function* fetchHelper({
  apiFunc,
  postBody,
  params,
  headers,
  statusHandlers = {},
  timerOutHandle = throwTimeoutError,
}: {
  apiFunc: Function,
  postBody: Object,
  params: Object,
  headers: Object,
  statusHandlers: Object,
  timerOutHandle: Function,
}) {
  if (typeof apiFunc !== "function") throw new Error(MISSING_FUNC_PARAMS_MSG);

  const authKey = yield select(selectors.auth.getAuthKey);
  const apiParams = {
    authKey,
    params,
    headers,
    body: postBody || {},
  };
  // logger.info('Params: ', apiParams);

  const { response, timeout } = yield race({
    response: call(apiFunc, apiParams),
    timeout: delay(TIMEOUT_DURATION),
  });

  // Check timeout
  if (timeout) timerOutHandle();

  const { status } = response;

  // Tried to get status code handle from the params or common case handlers
  const statusCodeHandler =
    statusHandlers[status] || commonStatusCodeHandlers[status];

  if (typeof statusCodeHandler === "function") {
    status !== 400 &&
      logger.error(
        `API ${apiFunc.name} recieve a response with status code ${status} and found a handler`
      );
    return yield call(statusCodeHandler, { response });
  }

  // No error thrown at this point, return data
  return yield response.json();
}

export default fetchHelper;
