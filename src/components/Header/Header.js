import React from 'react'
import { withRouter } from 'react-router'
import routes from '../../containers/App/routes'

const Header = () => (
  <div className="header">
    {routes.map(r => (
      <a href={r.path}>{r.name}</a>
    ))}
  </div>
)

export default withRouter(Header)
