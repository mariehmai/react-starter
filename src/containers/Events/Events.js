import React, { Component } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import logo from '../../assets/logo.svg'

const EVENTS_QUERY = gql`
  {
    events {
      id
      name
      description
      location
      date
    }
  }
`

class Events extends Component {
  showEvents = events => (
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
      <Query query={EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const events = data.events

          return (
            <div className="events">
              <Container className="container">
                {this.showEvents(events)}
              </Container>
            </div>
          )
        }}
      </Query>
    )
  }
}
export default Events
