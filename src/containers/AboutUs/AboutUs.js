import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const AboutUs = () => 
  <div className='about-us'>
    <Container className='container'>
      <h2><FormattedMessage id='aboutus.title' /></h2>
    </Container>
  </div>

export default AboutUs
