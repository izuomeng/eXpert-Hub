/* eslint-disable import/prefer-default-export */

import { SET_USER_INFO } from '../constants'

export function setUserInfo(info) {
  return {
    type: SET_USER_INFO,
    payload: info
  }
}
