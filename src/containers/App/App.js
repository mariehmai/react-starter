import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import Header from '../../components/Header'

const App = () => (
  <div className="app">
    <Header />
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
