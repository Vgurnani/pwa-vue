<template>
    <div class="bottom-navigation on-mobile d-xl-none d-lg-none">
      <ul class="d-flex flex-wrap flex-row align-items-center justify-content-center">
        <li>
          <b-btn v-on:click="toggleSidebar"><span></span></b-btn>
        </li>
        <li v-for="item in menu" :key="item.id">
          <router-link :to='{ name: item.name}'>
            <img :src="item.src" :alt="item.alt" :title="item.title" />
          </router-link>
        </li>
      </ul>
    </div>    
</template>

<script>
export default {
  name: 'mobile-menu',
  data () {
    return {
      selected: this.$router.currentRoute.name,
      menu: [
        {
          src: '/static/img/agenda.svg',
          alt: 'Agenda',
          title: 'Agenda',
          name: 'Agenda'
        },
        {
          src: '/static/img/speaker.svg',
          alt: 'Speakers',
          title: 'Speakers',
          name: 'Speakers'
        },
        {
          src: '/static/img/sponsors.svg',
          alt: 'Sponsors',
          title: 'Sponsors',
          name: 'Sponsors'
        },
        {
          src: '/static/img/linkedin.svg',
          alt: 'Networking',
          title: 'Networking',
          name: 'Networking'
        },
        {
          src: '/static/img/question.svg',
          alt: 'Feedback',
          title: 'Feedback',
          name: 'Feedback'
        }
      ]
    }
  },
  methods: {
    toggleSidebar: function () {
      const el = document.body
      if (el.classList.contains('expanded')) {
        el.classList.remove('expanded')
      } else {
        el.classList.add('expanded')
      }
    }
  }
}
</script>
