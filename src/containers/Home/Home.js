import React, { Component } from 'react'
import { Container, Grid, Image, Button, Dimmer, Header } from 'semantic-ui-react'

const treeImg = require('../../assets/tree.jpg')
const machine = require('../../assets/machine.jpg')


export default class Home extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <h2>Exploitation agricole</h2>
        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    )

    return (
      <div className='home'>
        <Grid columns={2} divided centered>
          <Grid.Row>
            <Grid.Column className='home-column'>
              <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                size='medium'
                src={treeImg}
              />
            </Grid.Column>
            <Grid.Column className='home-column'>
              <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                size='medium'
                src={machine}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
