import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const Galerie = () =>
  <div className='galerie'>
    <Container className='container'>
      <h2><FormattedMessage id='galerie.title' /></h2>
      <div class="ui three column grid">
        <div class="column">
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
        </div>
        <div class="column">
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
        </div>
        <div class="column">
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
          <div class="ui segment"><img /></div>
        </div>
      </div>
    </Container>
    
  </div>

export default Galerie