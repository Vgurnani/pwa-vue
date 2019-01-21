'use strict'

const languageTag = {
  data () {
    return {
      current_lang: this.$store.state.languages.es
    }
  },
  methods: {
    getTagWithLanguage (item, tag) {
      const langTag = `${tag}_${this.current_lang}`
      return item[langTag] ? item[langTag] : item[tag]
    }
  }
}

export default languageTag
