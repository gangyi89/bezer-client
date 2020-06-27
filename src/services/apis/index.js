import axios from "axios";
import Logger from "../../helpers/Logger";

const logger = Logger.create("api middleware");
//const URL = "https://932ptmzg3l.execute-api.ap-southeast-1.amazonaws.com/Prod/";

const URL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((request) => {
  logger.info("API Request", request);
  return request;
});

axios.interceptors.response.use((response) => {
  logger.info("API Response:", response);
  return response;
});

function createProjectApi({ body, headers }) {
  return axios.post(URL + "projects", body, { headers: headers });
}

function getProjectsApi({ headers }) {
  return axios.get(URL + "projects", { headers: headers });
}

function getProjectApi({ headers, path }) {
  return axios.get(URL + `projects/${path.id}`, { headers: headers });
}

function joinSessionApi({ body, headers }) {
  return axios.post(URL + "join", body, { headers: headers });
}

function postProfileApi({ body, headers }) {
  return axios.post(URL + "profiles", body, { headers: headers });
}

function getProfileApi({ headers, path }) {
  return axios.get(URL + `profiles/${path.id}`, { headers: headers });
}

export {
  createProjectApi,
  getProjectsApi,
  getProjectApi,
  joinSessionApi,
  postProfileApi,
  getProfileApi,
};
