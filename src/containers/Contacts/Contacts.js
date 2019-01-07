import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

import Contact from '../../components/Contact'

const contacts = [
  {
    name: 'Thibaud Bonnevial',
    phone: '06.06.06.06.06',
    email: 'thibaud.bonnevial@gmail.com',
    roles: ['', '']
  },
  {
    name: 'Noé Bonnevial',
    phone: '06.06.06.06.06',
    email: 'noe.bonnevial@gmail.com',
    roles: ['', '']
  }
]

const Contacts = () => (
  <Container className="contacts inner">
    <h2 className="headline">
      <FormattedMessage id="contact.title" />
    </h2>
    <Grid className="contacts-list" columns={contacts.length} divided>
      {contacts.map(contact => (
        <Contact
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          roles={contact.roles}
        />
      ))}
    </Grid>
  </Container>
)

export default Contacts
