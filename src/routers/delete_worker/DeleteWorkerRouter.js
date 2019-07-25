'use strict'

const Database = require('@database/Database.js')

const express = require('express')
const router = express.Router()

router.post('/', async (request, response) => {
  const { worker } = request.body

  try {
    await Database.deleteWorker(worker)

    response.status(200).json({
      response: 'Worker succesfully deleted'
    })
  } catch (error) {
    response.status(400).json({
      response: 'Could not delete worker at the moment, please try again'
    })
  }
})

module.exports = router
