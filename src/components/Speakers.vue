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

      <b-row class="mb-4">
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Criss Harms</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>

            <b-modal id="modal1" v-model="speakerInfo" hide-footer centered hide-header>
              <b-row class="mb-3">
                <b-col class="text-center pb-0 pb-md-5 pb-lg-5" offset-lg="1" lg="10">
                  <b-btn class="clear-btn float-right modal-close"><img src="/static/img/close-icon.png" alt="Close" title="Close" @click="hideSpeakerInfo()" /></b-btn>
                  <div class="speaker-image mt-5"><img src="/static/img/person.jpg" alt="User" title="Criss Harms" /></div>
                  <h3 class="mb-0 link-color">Criss Harms</h3>
                  <p>Chief Financial Officer,<br/> ForeScout</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis dictum mi vitae tincidunt. Etiam aliquam, neque in facilisis rutrum, nisl ligula feugiat tortor, sed pellentesque risus mi quis quam.</p>

                  <p>Sessions:</p>

                  <p><strong>19:10, 7 Februrary</strong><br/><span class="link-color">Cybersecurity is Everyone's Issue</span></p>
                </b-col>
              </b-row>
            </b-modal>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Criss Harms</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col>
          <h4 class="heading">Industry Speakers</h4>
        </b-col>
      </b-row>

      <b-row class="mb-4">
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Kumud Kalia</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Kumud Kalia</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mb-4">
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Kumud Kalia</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Kumud Kalia</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mb-4">
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Kumud Kalia</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Kumud Kalia</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mb-4">
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">James Cham</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row bordered-box pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">James Cham</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mb-4">
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Criss Harms</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="speaker-box d-flex flex-row pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
            <div class="speaker-image">
              <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
            </div>
            <div class="speaker-details">
              <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo()">Criss Harms</a></h3>
              <p>Chief Financial Officer,<br/>
              ForeScout</p>
            </div>
          </div>
        </b-col>
      </b-row>
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
      speakerInfo: false
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
    showSpeakerInfo () {
      this.speakerInfo = true
    },
    hideSpeakerInfo () {
      this.speakerInfo = false
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