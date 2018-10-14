import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'

import routes from '../../containers/App/routes'
import logo from '../../assets/logo.svg'

const Header = ({ history }) => (
  <div className="header">
    <div className="header-app-container">
      <img src={logo} className="header-app-logo" alt="app-logo" />
      <h2 className="headline nav">
        <FormattedMessage id="app.title" />
      </h2>
    </div>
    <div className="header-nav-container">
      {routes.map(r => (
        <Button
          className="nav"
          key={`${r.name}-id`}
          onClick={() => history.push(r.path)}
        >
          {r.name}
        </Button>
      ))}
    </div>
  </div>
)

Header.propTypes = {
  history: object.isRequired
}

export default withRouter(Header)
