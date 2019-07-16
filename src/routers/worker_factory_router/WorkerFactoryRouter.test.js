const request = require('supertest')
const express = require('express')
const sandbox = require('sinon').createSandbox()
const Database = require('@database/Database.js')

const WorkerFactory = require('@factories/worker_factory/WorkerFactory.js')
const WorkerFactoryRouter = require('./WorkerFactoryRouter.js')

const app = express()
app.use(express.json())
app.use('/create_worker', WorkerFactoryRouter)

let createWorker;

describe('Worker factory router', () => {
  before(() => {
    sandbox.stub(WorkerFactory, 'create')
    createWorker = sandbox.stub(Database, 'createWorker')
  })

  it('should response with status 200 and correct headers upon creation of worker in database', done => {
    request(app)
      .post('/create_worker')
      .send({
        name: 'mockedName',
        companyName: 'mockedCompanyName',
        email: 'mockedEmail' 
      })
      .expect('Content-Type', /json/)
      .expect('Content-Length', '41')
      .expect(200, done)
  })

  it('should response with status 400 and correct headers upon bad request', done => {
    createWorker.throws();

    request(app)
      .post('/create_worker')
      .send({
        name: 'mockedName',
        companyName: 'mockedCompanyName',
        email: 'mockedEmail' 
      })
      .expect('Content-Type', /json/)
      .expect('Content-Length', '70')
      .expect(400, done)
  })

  after(() => {
    sandbox.restore()
  })
})
