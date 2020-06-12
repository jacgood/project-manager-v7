import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './components/routing/Routes'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={Routes} />
        </Switch>
        {/* <Projects /> */}
      </>
    </Router>
  )
}

export default App
