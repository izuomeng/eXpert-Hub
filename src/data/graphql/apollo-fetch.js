import { createApolloFetch } from 'apollo-fetch'

const uri = 'http://localhost:4000/graphql'
export default createApolloFetch({ uri })
