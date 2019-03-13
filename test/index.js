'use strict'

const timestamp = require('../src')
const moment = require('moment-timezone')
const chai = require('chai')
const expect = chai.expect

const getRandomDate = () => {
  const start = new Date('1970-01-01')
  const end = new Date('2038-12-31')
  return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())))
}

const getRandomTimestamp = () => {
  const start = new Date('1970-01-01 00:00:00+00:00')
  const end = new Date('2038-12-31 00:00:00+00:00')
  return Math.floor(start.getTime() + (Math.random() * (end.getTime() - start.getTime())))
}

describe('current()', () => {
  
  it('returns current UNIX timestamp in seconds', () => {
    const result = timestamp.current()
    expect(result).to.be.a('number')
    expect(('' + result).length).to.be.at.most(10)
    expect(result).to.satisfy(timestamp => (new Date(timestamp)).getTime() > 0)
  })
  
  it('returns current UNIX timestamp in milliseconds', () => {
    const result = timestamp.current('ms')
    expect(result).to.be.a('number')
    expect(('' + result).length).to.be.at.most(13)
    expect(result).to.satisfy(timestamp => (new Date(timestamp)).getTime() > 0)
  })

})

describe('fromDatetimeString()', () => {
  
  it('returns UNIX timestamp from ISO datetime string in seconds', () => {
    const randomDate = getRandomDate()
    const randomTimestampInSecond = Math.floor(randomDate.getTime() / 1000)
    const randomDatetimeString = randomDate.toISOString()
    const result = timestamp.fromDatetimeString(randomDatetimeString)
    expect(result).to.be.a('number')
    expect(('' + result).length).to.be.at.most(10)
    expect(result).to.satisfy(timestamp => (new Date(timestamp)).getTime() > 0)
    expect(result).to.equal(randomTimestampInSecond)
  })

  it('returns UNIX timestamp from ISO datetime string in milliseconds', () => {
    const randomDate = getRandomDate()
    const randomTimestampInMillisecond = randomDate.getTime()
    const randomDatetimeString = randomDate.toISOString()
    const result = timestamp.fromDatetimeString(randomDatetimeString, { unit: 'ms' })
    expect(result).to.be.a('number')
    expect(('' + result).length).to.be.at.most(13)
    expect(result).to.satisfy(timestamp => (new Date(timestamp)).getTime() > 0)
    expect(result).to.equal(randomTimestampInMillisecond)
  })
  
  it('returns UNIX timestamp from YYYY-MM-DD datetime string in seconds', () => {
    const randomDate = getRandomDate()
    const randomDateString = `${randomDate.getFullYear()}-${randomDate.getMonth() + 1}-${randomDate.getDate()}`
    const randomTimeString = '00:00:00'
    const randomDatetime = new Date(`${randomDateString} ${randomTimeString}`)
    const randomTimestampInSecond = Math.floor(randomDatetime.getTime() / 1000)
    const format = 'YYYY-MM-DD'
    const result = timestamp.fromDatetimeString(randomDateString, { format })
    expect(result).to.be.a('number')
    expect(('' + result).length).to.be.at.most(10)
    expect(result).to.satisfy(timestamp => (new Date(timestamp)).getTime() > 0)
    expect(result).to.equal(randomTimestampInSecond)
  })

})

describe('toDatetimeString()', () => {
  
  it('returns ISO datetime string from current timestamp', () => {
    const currentDatetime = new Date()
    const offset = currentDatetime.getTimezoneOffset()
    const offsetSign = offset > 0 ? '-' : '+'
    const offsetHour = ('' + Math.abs(offset) / 60).padStart(2, '0')
    const offsetMinute = ('' + Math.abs(offset) % 60).padStart(2, '0')
    const currentTimestampInSecond = Math.floor(currentDatetime.getTime() / 1000)
    const currentDatetimeString = (new Date((currentTimestampInSecond - offset * 60) * 1000)).toISOString().slice(0, -1) + offsetSign + offsetHour + ':' + offsetMinute
    const result = timestamp.toDatetimeString(currentTimestampInSecond, { timezone: moment.tz.guess() })
    expect(result).to.equal(currentDatetimeString)
  })

  it('returns YYYY-DD-MM datetime string from current timestamp', () => {
    const currentDatetime = new Date()
    const currentTimestamp = Math.floor(currentDatetime.getTime() / 1000)
    const year = currentDatetime.getFullYear()
    const month = ('' + (currentDatetime.getMonth() + 1)).padStart(2, '0')
    const date = ('' + currentDatetime.getDate()).padStart(2, '0')
    const datetimeString = `${year}-${month}-${date}`
    const format = 'YYYY-MM-DD'
    const result = timestamp.toDatetimeString(currentTimestamp, { format, timezone: moment.tz.guess() })
    expect(result).to.equal(datetimeString)
  })

  it('returns HH:mm datetime string from current timestamp', () => {
    const currentDatetime = new Date()
    const currentTimestamp = Math.floor(currentDatetime.getTime() / 1000)
    const hour = ('' + currentDatetime.getHours()).padStart(2, '0')
    const minute = ('' + currentDatetime.getMinutes()).padStart(2, '0')
    const datetimeString = `${hour}:${minute}`
    const format = 'HH:mm'
    const result = timestamp.toDatetimeString(currentTimestamp, { format, timezone: moment.tz.guess() })
    expect(result).to.equal(datetimeString)
  })

})
