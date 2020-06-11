import Logger from "../../helpers/Logger";

const logger = Logger.create("EatsyAPI");
const URL = process.env.REACT_APP_API_URL;

const REQUEST_TYPE = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

/**=================== Helper Functions Start ====================== */
// Helper function to check required value in body object
const checkBodyValue = (apiName, body = {}, keyArray = []) => {
  const isInvalid = keyArray.some((el) => body[el] === undefined);

  if (isInvalid) {
    const message = `${apiName} was called without required field`;
    logger.error(message, JSON.stringify(body));
    throw new Error(message);
  }

  return isInvalid;
};

const createRequest = ({
  endpoint,
  body,
  type,
  auth,
  headers = {},
  authKey,
}): Promise => {
  const _url = `${URL}${endpoint}`;

  logger.info("URL", _url);
  body && logger.info("BODY", body);

  return fetch(_url, {
    method: type,
    headers: new Headers({
      ...(auth !== undefined
        ? { "Content-Type": "application/x-www-form-urlencoded" }
        : { "Content-Type": "application/json" }),
      Accept: "application/json",
      ...(authKey ? { Authorization: `Bearer ${authKey}` } : {}),
      ...headers,
    }),
    // ...(body !== undefined ? { body: JSON.stringify(body) } : {})
    ...(body !== undefined
      ? auth
        ? {
            body: `grant_type=password&password=${body.password}&username=${body.username}`,
          }
        : { body: JSON.stringify(body) }
      : {}),
  });
};
/**=================== Helper Functions End ====================== */

const Auth = {
  login: ({ body = {} }): Promise => {
    checkBodyValue("login", body, ["grant_type", "username", "password"]);

    //added auth as true to handle token specific API call
    return createRequest({
      endpoint: "token",
      body,
      type: REQUEST_TYPE.POST,
      auth: "true",
    });
  },
};

export default { Auth };
