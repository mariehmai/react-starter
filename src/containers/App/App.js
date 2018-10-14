import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import Header from '../../components/Header'
import logo from '../../assets/logo.svg'

const App = () => (
  <div className="app">
    <Header />
    <img src={logo} className="App-logo" alt="logo" />
    <Switch>
      {routes.map(r => (
        <Route
          key={r.path}
          exact={r.exact}
          path={r.path}
          component={r.component}
        />
      ))}
    </Switch>
  </div>
)

export default App
