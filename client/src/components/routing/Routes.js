import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../layout/NotFound'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Projects from '../Projects/Projects'

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
