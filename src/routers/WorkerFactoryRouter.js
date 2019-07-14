'use strict'

const WorkerFactory = require('../workerFactory/WorkerFactory.js')
const Database = require('../database/Database.js')

const express = require('express')
const router = express.Router()

router.post('/', async (request, response) => {
  const { Name, CompanyName, Email } = request.body
  try {
    const worker = WorkerFactory.create(Name, CompanyName, Email)
    await Database.createWorker(worker)

    response.status(200).send('Worker succesfully created')
  } catch (error) {
    response.status(400).send('Could not create worker at the moment, please try again')
  }
})

module.exports = router
