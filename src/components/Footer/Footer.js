import React from 'react'
import { FormattedMessage } from 'react-intl'

import logo from '../../assets/logo.svg'

const Footer = () => (
  <div className="footer">
    <img className="footer-app-logo" src={logo} alt="" />
    <p className="nav">
      © <FormattedMessage id="app.title" /> | MHM
    </p>
  </div>
)

export default Footer
