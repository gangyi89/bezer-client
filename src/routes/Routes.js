import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import { Landing, Login, Select, Stages, Example } from "../pages";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Select />
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
      </Router>
    );
  }
}
export default Routes;
