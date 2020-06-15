import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Login from "./components/Login/Login";
import Copyright from "./components/layout/Copyright";
import Box from "@material-ui/core/Box";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route component={Routes} />
          </Switch>
          <Box mt={8}>
            <Copyright />
          </Box>
        </>
      </Router>
    </Provider>
  );
}

export default App;
