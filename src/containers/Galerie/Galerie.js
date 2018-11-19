import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'


const src = '/../../assets/noebonnevial.jpg'

const Gallery = () => (
  <Container>
    <h2><FormattedMessage id='galerie.title' /></h2>
    <Card.Group itemsPerRow={4}>
      <Card color='brown' image={src} />
      <Card color='olive' image={src} />
      <Card color='brown' image={src} />
      <Card color='olive' image={src} />
      <Card color='brown' image={src} />
      <Card color='olive' image={src} />
      <Card color='brown' image={src} />
      <Card color='olive' image={src} />
      <Card color='brown' image={src} />
      <Card color='olive' image={src} />
      <Card color='brown' image={src} />
      <Card color='olive' image={src} />
    </Card.Group>
  </Container>
)

export default Gallery