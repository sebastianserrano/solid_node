'use strict'

const PORT = process.env.PORT || 3000
require('module-alias/register')
require('dotenv').config()
require('./config.js')

const express = require('express')
const cors = require('cors')
const http = require('http')
const pgPromise = require('pg-promise')

const DatabaseManager = require('./database/manager/DatabaseManager.js')
const WorkerFactoryRouter = require('./routers/worker_factory_router/WorkerFactoryRouter.js')
const WorkOrderFactoryRouter = require('./routers/work_order_factory_router/WorkOrderFactoryRouter.js')
const Promise = require('bluebird')

const app = express()
const httpServer = http.createServer(app)

app.use(express.json())
app.use(cors())

app.get('/work_orders/:worker?/:sorted?', (request, response) => {
  
})

app.use('/create_worker', WorkerFactoryRouter)
app.use('/create_work_order', WorkOrderFactoryRouter)

app.post('/delete_worker', (request, response) => {

    response.status(400).json({
      response: 'Could not create work order at the moment, please try again'
    })
})
app.post('/assign_work_order/:worker_id', (request, response) => {
  
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
