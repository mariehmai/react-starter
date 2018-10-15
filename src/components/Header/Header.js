import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'

import routes from '../../containers/App/routes'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu.svg'

class Header extends Component {
  state = {
    isTop: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const top = window.scrollY
    if (top > 40) this.setState({ isTop: false })
    else this.setState({ isTop: true })
  }

  render() {
    const { history, showSideMenu } = this.props
    const { isTop } = this.state

    return (
      <div className="header">
        <div className={`header-content ${!isTop && 'fixed'}`}>
          <div className="header-app-container">
            <img src={logo} className="header-app-logo" alt="app-logo" />
            <h2 className="headline nav">
              <FormattedMessage id="app.title" />
            </h2>
          </div>
          <div className="header-nav-container">
            {routes.map((r, idx) => (
              <div key={`${r.name}-div-d`}>
                <Button
                  className="nav"
                  key={`${r.name}-btn-id`}
                  onClick={() => history.push(r.path)}
                >
                  {r.name}
                </Button>
              </div>
            ))}
            <div className="header-nav-icon-container">
              <Button onClick={showSideMenu}>
                <img className="header-nav-icon" src={menuIcon} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  history: object.isRequired,
  showSideMenu: func.isRequired
}

export default withRouter(Header)
