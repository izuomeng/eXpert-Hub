import gql from 'graphql-tag'
import apolloFetch from '../apollo-fetch'

export const schema = [
  `
  type Account {
    name: String!
    role: [String]!
  }
`
]

export const queries = [
  `
  account: Account
`
]

export const resolvers = {
  RootQuery: {
    async account() {
      const query = gql`
        {
          account {
            name
            role
          }
        }
      `
      const { data } = await apolloFetch({ query })
      return data.account
    }
  }
}
