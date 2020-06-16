import { refreshToken } from "../cognito";

let isAlreadyFetchingAccessToken = false;

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = [];

function resetTokenAndReattempt(error) {}
