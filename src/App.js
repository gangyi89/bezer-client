import React from "react";
import Routes from "./routes/Routes";
import { config } from "./services/cognito";

function App() {
  config.set({
    region: "ap-southeast-1",
    IdentityPoolId: "",
    UserPoolId: "ap-southeast-1_ME7Urx1e3",
    ClientId: "77sufqgpreo5qnvtbklaovtrqm",
  });
  return <Routes />;
}

export default App;
