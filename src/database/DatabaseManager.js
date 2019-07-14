'use strict'

const DatabaseConnection = require('./models/DatabaseConnection.js')

class DatabaseManager {
  constructor (databaseLibrary, options) {
    this.databaseLibrary = databaseLibrary(options)
  }

  initializeConnectionWithCredentials (databaseCredentials) {
    try {
      const databaseConnection = this.databaseLibrary(databaseCredentials)
      DatabaseConnection.connection = databaseConnection
    } catch (exception) {
      throw exception
    }
  }

  static getDatabaseConnection () {
    return DatabaseConnection.connection
  }
}

module.exports = DatabaseManager
