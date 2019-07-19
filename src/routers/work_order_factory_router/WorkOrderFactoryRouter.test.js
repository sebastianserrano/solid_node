const request = require('supertest')
const express = require('express')
const sandbox = require('sinon').createSandbox()
const Database = require('@database/Database.js')

const WorkOrderFactory = require('@factories/work_order_factory/WorkOrderFactory.js')
const WorkOrderFactoryRouter = require('./WorkOrderFactoryRouter.js')

const app = express()
app.use(express.json())
app.use('/create_work_order', WorkOrderFactoryRouter)

let createWorkOrder;

describe('Worker order factory router', () => {
  before(() => {
    sandbox.stub(WorkOrderFactory, 'create')
    createWorkOrder = sandbox.stub(Database, 'createWorkOrder')
  })

  it('should response with status 200 and correct headers upon creation of work order in database', done => {
    request(app)
      .post('/create_work_order')
      .send({
        title: 'mockedTitle',
        description: 'mockedDescription',
        deadline: 1558249206
      })
      .expect('Content-Type', /json/)
      .expect('Content-Length', '45')
      .expect(200, done)
  })

  it('should response with status 400 and correct headers upon bad request', done => {
    createWorkOrder.throws();

    request(app)
      .post('/create_work_order')
      .send({
        title: 'mockedTitle',
        description: 'mockedDescription',
        deadline: 1558249206
      })
      .expect('Content-Type', /json/)
      .expect('Content-Length', '74')
      .expect(400, done)
  })

  after(() => {
    sandbox.restore()
  })
})
