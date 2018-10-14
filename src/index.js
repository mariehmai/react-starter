import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import App from './containers/App/App'
import * as serviceWorker from './serviceWorker'
import './styles/theme.scss'
import { language, translations } from './translations/i18n'

// `dotenv` config
require('dotenv').config()

// GraphQL config
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API_URL
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <IntlProvider locale={language} messages={translations[language]}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
