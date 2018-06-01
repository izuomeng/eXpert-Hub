const { ApolloServer, gql } = require('apollo-server')

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const users = [
  {
    name: 'Tom Hanks',
    age: 20,
    gender: 0
  },
  {
    name: 'Ware Smith',
    age: 28,
    gender: 0
  },
  {
    name: 'Cherry Dosen',
    age: 16,
    gender: 1
  },
  {
    name: 'Jekky Chan',
    age: 46,
    gender: 0
  }
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # enum Gender {
  #   MALE
  #   FEMALE
  # }

  type User {
    name: String!
    age: Int
    gender: Int
  }

  type Account {
    name: String!
    role: [String]!
  }

  type Category {
    name: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    getUserList: [User]
    getUser(name: String!): User
    getAccount: Account
    getCategoryList: [Category]
  }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    getUserList: () => users,
    getUser(parent, args) {
      const { name } = args
      return users.find(user => user.name === name)
    },
    getAccount() {
      return {
        name: 'zuomeng',
        role: ['admin']
      }
    },
    getCategoryList() {
      return [
        { name: '力学' },
        { name: '机械工程' },
        { name: '光学工程' },
        { name: '地质工程' },
        { name: '建筑学' },
        { name: '矿业工程' },
        { name: '交通运输' },
        { name: '核科学' }
      ]
    }
  }
}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
// eslint-disable-next-line
server.listen().then(({ url, ...rest }) => {
  console.info(`🚀  Server ready at ${url}`)
})
