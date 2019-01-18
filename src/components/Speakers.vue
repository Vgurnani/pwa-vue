<template>
  <div class="speakers">
    <b-container fluid>
      <b-row class="mb-0 mb-sm-0 mb-md-5 mb-lg-5">
        <b-col>
          <h1>{{ msg }}</h1>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col>
          <h4 class="heading">Keynote Speakers</h4>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="6" class="mb-4" v-for="(item, index) in keyNoteSpeakers" :key="item.id">
          <div :class="getSpeakerClass(index, keyNoteSpeakers.length)">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo(item)">{{item.prefix}} {{item.first_name}} {{item.last_name}}</a></h3>
              <p>{{item.job_title}},<br/>
              {{item.company}}</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col>
          <h4 class="heading">Industry Speakers</h4>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="6" class="mb-4" v-for="(item, index) in speakers" :key="item.id">
          <div :class="getSpeakerClass(index, speakers.length)">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo(item)">{{item.prefix}} {{item.first_name}} {{item.last_name}}</a></h3>
              <p>{{item.job_title}},<br/>
              {{item.company}}</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-modal id="modal1" v-model="showSpeakerInfoBox" hide-footer centered hide-header>
        <b-row class="mb-3">
          <b-col class="text-center pb-0 pb-md-5 pb-lg-5" offset-lg="1" lg="10">
            <b-btn class="clear-btn float-right modal-close"><img src="/static/img/close-icon.png" alt="Close" title="Close" @click="hideSpeakerInfo()" /></b-btn>
            <div class="speaker-image mt-5"><img src="/static/img/person.jpg" alt="User" title="Criss Harms" /></div>
            <h3 class="mb-0 link-color">{{speakerInfo.prefix}} {{speakerInfo.first_name}} {{speakerInfo.last_name}}</h3>
            <p>{{speakerInfo.job_title}},<br/> {{speakerInfo.company}}</p>
            <span v-html="speakerInfo.bio"></span>

            <div v-if="sizeOfObject(speakerInfo.sessions)">
              <p>Sessions:</p>

              <div v-for="(sessionArray, date) in speakerInfo.sessions">
                <p>
                  <strong>{{date}}</strong><br/>
                  <span class="link-color" v-for="session in sessionArray">
                    {{session.name}}
                  </span>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-modal>

    </b-container>

    <div class="bottom-navigation on-mobile d-xl-none d-lg-none">
      <ul class="d-flex flex-wrap flex-row align-items-center justify-content-center">
        <li>
          <b-btn v-on:click="toggleSidebar"><span></span></b-btn>
        </li>
        <li>
          <a href="">
            <img src="/static/img/agenda.svg" alt="Agenda" title="Agenda" />
          </a>
        </li>
        <li>
          <router-link :to='{ name: "Speakers"}'>
            <img src="/static/img/speaker.svg" alt="Speakers" title="Speakers" />
          </router-link>
        </li>
        <li>
          <router-link :to='{ name: "Sponsors"}'>
            <img src="/static/img/sponsors.svg" alt="Sponsors" title="Sponsors" />
          </router-link>
        </li>
        <li>
          <a href="">
            <img src="/static/img/linkedin.svg" alt="Networking" title="Networking" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/static/img/question.svg" alt="Feedback" title="Feedback" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'speakers',
  data () {
    return {
      msg: 'Speakers',
      speakers: [],
      keyNoteSpeakers: [],
      speakerInfo: '',
      showSpeakerInfoBox: false
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
    },
    showSpeakerInfo (info) {
      this.showSpeakerInfoBox = true
      this.speakerInfo = info
    },
    hideSpeakerInfo () {
      this.showSpeakerInfoBox = false
    },
    sizeOfObject (obj) {
      let size = 0
      let key
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          size++
        }
      }
      return size
    },
    getSpeakerClass (index, length) {
      let speakerClass = 'speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0'
      if (length >= 2 && (((length - 2) === index && length % 2 === 0) || (length - 1) === index)) {
        speakerClass = 'speaker-box d-flex flex-row pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0'
      }
      return speakerClass
    },
    ...mapActions(['getSpeakers'])
  },
  mounted: function () {
    const data = {
      token: this.$store.state.access_token
    }
    this.getSpeakers(data)
      .then(response => {
        const responseData = response.data
        this.keyNoteSpeakers = responseData.speakers['keynote_speaker'].contacts
        this.speakers = responseData.speakers['speaker'].contacts
      })
      .catch(err => {
        console.log('err==>', err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->