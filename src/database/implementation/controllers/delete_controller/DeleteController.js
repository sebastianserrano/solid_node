'use strict'

const Promise = require('bluebird')
const DatabaseManager = require('@database/manager/DatabaseManager.js')

class DeleteController {
  constructor () {
    this.databaseConnection = DatabaseManager.getDatabaseConnection()
  }

  performDelete (query, values) {
    return new Promise((resolve, reject) => {
      this.databaseConnection.task('Delete', async task => {
        await task.none(query, values)
      }).then(() => {
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

module.exports = DeleteController
