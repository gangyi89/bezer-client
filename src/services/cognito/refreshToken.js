import { CognitoUser, CognitoRefreshToken } from "amazon-cognito-identity-js";

import { getUserPool } from "./config";

export default function (username, refreshToken) {
  const data = {
    RefreshToken: refreshToken,
  };

  const userData = {
    Username: username,
    Pool: getUserPool(),
  };
  const RefreshToken = new CognitoRefreshToken(data);
  const cognitoUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.refreshSession(RefreshToken, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
