<template>
  <div class="speakers">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'speakers',
  data () {
    return {
      msg: 'This is speakers page'
    }
  },
  methods: {
    getSpeaker () {
      const data = {
        token: 'rRUschVZsmvTujURPjipCEEVTr2buGCf'
      }
      this.getSpeakers(data)
        .then(response => {
          console.log('response===>', response)
        })
        .catch(err => {
          console.log('err==>', err)
        })
    },
    ...mapActions(['getSpeakers'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
