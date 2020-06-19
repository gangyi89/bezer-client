import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux-config";
import { Route, Switch } from "react-router-dom";
import { Landing, Login } from "../containers/common";
import {
  Projects,
  Stages,
  Example,
  Dashboard as AdminDashboard,
} from "../containers/admin";

const adminRoutes = () => (
  <>
    <Route exact path="/projects">
      <Projects />
    </Route>
    <Route path="/dashboard/:id">
      <AdminDashboard>
        <Switch>
          <Route path="/dashboard/:id/stages">
            <Stages />
          </Route>
          <Route path="/dashboard/:id/locations">
            <Example />
          </Route>
        </Switch>
      </AdminDashboard>
    </Route>
  </>
);

const commonRoutes = () => (
  <>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </>
);

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      {commonRoutes()}
      {adminRoutes()}
    </ConnectedRouter>
  );
};
export default Routes;
