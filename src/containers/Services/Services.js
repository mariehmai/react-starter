import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const Services = () => 
  <div className='services'>
    <Container className='container'>
      <h2><FormattedMessage id='services.title' /></h2>
    </Container>
  </div>

export default Services
