import { createApolloFetch } from 'apollo-fetch'

const uri = 'http://47.95.224.52:4000/graphql'
export default createApolloFetch({ uri })
