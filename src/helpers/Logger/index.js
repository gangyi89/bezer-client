/**
 * @author: Pham Quan Khiet Luan
 * @email: pqkluan@gmail.com
 *
 * Global Logger
 * Use this instead of console.log
 */
/* eslint-disable no-undef */
/* eslint-disable no-console */

// Remove yellow box warning caused by SignalR timer
if (process.env.NODE_ENV !== "development" && console) {
  console.ignoredYellowBox = ["Setting a timer"];
}

/**
 * Use to print information log data, useful for debug purpose
 * @param {any} params
 */
const info = (...params) => {
  // We only log on dev mode
  if (process.env.NODE_ENV === "development")
    console.log("INFO LOG", ...params);
};

/**
 * Use to display error data that require attention in development process
 * Will send error data back to crash report service in production mode
 * @param {any} params
 */
const error = (...params) => {
  if (process.env.NODE_ENV === "development")
    console.warn("ERROR LOG", ...params);
  else {
    /* TODO: send error data to crash report serivce */
  }
};

/**
 * Create a logger instance with name that will be use as log prefix
 * @param {any} name
 */
const create = (name) => ({
  info: (...params) => info(`${name}:`, ...params),
  error: (...params) => error(`${name}:`, ...params),
});

const Logger = {
  create,
  info,
  error,
};

export default Logger;
