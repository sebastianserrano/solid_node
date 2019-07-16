const sandbox = require('sinon').createSandbox()
const expect = require('chai').expect
const pgPromise = require('pg-promise')
const DatabaseConnection = require('@database/models/DatabaseConnection.js')
const DatabaseManager = require('./DatabaseManager.js')

describe('Database manager', () => {
  it('should set \'Database Connection\' model upon successful connection', () => {
    const databaseCredentials = global._configuration.database
    const options = {
      promiseLib: Promise
    }

    const databaseManager = new DatabaseManager(pgPromise, options)
    databaseManager.initializeConnectionWithCredentials(databaseCredentials)

    expect(DatabaseConnection.connection).to.be.a('object').to.have.property('connect')
  })

  it('\'getDatabaseConnection\' should return the connection property of \'Database Connection\' model', () => {
    const connection = DatabaseManager.getDatabaseConnection()

    expect(connection).to.be.a('object')
  })

  it('database connection should have all database helper properties', () => {
    const connection = DatabaseManager.getDatabaseConnection()

    expect(connection).to.be.a('object').to.have.property('connect')
    expect(connection).to.be.a('object').to.have.property('query')
    expect(connection).to.be.a('object').to.have.property('none')
    expect(connection).to.be.a('object').to.have.property('one')
    expect(connection).to.be.a('object').to.have.property('many')
    expect(connection).to.be.a('object').to.have.property('oneOrNone')
    expect(connection).to.be.a('object').to.have.property('manyOrNone')
    expect(connection).to.be.a('object').to.have.property('any')
    expect(connection).to.be.a('object').to.have.property('result')
    expect(connection).to.be.a('object').to.have.property('multiResult')
    expect(connection).to.be.a('object').to.have.property('multi')
    expect(connection).to.be.a('object').to.have.property('stream')
    expect(connection).to.be.a('object').to.have.property('func')
    expect(connection).to.be.a('object').to.have.property('proc')
    expect(connection).to.be.a('object').to.have.property('map')
    expect(connection).to.be.a('object').to.have.property('each')
    expect(connection).to.be.a('object').to.have.property('task')
    expect(connection).to.be.a('object').to.have.property('taskIf')
    expect(connection).to.be.a('object').to.have.property('tx')
    expect(connection).to.be.a('object').to.have.property('txIf')
  })

  it('should set \'Database Connection\' property to empty object upon closing the database connection', () => {
    try {
      DatabaseManager.closeDatabaseConnection()
      expect(DatabaseConnection.connection).to.be.empty
    } catch(error) {
      console.error(error)
    }
  })
})
