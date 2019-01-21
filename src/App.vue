<template>
<div id="app">
  <div class="row cover-row">
    <div class="sidebar-menu">
     <sidebar-menu/>
    </div>
    <div class="main-content">
     <router-view/>
     <mobile-menu/>
    </div>
  </div>
</div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import MobileMenu from '@/components/MobileMenu.vue'

export default {
  name: 'app',
  components: {
    SidebarMenu, MobileMenu
  }
}
</script>

<style lang="sass">
  @import "styles/global.sass";
</style> 