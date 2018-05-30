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
  getAccount: Account
`
]

export const resolvers = {
  RootQuery: {
    async getAccount() {
      const query = gql`
        {
          getAccount {
            name
            role
          }
        }
      `
      const { data } = await apolloFetch({ query })
      return data.getAccount
    }
  }
}
