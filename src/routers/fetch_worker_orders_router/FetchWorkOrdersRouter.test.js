const request = require('supertest')
const express = require('express')
const sandbox = require('sinon').createSandbox()
const Database = require('@database/Database.js')

const FetchWorkOrdersRouter = require('./FetchWorkOrdersRouter.js')

const app = express()
app.use(express.json())
app.use('/work_orders', FetchWorkOrdersRouter)

let fetchWorkOrdersFromWorkerWithName;

describe('Fetch work orders router', () => {
  before(() => {
    fetchWorkOrdersFromWorkerWithName = sandbox.stub(Database, 'fetchWorkOrdersFromWorkerWithName')
  })

  it('should response with status 200 and correct headers upon fetching the work orders from  a worker', done => {
    fetchWorkOrdersFromWorkerWithName.resolves([
      {
        "work_order_id": "8e39c932-a82b-11e9-a33d-77aafbef5282",
        "work_order_title": "mocked work Order",
        "work_order_description": "mocked work order description",
        "work_order_deadline": "2019-07-17T00:41:03.471Z",
        "worker_name": "mockedWorker"
      }
    ])

    request(app)
      .get('/work_orders/mockedWorker/mockedAscendingOrder')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should response with status 400 and correct headers upon bad request', done => {
    fetchWorkOrdersFromWorkerWithName.throws();

    request(app)
      .get('/work_orders/mockedWorker/mockedAscendingOrder')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '82')
      .expect(400, done)
  })

  after(() => {
    sandbox.restore()
  })
})
