import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const contents = [
  {
    id: 0,
    content: 'agricultural'
  },
  {
    id: 1,
    content: 'lumbering'
  }
]

class Home extends Component {
  changeContent = content => event => {
    // TODO: change global state
  }

  render() {
    return (
      <div className="container home">
        <div className="home-column left">
          <Button
            basic
            inverted
            color="olive"
            onClick={this.changeContent('agricultural')}
          >
            <h1 className="title">
              <FormattedMessage id="home.exploitation.agricole" />
            </h1>
          </Button>
        </div>
        <div className="home-column right">
          <Button
            basic
            inverted
            color="olive"
            onClick={this.changeContent('lumbering')}
          >
            <h1 className="title">
              <FormattedMessage id="home.exploitation.forest" />
            </h1>
          </Button>
        </div>
      </div>
    )
  }
}

export default Home
