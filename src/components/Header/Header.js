import React, { Component } from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { Menu } from 'semantic-ui-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import routes from '../../containers/App/routes'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu.svg'
import Separator from '../../components/Separator'

class Header extends Component {
  state = {
    isTop: true,
    showMenu: false,
    activeItem: 'nav.home'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps(nextProps) {
    const route = routes.filter(
      r => r.path === nextProps.history.location.pathname
    )

    if (route.length) {
      this.setState({
        activeItem: route[0].intlId
      })
    }
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

  navigate = route => e => {
    const { history } = this.props
    history.push(route)
  }

  handleItemClick = route => e => {
    const { history } = this.props
    this.setState({ activeItem: route.intlId })
    history.push(route.path)
  }

  render() {
    const { history } = this.props
    const { isTop, showMenu, activeItem } = this.state

    return (
      <div className="header">
        {/* <div className={`header-content ${!isTop && 'not-top'}`}> */}
        {/* <div className="header-nav-container"> */}
        <div className="header-app" onClick={this.handleItemClick(routes[0])}>
          <img className="header-app-logo" src={logo} alt="app-logo" />
          <div className="header-app-text-box">
            <p className="headline">
              <FormattedMessage id="app.title" />
            </p>
            <h3 className="subtitle">
              <FormattedMessage id="app.subtitle" />
            </h3>
          </div>
        </div>
        <div className="header-menu">
          <Menu pointing secondary color="olive">
            <Menu.Menu position="right">
              {routes.map(
                route =>
                  route.main && (
                    <div key={`${route.intlId}-div-d`}>
                      <Menu.Item
                        name={route.intlId}
                        content={
                          <p className="nav">
                            <FormattedMessage id={route.intlId} />
                          </p>
                        }
                        active={activeItem === route.intlId}
                        onClick={this.handleItemClick(route)}
                      />
                    </div>
                  )
              )}
            </Menu.Menu>
          </Menu>
        </div>

        {/* <div className="header-nav-icon-container" onClick={this.toggleMenu}>
          <img className="header-nav-icon" src={menuIcon} alt="" />
        </div> */}
        {/* </div> */}
        {/* </div> */}
        {showMenu && (
          <div className="app-menu">
            {routes.map(route => (
              <div key={route.intlId} className="app-menu-item">
                <div className="app-menu-item-container">
                  <div className="app-menu-item-header">
                    <FormattedMessage id={route.intlId} />
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
