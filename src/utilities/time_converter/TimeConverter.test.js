const TimeConverter = require('./TimeConverter.js')
const expect = require('chai').expect

describe('Time converter', () => {
  it('convertEpochTimeInSecondsToDate should return date from epoch time in seconds', () => {
    const epochTime = 1558249206
    const date = TimeConverter.convertEpochTimeInSecondsToDate(epochTime)

    expect(date).to.be.an.instanceof(Date)
  })

  it('convertDateToISOString should return ISO converted date from date', () => {
    const date = new Date()
    const isoDate = TimeConverter.convertEpochTimeInSecondsToDate(date)

    expect(String(isoDate)).to.match(/GMT/)
  })
})
