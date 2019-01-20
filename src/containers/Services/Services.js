import React from 'react'
import { string } from 'prop-types'
import { Container, Image, Accordion, Message, Grid } from 'semantic-ui-react'

import { FormattedMessage } from 'react-intl'

const agriImg = require('../../assets/agricultural.png')
const forestImg = require('../../assets/lumbering.png')

const panels = [
  {
    key: `panel-0`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={agriImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="agricultural.title1" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title1.item1" />
                  </Message.Item>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title1.item2" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-1`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={agriImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="agricultural.title2" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title2.item1" />
                  </Message.Item>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title2.item2" />
                  </Message.Item>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title2.item3" />
                  </Message.Item>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title2.item4" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-2`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={agriImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="agricultural.title3" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title3.item1" />
                  </Message.Item>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title3.item2" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-3`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={agriImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="agricultural.title4" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title4.item1" />
                  </Message.Item>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title4.item2" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-4`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={agriImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="agricultural.title5" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title5.item1" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-5`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={agriImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="agricultural.title6" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="agricultural.title6.item1" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-6`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={forestImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="lumbering.title1" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="lumbering.title1.item1" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-7`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={forestImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="lumbering.title2" />
                </h2>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-8`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={forestImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="lumbering.title3" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="lumbering.title3.item1" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-9`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={forestImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="lumbering.title4" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="lumbering.title4.item1" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  },
  {
    key: `panel-10`,
    title: {
      content: (
        <Grid celled="internally" centered>
          <Grid.Row>
            <Grid.Column width="4">
              <Image
                className="label-image"
                size="medium"
                rounded
                src={forestImg}
              />
            </Grid.Column>
            <Grid.Column width="10">
              <div className="label-description">
                <h2 className="label-title">
                  <FormattedMessage id="lumbering.title5" />
                </h2>
                <Message>
                  <Message.Item>
                    <FormattedMessage id="lumbering.title5.item1" />
                  </Message.Item>
                </Message>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }
]

const Services = ({ category }) => (
  <Container className="services inner">
    <h2 className="headline">
      <FormattedMessage id="services.title" />
    </h2>
    <h3 className="introduction">
      <p>
        <FormattedMessage id="lumbering.introduction.part1" />
      </p>
      <p>
        <FormattedMessage id="lumbering.introduction.part2" />
      </p>
      <p>
        <FormattedMessage id="lumbering.introduction.part3" />
      </p>
    </h3>
    <Accordion panels={panels} />
  </Container>
)

Services.propTypes = {
  category: string.isRequired
}

export default Services
