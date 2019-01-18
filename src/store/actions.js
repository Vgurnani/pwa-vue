'use strict'

import * as api from '../api/apiRoutes'
import http from '../api/apiRoot'

// eslint-disable-next-line no-empty-pattern
export const getSpeakers = ({}, data) => {
  const token = data.token
  return new Promise((resolve, reject) => {
    http.get(api.SPEAKERSAPI, {
      params: {
        access_token: token
      }
    })
      .then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
  })
}
