'use strict'

const DatabaseConnection = require('@database/models/DatabaseConnection.js')

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

  static closeDatabaseConnection () {
    try {
      const databaseConnection = DatabaseConnection.connection
      databaseConnection.$pool.end()

      DatabaseConnection.connection = {}
    } catch(error) {
      throw new Error('Database connection could not be closed')
    }
  }
}

module.exports = DatabaseManager
