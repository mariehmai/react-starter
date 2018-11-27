import React from 'react'
import { Container, Image, Accordion, Message } from 'semantic-ui-react'

import { FormattedMessage } from 'react-intl'

const treeImg = require('../../assets/tree.jpg')

const panels = [
  {
    key: `panel-0`,
    title: {
      content: (
        <div className="label-container">
          <Image className="label-image" size="medium" rounded src={treeImg} />
          <div className="label-description">
            <h2 className="label-title">Service 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      )
    },
    content: {
      content: (
        <Message
          color="olive"
          header="Plus d'info"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi."
        />
      )
    }
  },
  {
    key: `panel-1`,
    title: {
      content: (
        <div className="label-container">
          <Image className="label-image" size="medium" rounded src={treeImg} />
          <div className="label-description">
            <h2 className="label-title">Service 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      )
    },
    content: {
      content: (
        <Message
          color="olive"
          header="Plus d'info"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi."
        />
      )
    }
  },
  {
    key: `panel-2`,
    title: {
      content: (
        <div className="label-container">
          <Image className="label-image" size="medium" rounded src={treeImg} />
          <div className="label-description">
            <h2 className="label-title">Service 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      )
    },
    content: {
      content: (
        <Message
          color="olive"
          header="Plus d'info"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
          elementum semper nisi."
        />
      )
    }
  }
]

const Services = () => (
  <Container className="services inner">
    <h2 className="headline">
      <FormattedMessage id="services.title" />
    </h2>
    <Accordion panels={panels} />
  </Container>
)

export default Services
