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
  <div id="demo" :class="[{'collapsed' : collapsed}]">
    <div class="demo">
      <router-view/>
    </div>
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" :theme="selectedTheme" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menu: [
        {
          href: '/speakers',
          title: 'Speakers',
          icon: 'fa fa-user'
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

<style>
body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}

#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}

.demo {
  padding: 50px;
}

.badge-danger {
  background-color: #ff2a2a;
  color: #fff;
}
</style>
