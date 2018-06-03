import gql from 'graphql-tag'
import apolloFetch from '../apollo-fetch'

export const schema = [
  `
  enum Gender {
    MALE
    FEMALE
  }
  type User {
    name: String!
    age: Int
    gender: Int
  }
`
]

export const queries = [
  `
  getUserList: [User]
  getUser(name: String!): User
`
]

export const mutation = [
  `
  createUser(
    name: String!
    age: Int
    gender: Int
  ): User
`
]

export const resolvers = {
  RootQuery: {
    async getUserList() {
      const query = gql`
        {
          getUserList {
            name
            age
            gender
          }
        }
      `
      const { data } = await apolloFetch({ query })
      return data.getUserList
    },
    getUser() {
      return { name: 'X', age: 15, gender: 0 }
    }
  },
  Mutation: {
    async createUser() {
      return {
        name: 'New User',
        age: 100,
        gender: 1
      }
    }
  }
}
