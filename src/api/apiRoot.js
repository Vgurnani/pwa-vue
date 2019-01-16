'use strict'

import axios from 'axios'
import * as api from './apiRoutes'

const http = axios.create({
  baseURL: api.API_ROOT,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default http
