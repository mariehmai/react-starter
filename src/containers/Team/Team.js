import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const bigBro = require('../../assets/thibaudbonnevial.jpg')
const littleBro = require('../../assets/noebonnevial.jpg')
const smith = require('../../assets/smith.jpg')

const Team = () => (
  <Container>
    <h2><FormattedMessage id='team.title' /></h2>
    <Card.Group centered items>
      <Card>
        <Card.Content>
          <Image src={bigBro} alt='' />
          <Card.Header><FormattedMessage id='team.first.boss' /></Card.Header>
          <Card.Meta><FormattedMessage id='team.first.boss.meta' /></Card.Meta>
          <Card.Description>Thibaud is a nice guy with long hair</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <FormattedMessage id='team.first.boss.description' />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={littleBro} alt='' />
          <Card.Header><FormattedMessage id='team.second.boss' /></Card.Header>
          <Card.Meta><FormattedMessage id='team.second.boss.meta' /></Card.Meta>
          <Card.Description>Noe is a nice guy with short hair</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <FormattedMessage id='team.second.boss.description' />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={smith} alt='' />
          <Card.Header><FormattedMessage id='team.employee' /></Card.Header>
          <Card.Meta><FormattedMessage id='team.employee.meta' /></Card.Meta>
          <Card.Description>Smith is a patient man working with Bonnevial's bros</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <FormattedMessage id='team.employee.description' />
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
)

export default Team