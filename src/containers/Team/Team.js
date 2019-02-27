import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

import MemberCard from '../../components/MemberCard'

const boss = require('../../assets/thibaudbonnevial.jpg')
const second = require('../../assets/noebonnevial.jpg')
const employee = require('../../assets/alexandretonnelier.jpg')
const employee1 = ('../../assets/""')

const teamMembers = [
  {
    nameIntlId: 'team.first.boss',
    descriptionIntlId: 'team.first.boss.description',
    titleIntlId: 'team.first.boss.title',
    img: boss
  },
  {
    nameIntlId: 'team.second.boss',
    descriptionIntlId: 'team.second.boss.description',
    titleIntlId: 'team.second.boss.title',
    img: second
  },
  {
    nameIntlId: 'team.employee',
    descriptionIntlId: 'team.employee.description',
    titleIntlId: 'team.employee.title',
    img: employee
  },
  {
    nameIntlId: 'team.employee1',
    descriptionIntlId: 'team.employee1.description',
    titleIntlId: 'team.employee1.title',
    img: employee1
  }
]

const Team = () => (
  <Container className="inner">
    <h2 className="headline">
      <FormattedMessage id="team.title" />
    </h2>
    <Card.Group centered>
      {teamMembers.map(member => (
        <MemberCard
          key={member.nameIntlId}
          name={<FormattedMessage id={member.nameIntlId} />}
          description={<FormattedMessage id={member.descriptionIntlId} />}
          content={<FormattedMessage id={member.titleIntlId} />}
          img={member.img}
        />
      ))}
    </Card.Group>
  </Container>
)

export default Team
