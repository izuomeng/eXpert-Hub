import gql from 'graphql-tag'

export const schema = [
  `
  type Account {
    name: String!
    role: String!
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
      // eslint-disable-next-line
      const query = gql`
        {
          account {
            name
            role
          }
        }
      `
      // const { data } = await apolloFetch({ query })
      // return data.account
      return {
        name: 'cyf',
        role: '123'
      }
    }
  }
}
