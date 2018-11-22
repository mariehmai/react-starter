import React, { Component } from 'react'
import { Container, Grid, Image, Button, Dimmer, Header } from 'semantic-ui-react'

const treeImg = require('../../assets/tree.jpg')
const machine = require('../../assets/machine.jpg')


export default class Home extends Component {
  state = { 
    activeLeft: false,
    activeRight: false,
  }

  handleShowLeft = () => this.setState({ activeLeft: true })
  handleHideLeft = () => this.setState({ activeLeft: false })
  handleShowRight = () => this.setState({ activeRight: true })
  handleHideRight = () => this.setState({ activeRight: false })

  render() {
    const { activeLeft, activeRight } = this.state
    const contentLeft = (
      <div>
        <h2>Exploitation agricole</h2>
        <Button>View</Button>
      </div>
    )
    const contentRight = (
      <div>
        <h2>Exploitation forestière</h2>
        <Button>View</Button>
      </div>
    )

    return (
      <Container className='home'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column className='home-column' >
              <Dimmer.Dimmable
                as={Image}
                dimmed={activeLeft}
                dimmer={{ active: activeLeft, content: contentLeft }}
                onMouseEnter={this.handleShowLeft}
                onMouseLeave={this.handleHideLeft}
                size='medium'
                src={treeImg}
              />
            </Grid.Column>
            <Grid.Column className='home-column'>
              <Dimmer.Dimmable
                as={Image}
                dimmed={activeRight}
                dimmer={{ active: activeRight, content: contentRight }}
                onMouseEnter={this.handleShowRight}
                onMouseLeave={this.handleHideRight}
                size='medium'
                src={machine}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
