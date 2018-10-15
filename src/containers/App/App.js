import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import Header from '../../components/Header'
import background from '../../assets/header.jpg'
import closeSVG from '../../assets/close.svg'

const randomTitle = 'Title'
const randomText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

class App extends Component {
  state = {
    showSideMenu: true
  }

  showSideMenu = () => {
    this.setState({ showSideMenu: true })
  }

  hideSideMenu = () => {
    this.setState({ showSideMenu: false })
  }

  render() {
    const { showSideMenu } = this.state

    return (
      <div className="app">
        <img className="app-background" src={background} alt="" />
        <Header showSideMenu={this.showSideMenu} />
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
        <div className={`container ${showSideMenu && 'container-small'}`}>
          <h1>{randomTitle}</h1>
          <p>{randomText}</p>
          {showSideMenu && (
            <div className="app-side-menu">
              <img
                onClick={this.hideSideMenu}
                className="app-side-menu-close-btn"
                src={closeSVG}
                alt=""
              />
              <div className="app-side-menu-list">
                {routes.map((r, idx) => (
                  <div key={r.name} className="app-side-menu-item">
                    <div key={r.name} className="app-side-menu-item-header ">
                      {r.name}
                    </div>
                    {routes[idx].submenu &&
                      routes[idx].submenu.map(subroute => (
                        <div
                          key={subroute.name}
                          className="app-side-menu-list-item link"
                        >
                          {subroute.name}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
