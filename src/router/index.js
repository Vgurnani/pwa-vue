import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Sponsors from '@/components/Sponsors'
import Speakers from '@/components/Speakers'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/speakers',
      name: 'Speakers',
      component: Speakers
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    }
  ]
})
