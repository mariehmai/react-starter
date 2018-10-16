import React, { Component } from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import routes from '../../containers/App/routes'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu.svg'
import Separator from '../../components/Separator'

class Header extends Component {
  state = {
    isTop: true,
    showMenu: false
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

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

  navigate = route => e => this.props.history.push(route)

  render() {
    const { history } = this.props
    const { isTop, showMenu } = this.state

    return (
      <div className="header">
        <div className={`header-content ${!isTop && 'fixed'}`}>
          <div className="header-app-container" onClick={this.navigate('/')}>
            <img src={logo} className="header-app-logo" alt="app-logo" />
            <h2 className="headline nav">
              <FormattedMessage id="app.title" />
            </h2>
          </div>
          <div className="header-nav-container">
            {routes.map(
              route =>
                route.main && (
                  <div key={`${route.name}-div-d`}>
                    <Button
                      className="nav"
                      key={`${route.name}-btn-id`}
                      onClick={() => history.push(route.path)}
                    >
                      {route.name}
                    </Button>
                  </div>
                )
            )}
            <div className="header-nav-icon-container">
              <Button onClick={this.toggleMenu}>
                <img className="header-nav-icon" src={menuIcon} alt="" />
              </Button>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="app-menu">
            {routes.map(route => (
              <div key={route.name} className="app-menu-item">
                <div className="app-menu-item-container">
                  <div className="app-menu-item-header">
                    {route.name}
                    <FontAwesomeIcon icon={route.icon} size="lg" />
                  </div>
                  {route.last && <Separator />}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

Header.propTypes = {
  history: object.isRequired
}

export default withRouter(Header)
