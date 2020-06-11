import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux-config";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import { Landing, Login, Projects, Stages, Example } from "../containers";

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Projects />
        </Route>
        <Route path="/dashboard/:id">
          <Dashboard>
            <Switch>
              <Route path="/dashboard/:id/stages">
                <Stages />
              </Route>
              <Route path="/dashboard/:id/locations">
                <Example />
              </Route>
            </Switch>
          </Dashboard>
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </ConnectedRouter>
    );
  }
}
export default Routes;
