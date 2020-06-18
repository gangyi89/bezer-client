import React from "react";
import Routes from "./routes/Routes";
import { config } from "./services/cognito";

const region = process.env.REACT_APP_COGNITO_REGION;
const userpoolId = process.env.REACT_APP_COGNITO_USERPOOLID;
const clientId = process.env.REACT_APP_COGNITO_CLIENTID;

function App() {
  config.set({
    region: region,
    IdentityPoolId: "",
    UserPoolId: userpoolId,
    ClientId: clientId,
  });
  return <Routes />;
}

export default App;
