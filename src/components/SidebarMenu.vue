<template>
	<div class="full-width">
		<h2 class="d-block d-sm-none d-md-none d-lg-none sidebar-heading">Event Name</h2>
		<ul class="sidemenu">
            <li v-for="item in menu" :key="item.id">
				<div :class="item.name == selected ? 'bg-link-color' : ''" @click="selected = item.name">
					<router-link :to='{ name: item.name}'>
						<img :src="item.src" :alt="item.alt" :title="item.title" /> 
						<span><strong>{{item.name}}</strong></span>
					</router-link>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script>
export default {
  name: 'sidebar-menu',
  data () {
    return {
      selected: this.$router.currentRoute.name,
      menu: [
        {
          src: '/static/img/b-logo.svg',
          alt: 'B Logo',
          title: 'B Logo',
          name: 'Event home'
        },
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
          src: '/static/img/resources.svg',
          alt: 'Resources',
          title: 'Resources',
          name: 'Resources'
        },
        {
          src: '/static/img/twitter.svg',
          alt: 'Twitter',
          title: 'Twitter',
          name: 'Twitter'
        },
        {
          src: '/static/img/question.svg',
          alt: 'Feedback',
          title: 'Feedback',
          name: 'Feedback'
        }
      ]
    }
  }
}
</script>