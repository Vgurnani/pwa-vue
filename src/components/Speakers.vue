<template>
  <div class="speakers">
    <b-container fluid>
      <b-row class="mb-0 mb-sm-0 mb-md-5 mb-lg-5">
        <b-col>
          <h1>{{ msg }}</h1>
        </b-col>
      </b-row>

      <div v-for="item in allSpeakers" :key="item.id">
        <b-row class="mb-3">
          <b-col>
            <h4 class="heading">{{item.title}}</h4>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6" class="mb-4" v-for="(contact, index) in item.contacts" :key="contact.id">
            <div  class="speaker-box d-flex flex-row pb-2 pl-3 pr-3 pl-sm-0 pl-md-0 pl-lg-0 pr-sm-0 pr-md-0 pr-lg-0" v-bind:class="getSpeakerClass(index, item.contacts.length)">
              <div class="speaker-image">
                <img src="/static/img/person.jpg" alt="User" title="Criss Harms" />
              </div>
              <div class="speaker-details">
                <h3 class="mb-0"><a class="custom-link" @click="showSpeakerInfo(contact)">{{getTagWithLanguage(contact, 'prefix')}} {{getTagWithLanguage(contact, 'first_name')}} {{getTagWithLanguage(contact, 'last_name')}}</a></h3>
                <p>
                  <span v-if="getTagWithLanguage(contact, 'job_title')" v-html="getTagWithLanguage(contact, 'job_title')"></span>,<br/>
                  <span v-if="getTagWithLanguage(contact, 'company')">{{getTagWithLanguage(contact, 'company')}}</span>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-modal id="modal1" v-model="showSpeakerInfoBox" hide-footer centered hide-header>
        <b-row class="mb-3">
          <b-col class="text-center pb-0 pb-md-5 pb-lg-5" offset-lg="1" lg="10">
            <b-btn class="clear-btn float-right modal-close"><img src="/static/img/close-icon.png" alt="Close" title="Close" @click="hideSpeakerInfo()" /></b-btn>
            <div class="speaker-image mt-5"><img src="/static/img/person.jpg" alt="User" title="Criss Harms" /></div>
            <h3 class="mb-0 link-color">{{getTagWithLanguage(speakerInfo, 'prefix')}} {{getTagWithLanguage(speakerInfo, 'first_name')}} {{getTagWithLanguage(speakerInfo, 'last_name')}}</h3>
            <p>
              <span v-if="getTagWithLanguage(speakerInfo, 'job_title')" v-html="getTagWithLanguage(speakerInfo, 'job_title')"></span>,<br/>
              <span v-if="getTagWithLanguage(speakerInfo, 'company')">{{getTagWithLanguage(speakerInfo, 'company')}}</span>
            </p>
            <span v-if="getTagWithLanguage(speakerInfo, 'bio')"><p v-html="getTagWithLanguage(speakerInfo, 'bio')"></p></span>

            <div v-if="sizeOfObject(speakerInfo.sessions)">
              <p>Sessions:</p>

              <div v-for="sessionArray in speakerInfo.sessions" :key="sessionArray.id">
                <p>
                  <span v-for="session in sessionArray" :key="session.id">
                    <strong>{{getFormatedDate(session.start)}}</strong><br/>
                    <span class="link-color">
                      {{getTagWithLanguage(session, 'name')}}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-modal>

    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import languageTag from '@/mixins/languageTag'
import dateHelper from '@/mixins/dateHelper'

export default {
  name: 'speakers',
  mixins: [languageTag, dateHelper],
  data () {
    return {
      msg: 'Speakers',
      allSpeakers: [],
      speakers: [],
      keyNoteSpeakers: [],
      speakerInfo: '',
      showSpeakerInfoBox: false
    }
  },
  methods: {
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
      let speakerClass = 'bordered-box'
      if (length >= 2 && (((length - 2) === index && length % 2 === 0) || (length - 1) === index)) {
        speakerClass = ''
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
        this.allSpeakers = responseData.speakers
      })
      .catch(err => {
        console.log('err==>', err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->