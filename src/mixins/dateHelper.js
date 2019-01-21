'use strict'

import dateFormat from 'dateformat'

const dateHelper = {
  methods: {
    getFormatedDate (date) {
      return dateFormat(date, 'HH:MM, d mmmm')
    }
  }
}

export default dateHelper
