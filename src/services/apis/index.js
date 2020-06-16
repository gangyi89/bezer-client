import axios from "axios";

const URL = "https://932ptmzg3l.execute-api.ap-southeast-1.amazonaws.com/Prod/";

function createProjectApi({ body, headers }) {
  return axios.post(URL + "projects", body, { headers: headers });
}

export { createProjectApi };
