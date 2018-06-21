import { SET_USER_INFO } from '../constants'

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
