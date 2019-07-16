const expect = require('chai').expect
const pgPromise = require('pg-promise')
const Promise = require('bluebird')
const DatabaseManager = require('@database/manager/DatabaseManager.js')
const InsertController = require('./InsertController.js')

describe('Insert controller integration', () => {
  before('Set up database connection', () => {
    const databaseCredentials = global._configuration.database
    const options = {
      promiseLib: Promise
    }

    const databaseManager = new DatabaseManager(pgPromise, options)
    databaseManager.initializeConnectionWithCredentials(databaseCredentials)
  })
  it('should insert row into database', async () => {
    const mockedName = 'mocked worker name'
    const mockedWorkerCompany = 'mocked worker company'
    const mockedEmail = 'mockedEmail@gmail.com'
    const query = 'INSERT INTO workers(worker_name, worker_company_name, worker_email) VALUES ($1, $2, $3)'

    const databaseInsert = new InsertController()
    const response = await databaseInsert.performInsert(query, [mockedName, mockedWorkerCompany, mockedEmail])

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
