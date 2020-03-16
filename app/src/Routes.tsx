import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Palindromes from './pages/Palindromes'
import CashRegister from './pages/CashRegister'
import Garage from './pages/Garage'
import Ceps from './pages/Ceps'

function Routes() {
  return (
    <Switch>
      <Route path="/palindromes">
        <Palindromes />
      </Route>
      <Route path="/cash-register">
        <CashRegister />
      </Route>
      <Route path="/garage">
        <Garage />
      </Route>
      <Route path="/ceps">
        <Ceps />
      </Route>
      <Redirect to="/palindromes" />
    </Switch>
  )
}

export default Routes
