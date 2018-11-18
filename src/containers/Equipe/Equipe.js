import React from 'react'
import { Container } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const Equipe = () =>
  <div className='equipe'>
    <Container className='container'>
      <h2><FormattedMessage id='equipe.title' /></h2>
      <div class='ui grid'>
        <div class='six wide column'>
          <img src='img/test.jpg' alt="" />
        </div>
        <div class='ten wide column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper commodo nisi vel commodo. Suspendisse gravida purus risus, id aliquet elit vulputate et. Vivamus ut dignissim lacus. Suspendisse at pulvinar justo, et sagittis erat. Praesent tincidunt urna lorem, vitae euismod lectus pulvinar ut. Morbi tincidunt porta sem, et vestibulum nunc congue eget. Donec vitae tortor vitae leo pretium pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer dictum porttitor suscipit. Ut blandit, ex vel ultricies tempus, elit urna fermentum arcu, ac suscipit mi dui ut dui. Ut rhoncus justo quis justo tempus pulvinar. Proin malesuada blandit ante, a pulvinar eros vulputate ac. Cras ac ornare lectus.</p>
        </div>
      </div>
    </Container>
  </div>

export default Equipe