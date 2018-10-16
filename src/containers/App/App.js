import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGhost,
  faVolleyballBall,
  faGolfBall,
  faTableTennis,
  faQuidditch
} from '@fortawesome/free-solid-svg-icons'

import routes from './routes'
import Header from '../../components/Header'

// Add the icons to FontAwesome library
library.add(faGhost, faVolleyballBall, faGolfBall, faTableTennis, faQuidditch)

class App extends Component {
  render() {
    return (
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
        <div className="container" />
      </div>
    )
  }
}

export default App
