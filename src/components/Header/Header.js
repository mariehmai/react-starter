import React, { Component } from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { Button } from 'semantic-ui-react'
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
      <div className='header'>
        <div className={`header-content ${!isTop && 'not-top'}`}>
          <div className='header-app-container' onClick={this.navigate('/')}>
            <img src={logo} className='header-app-logo' alt='app-logo' />
            <p className='headline nav'>
              <FormattedMessage id='app.title' />
            </p>
          </div>
          <div className='header-nav-container'>
            {routes.map(
              route =>
                route.main && (
                  <div key={`${route.intlId}-div-d`}>
                    <Button
                      color='blue'
                      className='nav'
                      onClick={() => history.push(route.path)}
                    >
                      <FormattedMessage id={route.intlId} />
                    </Button>
                  </div>
                )
            )}
            <div className='header-nav-icon-container' onClick={this.toggleMenu}>
              <img className='header-nav-icon' src={menuIcon} alt='' />
            </div>
          </div>
        </div>
        {showMenu && (
          <div className='app-menu'>
            {routes.map(route => (
              <div key={route.intlId} className='app-menu-item'>
                <div className='app-menu-item-container'>
                  <div className='app-menu-item-header'>
                    <FormattedMessage id={route.intlId} />
                    <FontAwesomeIcon icon={route.icon} size='lg' />
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
