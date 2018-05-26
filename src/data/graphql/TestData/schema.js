import { merge } from 'lodash'

/** * Queries ** */
import {
  schema as GetUserList,
  queries as GetUserQueries,
  resolvers as GetUserResolver,
  mutation as CreateUser
} from './index'

export const schema = [...GetUserList]

export const queries = [...GetUserQueries]

export const mutation = [...CreateUser]

export const resolvers = merge(GetUserResolver)
