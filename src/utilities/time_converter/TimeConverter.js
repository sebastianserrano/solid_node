class TimeConverter {
  static convertEpochTimeInSecondsToDate (epochTime) {
    return new Date(epochTime * 1000) 
  }

  static convertDateToISOString (date) {
    return date.toISOString()
  }
}

module.exports = TimeConverter
