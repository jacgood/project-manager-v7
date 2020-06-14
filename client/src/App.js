import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Login from "./components/Login/Login";
import Copyright from "./components/layout/Copyright";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={Routes} />
        </Switch>
        <Box mt={8}>
          <Copyright />
        </Box>
      </>
    </Router>
  );
}

export default App;
