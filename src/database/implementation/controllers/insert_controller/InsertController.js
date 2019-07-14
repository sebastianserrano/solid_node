'use strict'

const Promise = require('bluebird')
const DatabaseManager = require('@database/DatabaseManager.js')

class InsertController {
  constructor () {
    this.databaseConnection = DatabaseManager.getDatabaseConnection()
  }

  performInsert (query, values) {
    return new Promise((resolve, reject) => {
      this.databaseConnection.task('Insert', async task => {
        await task.none(query, values)
      }).then(() => {
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

module.exports = InsertController
