import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import Router from 'vue-router'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Sponsors from '@/components/Sponsors'
import Speakers from '@/components/Speakers'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueSidebarMenu)

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
