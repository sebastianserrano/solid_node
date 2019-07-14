'use strict'

const PORT = process.env.PORT || 3000
require('module-alias/register')
require('dotenv').config()
require('./config.js')

const express = require('express')
const cors = require('cors')
const http = require('http')
const pgPromise = require('pg-promise')

const DatabaseManager = require('./database/DatabaseManager.js')
const WorkerFactoryRouter = require('./routers/WorkerFactoryRouter.js')
const Promise = require('bluebird')

const app = express()
const httpServer = http.createServer(app)

app.use(express.json())
app.use(cors())

app.get('/work_orders/:worker?/:sorted?', (request, response) => {
  
})

app.use('/create_worker', WorkerFactoryRouter)

app.post('/delete_worker', (request, response) => {
  
})

app.post('/create_work_order', (request, response) => {
  
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
