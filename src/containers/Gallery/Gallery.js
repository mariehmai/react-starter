import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import ImageGallery from 'react-image-gallery'

const img = require('../../assets/noebonnevial.jpg')
const thibau = require('../../assets/thibaudbonnevial.jpg')

const images = [
  {
    original: thibau,
    thumbnail: thibau
  },
  {
    original: img,
    thumbnail: img
  },
  {
    original: img,
    thumbnail: img
  }
]

const Gallery = () => (
  <Container className="gallery inner">
    <h2 className="headline">
      <FormattedMessage id="gallery.title" />
    </h2>
    <div className="gallery-slider">
      <ImageGallery items={images} />
    </div>
  </Container>
)

export default Gallery
