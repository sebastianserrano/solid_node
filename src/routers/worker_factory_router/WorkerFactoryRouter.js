'use strict'

const WorkerFactory = require('@factories/worker_factory/WorkerFactory.js')
const Database = require('@database/Database.js')

const express = require('express')
const router = express.Router()

router.post('/', async (request, response) => {
  const { name, companyName, email } = request.body

  try {
    const worker = WorkerFactory.create(name, companyName, email)
    await Database.createWorker(worker)

    response.status(200).json({
      response: 'Worker succesfully created'
    })
  } catch (error) {
    response.status(400).json({
      response: 'Could not create worker at the moment, please try again'
    })
  }
})

module.exports = router
