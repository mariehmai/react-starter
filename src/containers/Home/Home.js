import React from 'react'
import { Container } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'

const treeImg = require('../../assets/tree.jpg')

const Home = () => 
  <div className='home'>
      <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column className='home-column'>
              <Image src={treeImg} />
            </Grid.Column>
            <Grid.Column>
              <Image src={treeImg} />
            </Grid.Column>
          </Grid.Row>
      </Grid>
  </div>

export default Home
