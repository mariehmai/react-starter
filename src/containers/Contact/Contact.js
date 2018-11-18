import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const Contact = () => 
  <div className='about-us'>
    <Container className='container'>
      <h2><FormattedMessage id='contact.title' /></h2>
      <div class='ui four column grid'>
        <div class='row'>
          <div class='column'></div>
          <div class='column'><h2>Thibaut Bonnevial</h2></div>
          <div class='column'><h2>Noé Bonnevial</h2></div>
          <div class='column'></div>
        </div>
        <div class='row'>
          <div class='column'></div>
          <div class='column'><p>06.06.06.06.06</p></div>
          <div class='column'><p>06.06.06.06.06</p></div>
          <div class='column'></div>
        </div>
        <div class='row'>
          <div class='column'></div>
          <div class='column'><p>thibaud.bonnevial@gmail.com</p></div>
          <div class='column'><p>noe.bonnevial@gmail.com</p></div>
          <div class='column'></div>
        </div>
        <div class='row'>
          <div class='column'></div>
          <div class='column'><p>Big bro</p></div>
          <div class='column'><p>Little bro</p></div>
          <div class='column'></div>
        </div>
      </div>
    </Container>
  </div>
    

export default Contact
