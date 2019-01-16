'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  actions,
  state
})

export default store
