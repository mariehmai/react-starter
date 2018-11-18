import React from 'react'
import { Container } from 'semantic-ui-react'

const Home = () => 
  <div className='home'>
    <Container>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img src='../img/test.jpg' alt='' />
          <p>Exploitation forestière</p>
          <p></p>
        </div>
        <div class="column">
          <p></p>
          <p>Exploitation agricole</p>
          <p></p>
        </div>
      </div>
      <div class="ui vertical divider">
      </div>
    </div>
    </Container>
  </div>

export default Home
