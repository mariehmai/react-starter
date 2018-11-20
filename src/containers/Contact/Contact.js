import React from 'react'
import { Container, Grid, Menu } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

const Contact = () => (
  <Container>
    <h2><FormattedMessage id='contact.title' /></h2>
    <Grid centered>
      <Grid.Row columns={2}>
        <Grid.Column textAlign='center'>
          <Menu fluid vertical>
            <Menu.Item className='header'>Thibaud Bonnevial</Menu.Item>
            <Menu.Item>06.06.06.06.06</Menu.Item>
            <Menu.Item>thibaud.bonnevial@gmail.com</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Menu fluid vertical>
            <Menu.Item className='header'>Noe Bonnevial</Menu.Item>
            <Menu.Item>06.06.06.06.06</Menu.Item>
            <Menu.Item>noe.bonnevial@gmail.com</Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Contact
