const expect = require('chai').expect
const pgPromise = require('pg-promise')
const Promise = require('bluebird')
const DatabaseManager = require('@database/manager/DatabaseManager.js')
const DeleteController = require('./DeleteController.js')

describe('Delete controller integration', () => {
  before('Set up database connection', () => {
    const databaseCredentials = global._configuration.database
    const options = {
      promiseLib: Promise
    }

    const databaseManager = new DatabaseManager(pgPromise, options)
    databaseManager.initializeConnectionWithCredentials(databaseCredentials)
  })
  it('should delete row from database', async () => {
    const mockedName = 'mocked worker name'
    const query = 'DELETE FROM workers WHERE worker_name = $1'

    const databaseDelete = new DeleteController()
    const response = await databaseDelete.performDelete(query, [mockedName])

    expect(response).to.equal(true)
  })

  after('Close database connection', () => {
    try {
      DatabaseManager.closeDatabaseConnection()
    } catch(error) {
      console.error(error.message)
    }
  })
})
