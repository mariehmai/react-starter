import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const img = require('../../assets/noebonnevial.jpg')

const Gallery = () => (
  <Container>
    <h2><FormattedMessage id='gallery.title' /></h2>
    <Card.Group itemsPerRow={4}>
      <Card color='brown' image={img} />
      <Card color='olive' image={img} />
      <Card color='brown' image={img} />
      <Card color='olive' image={img} />
      <Card color='brown' image={img} />
      <Card color='olive' image={img} />
      <Card color='brown' image={img} />
      <Card color='olive' image={img} />
      <Card color='brown' image={img} />
      <Card color='olive' image={img} />
      <Card color='brown' image={img} />
      <Card color='olive' image={img} />
    </Card.Group>
  </Container>
)

export default Gallery