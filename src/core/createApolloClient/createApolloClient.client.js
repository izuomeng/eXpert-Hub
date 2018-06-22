// @flow

import { ApolloClient } from 'apollo-client'
import { from } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import apolloLogger from 'apollo-link-logger'
import { message as Message } from 'antd'
import createCache from './createCache'

const link = from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        Message.error(message)
        console.warn(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      })
    if (networkError) {
      Message.error(`[Network error]: ${networkError}`)
      console.warn(`[Network error]: ${networkError}`)
    }
  }),
  ...(__DEV__ ? [apolloLogger] : []),
  new HttpLink({
    // uri: '/graphql'
    uri: 'http://192.168.10.137:41620/graphql'
  })
])

const cache = createCache()

export default function createApolloClient() {
  return new ApolloClient({
    link,
    cache: cache.restore(window.App.apolloState),
    queryDeduplication: true,
    connectToDevTools: true
  })
}
