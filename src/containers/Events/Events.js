import React, { Component } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'

import logo from '../../assets/logo.svg'

const events = [{
  id: 1,
  name: 'World Cup Phase 1',
  description: 'Finals France - Belgium...',
  location: 'Russia',
  date: new Date().toDateString()
},
{
  id: 2,
  name: 'World Cup Quarter',
  description: 'Finals France - Belgium...',
  location: 'Russia',
  date: new Date().toDateString()
},
{
  id: 3,
  name: 'World Cup Semi-finals',
  description: 'Finals France - Belgium...',
  location: 'Russia',
  date: new Date().toDateString()
},
{
  id: 4,
  name: 'World Cup Finals',
  description: 'Finals France - Belgium...',
  location: 'Russia',
  date: new Date().toDateString()
},
{
  id: 5,
  name: 'World Cup Semi',
  description: 'Finals France - Belgium...',
  location: 'Russia',
  date: new Date().toDateString()
},
]

class Events extends Component {
  showEvents = () => (
    <div>
      <h2 className="headline">Incoming events</h2>
      <Card.Group>
        {events.map(event => {
          const date = new Date(event.date).toDateString()
          return (
            <Card key={event.id}>
              <Card.Content>
                <Image floated="right" size="mini" src={logo} />
                <h3>{event.name}</h3>
                <Card.Meta>{date}</Card.Meta>
                <Card.Description>{event.description}</Card.Description>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </div>
  )

  render() {
    return (
      <div className="events">
        <Container className="container">
          {this.showEvents(events)}
        </Container>
      </div>
    )
  }
}
export default Events
