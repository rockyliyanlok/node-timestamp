'use strict'

const moment = require('moment-timezone')

class Timestamp {

  constructor() {

    this.format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    this.timezone = 'Asia/Shanghai'
    this.unit = 's'
  }

  setFormat(format) {
    this.format = format
  }

  setTimezone(timezone) {
    this.timezone = timezone
  }

  setUnit(unit) {
    unit = unit ? unit.toLowerCase() : 's'
    this.unit = (unit === 'ms' || unit === 's') ? unit : 's'
  }

  current() {
    return Math.floor(Date.now() / (this.unit === 'ms' ? 1 : 1000))
  }

  fromDatetimeString(datetimeString, options = {}) {
    const format = options.format ? options.format : this.format
    const timezone = options.timezone ? options.timezone : this.timezone
    const unit = options.unit ? options.unit : this.unit
    return parseInt(moment(datetimeString, format).tz(timezone).format((unit === 'ms' ? 'x' : 'X')))
  }

  toDatetimeString(datetimeTimestamp, options = {}) {
    const format = options.format ? options.format : this.format
    const timezone = options.timezone ? options.timezone : this.timezone
    return moment.unix(parseInt(datetimeTimestamp, 10)).tz(timezone).format(format)
  }

}

const timestamp = new Timestamp()

module.exports = timestamp
