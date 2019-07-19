const request = require('supertest')
const express = require('express')
const sandbox = require('sinon').createSandbox()
const Database = require('@database/Database.js')

const AssignWorkOrderToWorkerRouter = require('./AssignWorkOrderToWorkerRouter.js')

const app = express()
app.use(express.json())
app.use('/assign_work_order', AssignWorkOrderToWorkerRouter)

let assignWorkerToWorkOrderWithIds;

describe('Assign worker to work order router', () => {
  before(() => {
    assignWorkerToWorkOrderWithIds = sandbox.stub(Database, 'assignWorkerToWorkOrderWithIds')
  })

  it('should response with status 200 and correct headers upon assigning a worker to a work order', done => {
    request(app)
      .post('/assign_work_order/mockedWorker/mockedWorkOrder')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '56')
      .expect(200, done)
  })

  it('should response with status 400 and correct headers upon bad request', done => {
    assignWorkerToWorkOrderWithIds.throws();

    request(app)
      .post('/assign_work_order/mockedWorker/mockedWorkOrder')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '84')
      .expect(400, done)
  })

  after(() => {
    sandbox.restore()
  })
})
