import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Projects from "../Projects/Projects";
import Landing from "../layout/Landing";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
