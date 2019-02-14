'use strict'

const Promise = require('bluebird')
const DatabaseManager = require('@database/manager/DatabaseManager.js')

class SelectController {
  constructor () {
    this.databaseConnection = DatabaseManager.getDatabaseConnection()
  }

  performSelect (query, values) {
    return new Promise((resolve, reject) => {
      this.databaseConnection.task('Select', async task => {
        const response = await task.any(query, values)
        return response
      }).then(result => {
        resolve(result)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

module.exports = SelectController
