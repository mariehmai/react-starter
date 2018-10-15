import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import Header from '../../components/Header'
import headerSVG from '../../assets/header.jpg'

const randomTitle = 'Title'
const randomText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

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
    <img className="background" src={headerSVG} alt="" />
    <div className="container">
      <h1>{randomTitle}</h1>
      <p>{randomText}</p>
    </div>
  </div>
)

export default App
