/* eslint-disable import/prefer-default-export */

import { SET_USER_INFO } from '../constants'

export function setUserInfo({ role, name }) {
  return {
    type: SET_USER_INFO,
    payload: {
      role,
      name
    }
  }
}
