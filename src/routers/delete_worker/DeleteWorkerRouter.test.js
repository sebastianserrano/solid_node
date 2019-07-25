const request = require('supertest')
const express = require('express')
const sandbox = require('sinon').createSandbox()
const Database = require('@database/Database.js')

const DeleteWorkerRouter = require('./DeleteWorkerRouter.js')

const app = express()
app.use(express.json())
app.use('/delete_worker', DeleteWorkerRouter)

let deleteWorker;

describe('Delete worker router', () => {
  before(() => {
    deleteWorker = sandbox.stub(Database, 'deleteWorker')
  })

  it('should response with status 200 and correct headers upon destroying worker in database', done => {
    request(app)
      .post('/delete_worker')
      .send({
        name: 'mockedName'
      })
      .expect('Content-Type', /json/)
      .expect('Content-Length', '41')
      .expect(200, done)
  })

  it('should response with status 400 and correct headers upon bad request', done => {
    deleteWorker.throws();

    request(app)
      .post('/delete_worker')
      .send({
        name: 'mockedName'
      })
      .expect('Content-Type', /json/)
      .expect('Content-Length', '70')
      .expect(400, done)
  })

  after(() => {
    sandbox.restore()
  })
})
