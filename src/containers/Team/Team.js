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
          <Card.Header>Thibaud Bonnevial</Card.Header>
          <Card.Meta>Noe's Bro</Card.Meta>
          <Card.Description>Thibaud is a nice guy with long hair</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Tree killer</p>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={littleBro} alt='' />
          <Card.Header>Noe Bonnevial</Card.Header>
          <Card.Meta>Thibaud's Bro</Card.Meta>
          <Card.Description>Noe is a nice guy with short hair</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Tree healer</p>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={smith} alt='' />
          <Card.Header>Smith Stan</Card.Header>
          <Card.Meta>Bonnevial's employee</Card.Meta>
          <Card.Description>Smith is a patient man working with Bonnevial's bros</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Tree lover</p>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
)

export default Team