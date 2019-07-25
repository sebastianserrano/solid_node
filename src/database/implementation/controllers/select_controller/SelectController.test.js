const expect = require('chai').expect
const pgPromise = require('pg-promise')
const Promise = require('bluebird')
const DatabaseManager = require('@database/manager/DatabaseManager.js')
const SelectController = require('./SelectController.js')

describe('Select controller integration', () => {
  before('Set up database connection', () => {
    const databaseCredentials = global._configuration.database
    const options = {
      promiseLib: Promise
    }

    const databaseManager = new DatabaseManager(pgPromise, options)
    databaseManager.initializeConnectionWithCredentials(databaseCredentials)
  })
  it('should select row from database', async () => {
    const mockedName = 'mocked worker name'
    const query = 'SELECT FROM workers WHERE worker_name = $1'

    const databaseSelect = new SelectController()
    const response = await databaseSelect.performSelect(query, [mockedName])

    expect(response).to.have.lengthOf(1)
  })

  after('Close database connection', () => {
    try {
      DatabaseManager.closeDatabaseConnection()
    } catch(error) {
      console.error(error.message)
    }
  })
})
