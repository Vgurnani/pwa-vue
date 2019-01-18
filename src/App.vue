<template>
  <!-- <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <router-view></router-view>
      <sidebar-menu :menu="menu" />
    </main>
  </div> -->
<!--   <div id="demo" :class="[{'collapsed' : collapsed}]">
    <div class="demo">
      <router-view/>
    </div>
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" :theme="selectedTheme" />
  </div> -->
<div id="app">
  <div class="row cover-row">
    <div class="sidebar-menu">
     <sidebar-menu/>
    </div>
    <div class="main-content">
     <router-view/>
    </div>
  </div>
</div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'

export default {
  name: 'app',
  components: {
    SidebarMenu
  },
  data () {
    return {
      menu: [
        {
          href: '/speakers',
          title: 'Speakers',
          icon: '../static/img/agenda.svg'
        },
        {
          href: '/sponsors',
          title: 'Sponsors',
          icon: 'fa fa-chart-area'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import "styles/global.sass";
</style> 