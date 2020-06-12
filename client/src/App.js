import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from './configs/firebase.config'
import { setCurrentUser, clearCurrentUser } from './redux/auth/auth.actions'

import Routes from './components/routing/Routes'
import Login from './components/Login/Login'

function App({ currentUser, setCurrentUser, clearCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null

    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        clearCurrentUser()
      }
    })
    return () => unsubscribeFromAuth()
  }, [currentUser, setCurrentUser, clearCurrentUser])
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={Routes} />
        </Switch>
      </>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
