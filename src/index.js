'use strict'

const PORT = process.env.PORT || 3000

require('module-alias/register')
require('dotenv').config()
require('./config.js')

const express = require('express')
const cors = require('cors')
const http = require('http')
const pgPromise = require('pg-promise')
const Promise = require('bluebird')

const DatabaseManager = require('./database/manager/DatabaseManager.js')
const WorkerFactoryRouter = require('./routers/worker_factory_router/WorkerFactoryRouter.js')
const WorkOrderFactoryRouter = require('./routers/work_order_factory_router/WorkOrderFactoryRouter.js')
const AssignWorkOrderToWorkerRouter = require('./routers/assign_work_order_worker/AssignWorkOrderToWorkerRouter.js')
const FetchWorkOrdersRouter = require('./routers/fetch_worker_orders_router/FetchWorkOrdersRouter.js')

const app = express()
const httpServer = http.createServer(app)

app.use(express.json())
app.use(cors())

app.use('/create_worker', WorkerFactoryRouter)
app.use('/create_work_order', WorkOrderFactoryRouter)
app.use('/assign_work_order', AssignWorkOrderToWorkerRouter)
app.use('/work_orders', FetchWorkOrdersRouter)
app.post('/delete_worker', (request, response) => {
})

httpServer.listen(PORT, () => {

  const databaseCredentials = global._configuration.database
  const options = {
    promiseLib: Promise
  }

  const databaseManager = new DatabaseManager(pgPromise, options)
  databaseManager.initializeConnectionWithCredentials(databaseCredentials)

  console.log(`Listening on port ${PORT}`)
})
